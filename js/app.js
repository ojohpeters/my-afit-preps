/* ============================================================
   AFIT PREP — app engine
   Plain JS, no build step, works offline from file://
   ============================================================ */
(function(){
"use strict";

/* ---------- State ---------- */
var KEY="afit_prep_v1";
var DEFAULT={profile:null,progress:{},stats:{},topicStats:{},missed:{},streak:0,mockScores:[]};
function load(){try{return Object.assign({},DEFAULT,JSON.parse(localStorage.getItem(KEY))||{});}catch(e){return Object.assign({},DEFAULT);}}
function save(){localStorage.setItem(KEY,JSON.stringify(S));}
var S=load();

/* ---------- Helpers ---------- */
function $(s,r){return (r||document).querySelector(s);}
function el(html){var d=document.createElement("div");d.innerHTML=html.trim();return d.firstChild;}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function subjClass(s){return ({Maths:"math",Physics:"physics",Chemistry:"chemistry",English:"english",General:"general"})[s]||"general";}
function dayStr(d){d=d||new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function startOfDay(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate());}
function daysBetween(a,b){return Math.round((startOfDay(b)-startOfDay(a))/86400000);}
function pct(n,d){return d?Math.round(n/d*100):0;}

var PLAN=window.STUDY_PLAN, NOTES=window.NOTES, QS=window.QUESTIONS, LABELS=window.TOPIC_LABELS;
var EXAM=new Date(window.EXAM_DATE), START=new Date(window.SPRINT_START+"T00:00:00"), PASS=window.PASS_MARK;

/* WhatsApp 1-on-1 help (owner: Ojochegbe Peter Ojoh) */
var WA_NUMBER="2348153304439"; // +234 815 330 4439
function waLink(msg){return "https://wa.me/"+WA_NUMBER+(msg?"?text="+encodeURIComponent(msg):"");}

function esc(s){return (s==null?"":""+s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

/* ----- strict calendar gating ----- */
/* calendarDay() = the single plan-day that is OPEN today (clamped 1..35). It
   advances automatically at midnight because it is derived from the date. */
function rawCalendarDay(){return daysBetween(START,new Date())+1;}
function calendarDay(){return Math.max(1,Math.min(35,rawCalendarDay()));}
function sprintOver(){return rawCalendarDay()>35;}
function dateForDay(d){var x=new Date(START);x.setDate(x.getDate()+(d-1));return x;}
function fmtDate(x){try{return x.toLocaleDateString(undefined,{weekday:"short",day:"numeric",month:"short"});}catch(e){return "";}}
function planByDay(d){for(var i=0;i<PLAN.length;i++)if(PLAN[i].d===d)return PLAN[i];return null;}
function dayDone(d){return !!(S.progress[d]&&S.progress[d].done);}
function dayLate(d){return !!(S.progress[d]&&S.progress[d].late);}
/* state of a day: done | redeemed | today | missed | future */
function dayState(d){
  if(dayDone(d))return dayLate(d)?"redeemed":"done";
  var a=calendarDay();
  if(d>a)return "future";
  if(d===a&&!sprintOver())return "today";
  return "missed"; // its calendar day has passed and it was not completed
}
/* record newly-missed days (run at load + at midnight rollover); returns new ones */
function reconcileMisses(){
  var a=calendarDay(),over=sprintOver(),end=over?35:a-1,changed=false,newly=[];
  for(var d=1;d<=end;d++){
    if(d===a&&!over)continue;
    if(!dayDone(d)&&!S.missed[d]){S.missed[d]={on:dayStr(dateForDay(d))};changed=true;newly.push(d);}
  }
  if(changed)save();
  return newly;
}
/* strikes = past days not completed on time (missed OR redeemed late) — permanent */
function strikes(){var a=calendarDay(),over=sprintOver(),end=over?35:a-1,n=0;for(var d=1;d<=end;d++){if(d===a&&!over)continue;if(!(dayDone(d)&&!dayLate(d)))n++;}return n;}
function missedOpen(){var a=calendarDay(),over=sprintOver(),end=over?35:a-1,list=[];for(var d=1;d<=end;d++){if(d===a&&!over)continue;if(!dayDone(d))list.push(d);}return list;}
function dueDays(){var a=calendarDay();return sprintOver()?35:a-1;}
function discipline(){var due=dueDays();if(due<=0)return 100;return Math.max(0,Math.round((due-strikes())/due*100));}
function deriveStreak(){var d=calendarDay(),n=0;if(!(dayDone(d)&&!dayLate(d)))d--;while(d>=1&&dayDone(d)&&!dayLate(d)){n++;d--;}return n;}

/* ----- profile ----- */
function hasProfile(){return !!(S.profile&&S.profile.name);}
function firstName(){return hasProfile()?(S.profile.name||"").trim().split(/\s+/)[0]:"";}
function courseName(){return (S.profile&&S.profile.course)?S.profile.course:"AFIT";}
function courseShort(){var c=courseName();return c.length>24?c.slice(0,22)+"…":c;}

/* ---------- Question pool ---------- */
function poolForTopics(topics,desired){
  var pool;
  if(topics.indexOf("ALL")>-1){pool=QS.slice();}
  else{pool=QS.filter(function(q){return topics.indexOf(q.topic)>-1;});}
  pool=shuffle(pool);
  // top-up from same subjects if too few
  if(desired&&pool.length<desired){
    var subs={};pool.forEach(function(q){subs[q.subject]=1;});
    if(topics.indexOf("ALL")>-1){subs={Maths:1,Physics:1,Chemistry:1,English:1,General:1};}
    var extra=shuffle(QS.filter(function(q){return subs[q.subject]&&pool.indexOf(q)<0;}));
    pool=pool.concat(extra);
  }
  return desired?pool.slice(0,desired):pool;
}

/* ---------- Stats recording ---------- */
function recordAnswer(q,correct){
  var st=S.stats[q.subject]||(S.stats[q.subject]={correct:0,total:0});
  st.total++; if(correct)st.correct++;
  var tt=S.topicStats[q.topic]||(S.topicStats[q.topic]={correct:0,total:0});
  tt.total++; if(correct)tt.correct++;
}
function totals(){var c=0,t=0;for(var k in S.stats){c+=S.stats[k].correct;t+=S.stats[k].total;}return{c:c,t:t};}

/* ---------- Top bar / sidebar refresh ---------- */
function refreshChrome(){
  var d=Math.max(0,daysBetween(new Date(),EXAM));
  $("#cd-days").textContent=d;
  $("#cd-exam").textContent="Aug 3";
  var T=totals();
  $("#tb-answered").textContent=T.t;
  $("#tb-accuracy").textContent=pct(T.c,T.t)+"%";
  var done=PLAN.filter(function(p){return dayDone(p.d);}).length;
  $("#tb-done").textContent=done+"/35";
  S.streak=deriveStreak();save();
  $("#streak-count").textContent=S.streak;
  var bs=$("#brand-sub");if(bs)bs.textContent=(hasProfile()?courseShort():"Post-UTME")+" · AFIT Kaduna";
}

/* ============================================================
   VIEWS
   ============================================================ */
function vDashboard(){
  var a=calendarDay(), p=planByDay(a), over=sprintOver();
  var done=PLAN.filter(function(x){return dayDone(x.d);}).length;
  var T=totals(), daysLeft=Math.max(0,daysBetween(new Date(),EXAM));
  var miss=missedOpen(), str=strikes(), disc=discipline(), name=firstName(), todayDone=dayDone(a);
  var discColor=disc>=80?"#22c55e":disc>=50?"#f59e0b":"#ef4444";

  var cta = over ? '<button class="btn btn-pri" data-go="mock">Take a final mock →</button>'
    : todayDone ? '<button class="btn btn-ghost" data-go="today">✓ Today done — revise</button>'
    : '<button class="btn btn-pri" data-go="today">▶ Start Today\'s Mission (Day '+a+')</button>';

  var html='<div class="hero"><div class="hero-ring"></div>'+
    '<h1>'+greeting()+(name?' '+esc(name)+'.':'')+' Let\'s get you into AFIT. ✈️</h1>'+
    '<p>Your goal: <b>'+esc(courseName())+'</b> at AFIT Kaduna. The screening is a CBT in Maths, English, Physics, Chemistry and General Knowledge. '+
    'One mission unlocks each calendar day — finish it before <b>midnight</b> or it locks as a <b>miss</b>. '+daysLeft+' days to go.</p>'+
    '<div class="hero-cta">'+cta+'<button class="btn btn-ghost" data-go="plan">Full plan</button></div>'+
    '<div class="made-by">✦ Crafted by <b>Ojochegbe Peter Ojoh</b> — for fellow AFIT aspirants</div>'+
  '</div>';

  // Risk / miss alert
  if(miss.length){
    html+='<div class="card alert-miss"><div><b>⚠ '+miss.length+' missed day'+(miss.length>1?'s':'')+'.</b> '+
      'Day '+miss.join(', Day ')+' closed without completion. A miss is a permanent <b>strike</b> — but you can still <b>redeem</b> the day to catch up the material (the strike stays, your streak won\'t).</div>'+
      '<button class="btn btn-ghost" data-go="plan">Redeem in plan →</button></div>';
  }

  // Dedication stats
  html+='<div class="section-t">Your dedication</div>'+
  '<div class="grid g4">'+
    statCard('🔥 '+S.streak,"day streak")+
    statCard(str,"strikes (missed)",str>0?"#f87171":null)+
    statCard(disc+"%","discipline",discColor)+
    statCard(done+"/35","missions done")+
  '</div>';

  // Today preview
  if(p&&!over){
    if(todayDone){
      html+='<div class="section-t">Today — Day '+a+' ✓</div>'+
      '<div class="card done-banner"><b style="color:#86efac">✓ Today\'s mission complete'+(S.progress[a]?' — '+S.progress[a].score+'%':'')+'.</b> '+
      (a<35?'Next: <b>Day '+(a+1)+'</b> unlocks '+fmtDate(dateForDay(a+1))+' (at midnight). Rest, or revise below.':'That was the final day — well done! 🎉')+'</div>';
    } else {
      html+='<div class="section-t">Today — Day '+a+'</div>'+
      '<div class="card">'+
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">'+
          '<div><div style="font-size:18px;font-weight:700">'+p.title+'</div>'+
          '<div class="muted" style="font-size:13px;margin-top:4px">'+fmtDate(dateForDay(a))+' • '+focusTags(p)+'</div></div>'+
          '<button class="btn btn-pri" data-go="today">Open mission →</button>'+
        '</div>'+
      '</div>';
    }
  }

  // Overall progress bar
  html+='<div class="section-t">Sprint progress</div>'+
  '<div class="card"><div class="pbar"><i style="width:'+pct(done,35)+'%"></i></div>'+
  '<div class="muted" style="margin-top:10px;font-size:13px">'+done+' of 35 daily missions complete • '+pct(done,35)+'% of the sprint • keep the 🔥 '+S.streak+'-day streak alive.</div></div>';

  // Weak areas
  html+='<div class="section-t">Where to focus</div>'+subjectBars();

  // Exam info
  html+='<div class="section-t">Know your exam</div>'+
  '<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">'+
    '<div><b>AFIT screening = a CBT</b> in English, Maths, Physics, Chemistry + general knowledge. Bring your JAMB slip, AFIT slip and a calculator. '+
    'Exact question count isn\'t published (≈50 is typical) — read the full briefing.</div>'+
    '<button class="btn btn-ghost" id="go-about">Read exam briefing →</button>'+
  '</div>';

  // Ask 1-on-1 CTA
  html+='<div class="section-t">Don\'t study alone</div>'+
  '<div class="card wa-cta">'+
    '<div><div style="font-size:16px;font-weight:700">💬 Stuck on a question? Message me directly.</div>'+
    '<div class="muted" style="font-size:13px;margin-top:4px">Send any past question on WhatsApp and we solve it together, 1-on-1.</div></div>'+
    '<button class="btn btn-wa" data-go="group">Ask Ojochegbe →</button>'+
  '</div>';

  // More resources (PrepsIQ)
  html+='<div class="section-t">More prep resources</div>'+
  '<div class="card resource-card">'+
    '<div><div style="font-size:16px;font-weight:700">↗ PrepsIQ</div>'+
    '<div class="muted" style="font-size:13px;margin-top:4px">Another Post-UTME prep platform I built — extra practice and more coverage. Worth a look.</div></div>'+
    '<a class="btn btn-ghost" href="https://prepsiq.vercel.app/" target="_blank" rel="noopener">Visit PrepsIQ →</a>'+
  '</div>';

  setTimeout(function(){var b=$("#go-about");if(b)b.onclick=function(){openNote("about-afit");};},0);
  return html;
}
function greeting(){var h=new Date().getHours();return h<12?"Good morning.":h<17?"Good afternoon.":"Good evening.";}
function statCard(v,l,color){return '<div class="card stat-card"><div class="v"'+(color?' style="color:'+color+'"':'')+'>'+v+'</div><div class="l">'+l+'</div></div>';}
function focusTags(p){return (p.focus||[]).map(function(f){var s=f==="Mixed"?"general":subjClass(f);return '<span class="tag tag-'+s+'">'+f+'</span>';}).join(" ");}
function subjectBars(){
  var subs=["Maths","Physics","Chemistry","English","General"],h='<div class="card">';
  subs.forEach(function(s){
    var st=S.stats[s]||{correct:0,total:0},p=pct(st.correct,st.total);
    h+='<div class="subject-row"><div class="sn"><span class="tag tag-'+subjClass(s)+'">'+s+'</span></div>'+
      '<div class="pbar"><i style="width:'+p+'%"></i></div><div class="pv">'+(st.total?p+"% ("+st.total+")":"—")+'</div></div>';
  });
  return h+'</div>';
}

function vToday(){
  if(sprintOver())return '<div class="empty"><h2>🏁 Sprint complete!</h2><p class="muted" style="max-width:480px;margin:8px auto">All 35 days are behind you. Keep sharp with mock exams and topic practice right up to exam day.</p><button class="btn btn-pri" data-go="mock" style="margin-top:14px">Take a mock →</button></div>';
  var a=calendarDay(), p=planByDay(a), prog=S.progress[a];
  var html='<div class="page-h">Day '+a+' — '+p.title+'</div>'+
  '<div class="page-sub">'+fmtDate(dateForDay(a))+' &nbsp;•&nbsp; '+focusTags(p)+(p.mock?' &nbsp;•&nbsp; timed mock checkpoint':'')+'</div>';

  if(prog&&prog.done){
    html+='<div class="card done-banner" style="margin-bottom:16px"><b style="color:#86efac">✓ Completed — '+prog.score+'%.</b> '+
      (a<35?'Come back tomorrow for <b>Day '+(a+1)+'</b> (unlocks '+fmtDate(dateForDay(a+1))+' at midnight).':'That was the final day — superb! 🎉')+
      ' You can still revise the lesson or retake below.</div>';
  }

  // Lessons
  if(p.notes&&p.notes.length){
    html+='<div class="section-t">Step 1 — Study the lesson'+(p.notes.length>1?"s":"")+'</div>';
    p.notes.forEach(function(k){var n=NOTES[k];if(!n)return;
      html+='<div class="card" style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">'+
        '<h3 style="font-size:18px">'+n.title+'</h3><span class="tag tag-'+subjClass(n.subject)+'">'+n.subject+'</span></div>'+
        '<div class="note">'+n.body+'</div></div>';
    });
  }

  // Quiz launcher
  var qcount=p.mock?(p.final?40:18):12;
  html+='<div class="section-t">Step 2 — '+(p.mock?'Take the mock':'Pass the daily quiz')+'</div>'+
  '<div class="card"><p class="muted" style="margin-bottom:14px">'+
    qcount+' questions • you need <b style="color:#fff">'+PASS+'%</b> to complete this day'+(p.mock?' • timed':'')+'.</p>'+
    '<button class="btn btn-pri" id="start-daily">'+(prog&&prog.done?'Retake quiz':'Start quiz')+' →</button>'+
  '</div>';

  setTimeout(function(){
    var b=$("#start-daily");
    if(b)b.onclick=function(){
      var qs=poolForTopics(p.topics,qcount);
      startQuiz({questions:qs,instant:!p.mock,timed:p.mock,seconds:qcount*60,title:"Day "+p.d+" — "+p.title,
        dayRef:p.d,onPass:null});
    };
  },0);
  return html;
}

function vPlan(){
  var html='<div class="page-h">35-Day Study Plan</div>'+
  '<div class="page-sub">One mission unlocks each calendar day (28 Jun → 1 Aug) and <b>locks at midnight</b>. Finish on time or it becomes a <b style="color:#f87171">miss</b> (a permanent strike). Missed days can be <b>redeemed</b> to study late, but the strike — and the broken streak — stay. Exam: 3–7 Aug.</div>';
  var wk=0;
  PLAN.forEach(function(p){
    if(p.week!==wk){wk=p.week;html+='<div class="section-t">Week '+wk+(wk===5?' — Final consolidation':'')+'</div>';}
    var st=dayState(p.d), date=fmtDate(dateForDay(p.d)), sc=S.progress[p.d]?S.progress[p.d].score:0;
    var num=(st==="done"||st==="redeemed")?"✓":(st==="missed"?"✗":p.d);
    var status, clickable=true;
    if(st==="done")status='<span class="day-status" style="color:#86efac">✓ '+sc+'%</span>';
    else if(st==="redeemed")status='<span class="day-status" style="color:#fcd34d">↺ '+sc+'% · late</span>';
    else if(st==="today")status='<span class="day-status" style="color:#67e8f9">● TODAY</span>';
    else if(st==="missed")status='<span class="day-status" style="color:#f87171">✗ MISSED · redeem</span>';
    else {status='<span class="day-status locked">🔒 '+date+'</span>';clickable=false;}
    html+='<div class="day-card state-'+st+'" data-day="'+p.d+'" data-state="'+st+'" '+(clickable?'style="cursor:pointer"':'')+'>'+
      '<div class="day-num">'+num+'</div>'+
      '<div class="day-body"><div class="day-title">'+p.title+(p.mock?' <span class="tag tag-general">MOCK</span>':'')+'</div>'+
      '<div class="day-tags">'+focusTags(p)+' <span class="day-date">'+date+'</span></div></div>'+status+'</div>';
  });
  setTimeout(function(){
    document.querySelectorAll(".day-card").forEach(function(c){
      var d=+c.getAttribute("data-day");
      c.onclick=function(){openDay(d);};
    });
  },0);
  return html;
}
function openDay(d){
  var st=dayState(d);
  if(st==="future"){toast("🔒 Day "+d+" unlocks "+fmtDate(dateForDay(d))+" (at midnight).");return;}
  if(st==="missed"){
    if(!confirm("⚠ Day "+d+" was MISSED — its day has already passed.\n\nYou can still study it to catch up, but it stays on your record as a strike and will NOT restore your streak.\n\nRedeem and study Day "+d+" now?"))return;
  }
  CURRENT_OPEN=d;
  go("today-day");
}
var CURRENT_OPEN=null;
function vTodayDay(){ // viewing a specific chosen day from the plan
  var p=planByDay(CURRENT_OPEN);if(!p)return vToday();
  var st=dayState(p.d), prog=S.progress[p.d];
  var html='<button class="btn btn-ghost" data-go="plan" style="margin-bottom:16px">← Back to plan</button>'+
  '<div class="page-h">Day '+p.d+' — '+p.title+'</div><div class="page-sub">'+fmtDate(dateForDay(p.d))+' &nbsp;•&nbsp; '+focusTags(p)+'</div>';
  if(st==="missed")html+='<div class="card alert-miss" style="margin-bottom:16px"><div><b>↺ Redeeming a missed day.</b> Study and pass it to learn the material — but note this still counts as a strike and won\'t restore your streak.</div></div>';
  if(prog&&prog.done)html+='<div class="card done-banner" style="margin-bottom:16px"><b style="color:#86efac">✓ Completed — '+prog.score+'%'+(prog.late?' (late)':'')+'</b></div>';
  if(p.notes&&p.notes.length){
    html+='<div class="section-t">Lesson'+(p.notes.length>1?"s":"")+'</div>';
    p.notes.forEach(function(k){var n=NOTES[k];if(!n)return;
      html+='<div class="card" style="margin-bottom:14px"><h3 style="font-size:18px;margin-bottom:6px">'+n.title+'</h3><div class="note">'+n.body+'</div></div>';});
  }
  var qcount=p.mock?(p.final?40:18):12;
  html+='<div class="section-t">Quiz</div><div class="card"><p class="muted" style="margin-bottom:14px">'+qcount+' questions • pass mark '+PASS+'%.</p>'+
  '<button class="btn btn-pri" id="open-day-quiz">'+(prog&&prog.done?'Retake':'Start')+' →</button></div>';
  setTimeout(function(){var b=$("#open-day-quiz");if(b)b.onclick=function(){
    startQuiz({questions:poolForTopics(p.topics,qcount),instant:!p.mock,timed:p.mock,seconds:qcount*60,title:"Day "+p.d+" — "+p.title,dayRef:p.d});
  };},0);
  return html;
}

function vLibrary(){
  var groups={Maths:[],Physics:[],Chemistry:[],English:[],General:[]};
  for(var k in NOTES){groups[NOTES[k].subject].push(k);}
  var html='<div class="page-h">Study Library</div><div class="page-sub">All lessons and formula sheets in one place. Tap any card to read. Great for quick revision.</div>';
  ["Maths","Physics","Chemistry","English","General"].forEach(function(s){
    if(!groups[s].length)return;
    html+='<div class="section-t">'+s+'</div><div class="topic-grid">';
    groups[s].forEach(function(k){var n=NOTES[k];
      html+='<div class="topic-card" data-note="'+k+'"><h4>'+n.title+'</h4><p>Tap to read →</p></div>';});
    html+='</div>';
  });
  setTimeout(function(){document.querySelectorAll("[data-note]").forEach(function(c){c.onclick=function(){openNote(c.getAttribute("data-note"));};});},0);
  return html;
}
var CURRENT_NOTE=null;
function openNote(k){CURRENT_NOTE=k;go("note");}
function vNote(){
  var n=NOTES[CURRENT_NOTE];if(!n)return vLibrary();
  return '<button class="btn btn-ghost" data-go="library" style="margin-bottom:16px">← Library</button>'+
  '<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'+
  '<h2 style="font-size:22px">'+n.title+'</h2><span class="tag tag-'+subjClass(n.subject)+'">'+n.subject+'</span></div>'+
  '<div class="note">'+n.body+'</div></div>';
}

function vPractice(){
  // group available topics (those with questions) by subject
  var counts={};QS.forEach(function(q){counts[q.topic]=(counts[q.topic]||0)+1;});
  var bySub={Maths:[],Physics:[],Chemistry:[],English:[],General:[]};
  Object.keys(counts).forEach(function(t){var q=QS.find(function(x){return x.topic===t;});if(q)bySub[q.subject].push(t);});
  var total=QS.length;
  var html='<div class="page-h">Practice by Topic</div><div class="page-sub">Free practice — drill any topic with instant feedback and explanations. No pass mark, just learning. <b>'+total+'</b> questions in the bank.</div>';
  ["Maths","Physics","Chemistry","English","General"].forEach(function(s){
    if(!bySub[s].length)return;
    // sort topics by question count (most first) and compute the subject total
    bySub[s].sort(function(a,b){return counts[b]-counts[a];});
    var subTotal=bySub[s].reduce(function(n,t){return n+counts[t];},0);
    html+='<div class="section-t">'+s+' <span class="muted" style="text-transform:none;letter-spacing:0;font-weight:600">· '+subTotal+' questions</span> &nbsp;'+
      '<button class="btn btn-ghost" style="padding:5px 12px;font-size:12px" data-subject="'+s+'">Mix all '+subTotal+' →</button></div><div class="topic-grid">';
    bySub[s].forEach(function(t){
      var n=counts[t];
      html+='<div class="topic-card" data-topic="'+t+'"><h4>'+(LABELS[t]||t)+'</h4><p>'+n+' question'+(n===1?'':'s')+' →</p></div>';});
    html+='</div>';
  });
  setTimeout(function(){
    document.querySelectorAll("[data-topic]").forEach(function(c){c.onclick=function(){
      var t=c.getAttribute("data-topic");
      startQuiz({questions:poolForTopics([t]),instant:true,timed:false,title:LABELS[t]||t,dayRef:null});};});
    document.querySelectorAll("[data-subject]").forEach(function(c){c.onclick=function(){
      var s=c.getAttribute("data-subject");
      startQuiz({questions:shuffle(QS.filter(function(q){return q.subject===s;})),instant:true,timed:false,title:s+" — mixed practice",dayRef:null});};});
  },0);
  return html;
}

function vMock(){
  var html='<div class="page-h">Mock Exam — CBT Simulation</div>'+
  '<div class="page-sub">Simulate the real screening: mixed questions across all five areas, on a timer, with no feedback until the end. Build speed and stamina. '+
  'AFIT doesn\'t publish the exact count — ~50 is typical for Nigerian Post-UTMEs, so the 60-question run is deliberate over-preparation.</div>'+
  '<div class="grid g4">'+
    mockCard("Quick Mock","20 questions • 20 min",20)+
    mockCard("Exam Replica","50 questions • 50 min",50)+
    mockCard("Standard Mock","40 questions • 40 min",40)+
    mockCard("Full Simulation","60 questions • 60 min",60)+
  '</div>';
  if(S.mockScores&&S.mockScores.length){
    html+='<div class="section-t">Your mock history</div><div class="card">';
    S.mockScores.slice().reverse().slice(0,8).forEach(function(m){
      html+='<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><span class="muted">'+m.date+' • '+m.count+' Qs</span><b style="color:'+(m.score>=PASS?"#86efac":"#fcd34d")+'">'+m.score+'%</b></div>';
    });
    html+='</div>';
  }
  setTimeout(function(){document.querySelectorAll("[data-mock]").forEach(function(c){c.onclick=function(){
    var n=+c.getAttribute("data-mock");
    startQuiz({questions:poolForTopics(["ALL"],n),instant:false,timed:true,seconds:n*60,title:n+"-Question Mock Exam",dayRef:null,isMock:true});};});},0);
  return html;
}
function mockCard(t,sub,n){return '<div class="card" style="text-align:center"><h3 style="font-size:18px;margin-bottom:6px">'+t+'</h3>'+
  '<p class="muted" style="font-size:13px;margin-bottom:16px">'+sub+'</p><button class="btn btn-pri" data-mock="'+n+'">Begin →</button></div>';}

function vGroup(){
  var msg="Hi Ojochegbe 👋 I'm using the AFIT Prep app. I have a question I'd like help with:\n\n(paste or attach your question here)";
  var html='<div class="page-h">Bring a Question — Let\'s Solve It 1-on-1 💬</div>'+
  '<div class="page-sub">Stuck on a past question or a tricky topic? Don\'t struggle alone. Message me directly on WhatsApp — type it out or snap a photo — and we\'ll work through it together, one on one.</div>'+
  '<div class="card wa-card">'+
    '<div class="wa-ico">💬</div>'+
    '<h3 style="font-size:20px;margin-bottom:6px">Message Ojochegbe directly</h3>'+
    '<p class="muted" style="margin-bottom:18px;max-width:520px">Send any question — Maths, Physics, Chemistry, English or General Knowledge — and I\'ll help you solve it step by step, <b style="color:#fff">one on one</b>.</p>'+
    '<a class="btn btn-wa" href="'+waLink(msg)+'" target="_blank" rel="noopener">💬 Message me on WhatsApp</a>'+
    '<div class="wa-num">or save <b>0815 330 4439</b></div>'+
  '</div>'+
  '<div class="section-t">How it works</div>'+
  '<div class="grid g3">'+
    '<div class="card"><div style="font-size:24px;margin-bottom:8px">📸</div><b>1. Send it</b><p class="muted" style="font-size:13px;margin-top:4px">Type your question or send a clear photo of the past-question to me on WhatsApp.</p></div>'+
    '<div class="card"><div style="font-size:24px;margin-bottom:8px">🧠</div><b>2. We solve it together</b><p class="muted" style="font-size:13px;margin-top:4px">I break it down step by step, 1-on-1, until the method clicks for you.</p></div>'+
    '<div class="card"><div style="font-size:24px;margin-bottom:8px">🚀</div><b>3. You level up</b><p class="muted" style="font-size:13px;margin-top:4px">Great questions may get added to the app\'s bank so others can practise too.</p></div>'+
  '</div>'+
  '<div class="card" style="margin-top:16px"><b>Quick tip:</b> <span class="muted">send a clear photo or type the full question (and any options) so I can help you faster. Ask anytime — no question is too small. 🤝</span></div>';
  return html;
}

function vStats(){
  var T=totals();
  var html='<div class="page-h">My Statistics</div><div class="page-sub">Track accuracy, find weak topics, and prove to yourself you\'re ready.</div>';
  html+='<div class="grid g4">'+
    statCard(T.t,"total answered")+
    statCard(pct(T.c,T.t)+"%","accuracy")+
    statCard(S.streak,"day streak 🔥")+
    statCard((S.mockScores||[]).length,"mocks taken")+
  '</div>';
  html+='<div class="section-t">Accuracy by subject</div>'+subjectBars();

  // topic weak spots
  var rows=[];for(var t in S.topicStats){var x=S.topicStats[t];rows.push({t:t,p:pct(x.correct,x.total),n:x.total});}
  rows.sort(function(a,b){return a.p-b.p;});
  html+='<div class="section-t">Topics to revisit (weakest first)</div><div class="card">';
  if(!rows.length){html+='<p class="muted">Answer some questions and your weak topics will show here.</p>';}
  else{rows.slice(0,12).forEach(function(r){
    html+='<div class="subject-row"><div class="sn" style="width:200px;font-size:12.5px">'+(LABELS[r.t]||r.t)+'</div>'+
    '<div class="pbar"><i style="width:'+r.p+'%;background:'+(r.p<50?"linear-gradient(90deg,#ef4444,#f59e0b)":"linear-gradient(90deg,#3b82f6,#22d3ee)")+'"></i></div>'+
    '<div class="pv">'+r.p+'% ('+r.n+')</div></div>';});}
  html+='</div>';
  return html;
}

/* ============================================================
   QUIZ ENGINE
   ============================================================ */
var Q=null; // active quiz
function startQuiz(cfg){
  Q={list:cfg.questions,idx:0,picked:[],instant:cfg.instant,timed:cfg.timed,seconds:cfg.seconds||0,
     title:cfg.title,dayRef:cfg.dayRef,isMock:cfg.isMock,correct:0,answered:0,timer:null};
  if(!Q.list.length){toast("No questions available for this selection.");return;}
  renderQuiz();
}
function renderQuiz(){
  var v=$("#view");
  var timerHtml=Q.timed?'<div class="q-timer" id="q-timer">'+fmtTime(Q.seconds)+'</div>':'';
  v.innerHTML='<div class="quiz-head"><div><div style="font-weight:700;font-size:16px">'+Q.title+'</div>'+
    '<div class="quiz-prog">Question <span id="q-cur">1</span> of '+Q.list.length+'</div></div>'+timerHtml+'</div>'+
    '<div id="q-body"></div>';
  if(Q.timed)startTimer();
  paintQuestion();
}
function paintQuestion(){
  var q=Q.list[Q.idx];
  $("#q-cur").textContent=(Q.idx+1);
  var letters=["A","B","C","D","E"];
  var picked=Q.picked[Q.idx];
  var opts=q.options.map(function(o,i){
    var cls="opt"+( (Q.instant&&picked!=null)?" disabled":"" );
    if(Q.instant&&picked!=null){
      if(i===q.answer)cls+=" correct";
      else if(i===picked)cls+=" wrong";
    } else if(!Q.instant&&picked===i){cls+=" correct";}
    return '<div class="'+cls+'" data-opt="'+i+'"><div class="ol">'+letters[i]+'</div><div>'+o+'</div></div>';
  }).join("");
  var explain=(Q.instant&&picked!=null)?'<div class="explain show"><b>'+(picked===q.answer?"Correct! ":"Answer: "+letters[q.answer]+". ")+'</b>'+q.exp+'</div>':'';
  var last=Q.idx===Q.list.length-1;
  $("#q-body").innerHTML='<div class="q-card"><div class="q-num"><span class="tag tag-'+subjClass(q.subject)+'">'+q.subject+'</span> &nbsp; '+(LABELS[q.topic]||"")+'</div>'+
    '<div class="q-text">'+q.q+'</div>'+opts+explain+
    '<div class="quiz-foot"><button class="btn btn-ghost" id="q-prev"'+(Q.idx===0?' disabled':'')+'>← Prev</button>'+
    '<button class="btn btn-pri" id="q-next">'+(last?(Q.instant?"Finish":"Submit"):"Next →")+'</button></div></div>';

  document.querySelectorAll("[data-opt]").forEach(function(o){o.onclick=function(){pick(+o.getAttribute("data-opt"));};});
  $("#q-next").onclick=function(){
    if(Q.instant&&Q.picked[Q.idx]==null){toast("Pick an answer first.");return;}
    if(last)finishQuiz();else{Q.idx++;paintQuestion();}
  };
  $("#q-prev").onclick=function(){if(Q.idx>0){Q.idx--;paintQuestion();}};
}
function pick(i){
  var q=Q.list[Q.idx];
  if(Q.instant){
    if(Q.picked[Q.idx]!=null)return; // lock
    Q.picked[Q.idx]=i;
    var correct=i===q.answer;
    if(correct)Q.correct++;
    Q.answered++;
    recordAnswer(q,correct);save();refreshChrome();
    paintQuestion();
  } else {
    Q.picked[Q.idx]=i; // can change until submit
    paintQuestion();
  }
}
function fmtTime(s){var m=Math.floor(s/60),x=s%60;return m+":"+(x<10?"0":"")+x;}
function startTimer(){
  Q.timer=setInterval(function(){
    Q.seconds--;
    var t=$("#q-timer");if(t){t.textContent=fmtTime(Q.seconds);
      t.className="q-timer"+(Q.seconds<60?" danger":Q.seconds<180?" warn":"");}
    if(Q.seconds<=0){clearInterval(Q.timer);toast("Time up! Submitting…");finishQuiz();}
  },1000);
}
function finishQuiz(){
  if(Q.timer)clearInterval(Q.timer);
  // grade (for non-instant mode, record now)
  var correct=0;
  Q.list.forEach(function(q,i){
    var p=Q.picked[i];var ok=p===q.answer;if(ok)correct++;
    if(!Q.instant){recordAnswer(q,ok);}
  });
  var score=pct(correct,Q.list.length);
  if(!Q.instant)save();
  // subject breakdown
  var bd={};Q.list.forEach(function(q,i){var b=bd[q.subject]||(bd[q.subject]={c:0,t:0});b.t++;if(Q.picked[i]===q.answer)b.c++;});

  var passed=score>=PASS;
  // daily completion
  var newlyDone=false, wasLate=false;
  if(Q.dayRef!=null){
    var prev=S.progress[Q.dayRef];
    if(passed){
      wasLate=(Q.dayRef<calendarDay())||sprintOver(); // completing a past day = redeemed/late
      if(!(prev&&prev.done))newlyDone=true;
      S.progress[Q.dayRef]={done:true,score:Math.max(score,prev?prev.score||0:0),date:dayStr(),
        late:wasLate||!!(prev&&prev.late)};
      if(S.missed[Q.dayRef])delete S.missed[Q.dayRef]; // redeemed — no longer "open miss" (strike stays via late flag)
      save();
    }
  }
  if(Q.isMock){
    S.mockScores=S.mockScores||[];
    S.mockScores.push({date:dayStr(),count:Q.list.length,score:score});
    save();
  }
  refreshChrome();
  renderResult(score,correct,bd,passed,newlyDone,wasLate);
}
function renderResult(score,correct,bd,passed,newlyDone,wasLate){
  var ringColor=score>=80?"#22c55e":score>=PASS?"#3b82f6":score>=40?"#f59e0b":"#ef4444";
  var msg=passed?(wasLate?"Redeemed — day caught up (late). ↺":(newlyDone?"Mission complete — day cleared! 🎉":"Passed! Solid work.")):"Below "+PASS+"% — review and retake to clear this day.";
  var bdHtml="";for(var s in bd){bdHtml+='<div class="pill"><b>'+pct(bd[s].c,bd[s].t)+'%</b>'+s+' ('+bd[s].c+'/'+bd[s].t+')</div>';}

  var html='<div class="result">'+
    '<div class="score-ring" style="background:conic-gradient('+ringColor+' '+(score*3.6)+'deg, var(--panel2) 0deg);">'+
      '<div style="position:absolute;inset:12px;border-radius:50%;background:var(--bg);display:grid;place-items:center">'+score+'%</div></div>'+
    '<h2>'+msg+'</h2>'+
    '<p>You got <b style="color:#fff">'+correct+'</b> out of <b style="color:#fff">'+Q.list.length+'</b> correct.'+
      (passed&&wasLate?' Material caught up — but the strike stays and your streak isn\'t restored.':(newlyDone?' Streak is now 🔥 '+S.streak+' days.':''))+'</p>'+
    '<div class="pill-row">'+bdHtml+'</div>'+
    '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">'+
      '<button class="btn btn-pri" id="r-review">Review answers</button>'+
      '<button class="btn btn-ghost" id="r-retake">Retake</button>'+
      '<button class="btn btn-ghost" data-go="'+(Q.dayRef!=null?'plan':'dashboard')+'">'+(Q.dayRef!=null?'Back to plan':'Done')+'</button>'+
    '</div>'+
    '<div class="made-by" style="margin-top:22px">✦ <b>Ojochegbe Peter Ojoh</b> • AFIT Prep</div>'+
    '</div>';
  $("#view").innerHTML=html;
  bindGo();
  $("#r-retake").onclick=function(){var cfg={questions:shuffle(Q.list),instant:Q.instant,timed:Q.timed,seconds:(Q.list.length)*60,title:Q.title,dayRef:Q.dayRef,isMock:Q.isMock};startQuiz(cfg);};
  $("#r-review").onclick=function(){renderReview();};
}
function renderReview(){
  var letters=["A","B","C","D","E"];
  var html='<button class="btn btn-ghost" id="rev-back" style="margin-bottom:16px">← Back to result</button><div class="page-h">Review — '+Q.title+'</div><div class="page-sub">Green = correct answer. Red = what you picked if wrong.</div>';
  Q.list.forEach(function(q,i){
    var picked=Q.picked[i];
    var opts=q.options.map(function(o,j){
      var cls="opt disabled";if(j===q.answer)cls+=" correct";else if(j===picked)cls+=" wrong";
      return '<div class="'+cls+'"><div class="ol">'+letters[j]+'</div><div>'+o+'</div></div>';}).join("");
    html+='<div class="q-card" style="margin-bottom:14px"><div class="q-num">Q'+(i+1)+' • <span class="tag tag-'+subjClass(q.subject)+'">'+q.subject+'</span></div>'+
      '<div class="q-text" style="font-size:15px">'+q.q+'</div>'+opts+
      '<div class="explain show"><b>'+(picked===q.answer?"You got it. ":picked==null?"Not answered. Answer "+letters[q.answer]+". ":"Answer: "+letters[q.answer]+". ")+'</b>'+q.exp+'</div></div>';
  });
  $("#view").innerHTML=html;
  $("#rev-back").onclick=function(){finishQuizRerender();};
}
function finishQuizRerender(){
  // recompute result view without re-recording stats
  var correct=0;Q.list.forEach(function(q,i){if(Q.picked[i]===q.answer)correct++;});
  var score=pct(correct,Q.list.length);
  var bd={};Q.list.forEach(function(q,i){var b=bd[q.subject]||(bd[q.subject]={c:0,t:0});b.t++;if(Q.picked[i]===q.answer)b.c++;});
  renderResult(score,correct,bd,score>=PASS,false);
}

/* ============================================================
   ROUTER
   ============================================================ */
var VIEWS={dashboard:vDashboard,today:vToday,"today-day":vTodayDay,plan:vPlan,library:vLibrary,
  note:vNote,practice:vPractice,mock:vMock,stats:vStats,group:vGroup};
var CURRENT_VIEW="dashboard";
function go(name){
  if(Q&&Q.timer){clearInterval(Q.timer);} // leaving a timed quiz cancels timer
  CURRENT_VIEW=name;
  var fn=VIEWS[name]||vDashboard;
  var v=$("#view");
  v.classList.remove("enter");
  v.innerHTML=fn();
  void v.offsetWidth; // force reflow so the animation replays each navigation
  v.classList.add("enter");
  refreshChrome();
  // active nav
  document.querySelectorAll(".nav-item").forEach(function(n){n.classList.toggle("active",n.getAttribute("data-view")===name);});
  bindGo();
  window.scrollTo(0,0);
  var sb=$(".sidebar");if(sb)sb.classList.remove("open");
}
function bindGo(){document.querySelectorAll("[data-go]").forEach(function(b){b.onclick=function(){go(b.getAttribute("data-go"));};});}

/* ---------- init ---------- */
function toast(msg){var t=el('<div class="toast">'+msg+'</div>');document.body.appendChild(t);
  setTimeout(function(){t.classList.add("show");},10);setTimeout(function(){t.classList.remove("show");setTimeout(function(){t.remove();},300);},2200);}

document.querySelectorAll(".nav-item").forEach(function(n){n.onclick=function(){go(n.getAttribute("data-view"));};});
$("#reset-btn").onclick=function(){
  if(confirm("Reset ALL progress, streak, stats and your profile? This cannot be undone.")){
    localStorage.removeItem(KEY);S=load();refreshChrome();
    if(!hasProfile())showOnboarding(false);else{go("dashboard");}
    toast("Progress reset.");}
};
// mobile sidebar toggle
var mt=el('<button class="mobile-toggle">☰</button>');document.body.appendChild(mt);
mt.onclick=function(){$(".sidebar").classList.toggle("open");};

// edit profile by clicking the brand block
var brand=$(".brand");if(brand){brand.style.cursor="pointer";brand.title="Edit your name / course";
  brand.onclick=function(){showOnboarding(true);};}

// footer: year + whatsapp link
(function(){
  var y=$("#foot-year");if(y)y.textContent=new Date().getFullYear();
  var fw=$("#foot-wa");if(fw)fw.href=waLink("Hi Ojochegbe 👋 I'm using the AFIT Prep app and have a question I'd like help with.");
})();

/* ---------- onboarding (name + course) ---------- */
var COURSES=["Electrical/Electronic Engineering","Aerospace Engineering","Mechatronics Engineering",
  "Civil Engineering","Computer Engineering","Telecommunications Engineering",
  "Information & Communication Technology","Computer Science","Cyber Security",
  "Mathematics","Physics","Chemistry","Business Administration","Accounting","Economics"];
function showOnboarding(isEdit){
  var ov=$("#onboard");if(ov)ov.remove();
  var name=isEdit&&S.profile?esc(S.profile.name||""):"";
  var course=isEdit&&S.profile?esc(S.profile.course||""):"";
  var opts=COURSES.map(function(c){return '<option value="'+esc(c)+'">';}).join("");
  ov=el('<div class="onboard-overlay" id="onboard"><div class="onboard-card">'+
    '<div class="ob-badge">AFIT</div>'+
    '<h2>'+(isEdit?"Edit your details":"Welcome to your Post-UTME sprint")+'</h2>'+
    '<p class="ob-sub">'+(isEdit?"Update your name or course below.":"Let\'s personalise it for you. Saved only on this device — no sign-up, no password.")+'</p>'+
    '<label for="ob-name">Your name or initials</label>'+
    '<input id="ob-name" type="text" maxlength="40" autocomplete="off" placeholder="e.g. Peter, or P.O." value="'+name+'" />'+
    '<label for="ob-course">Course you\'re aspiring for at AFIT</label>'+
    '<input id="ob-course" list="ob-courses" maxlength="60" autocomplete="off" placeholder="Start typing or pick…" value="'+course+'" />'+
    '<datalist id="ob-courses">'+opts+'</datalist>'+
    '<div class="ob-err" id="ob-err"></div>'+
    '<button class="btn btn-pri ob-save" id="ob-save">'+(isEdit?"Save":"Start studying →")+'</button>'+
    (isEdit?'<button class="btn btn-ghost ob-cancel" id="ob-cancel">Cancel</button>':'')+
    '<div class="ob-foot">✦ Built by Ojochegbe Peter Ojoh</div>'+
  '</div></div>');
  document.body.appendChild(ov);
  var nameI=$("#ob-name");setTimeout(function(){nameI.focus();},30);
  $("#ob-save").onclick=function(){
    var nm=nameI.value.trim(), cr=$("#ob-course").value.trim();
    if(!nm){$("#ob-err").textContent="Please enter your name or initials.";nameI.focus();return;}
    S.profile={name:nm,course:cr||"AFIT Aspirant"};save();
    ov.remove();refreshChrome();go("dashboard");
    toast("Welcome, "+esc(firstName())+"! 🚀");
  };
  $("#ob-name").onkeydown=function(e){if(e.key==="Enter")$("#ob-save").click();};
  var cancel=$("#ob-cancel");if(cancel)cancel.onclick=function(){ov.remove();};
}

/* ---------- midnight rollover watcher ---------- */
var __lastDay=calendarDay();
setInterval(function(){
  var c=calendarDay();
  if(c!==__lastDay){
    __lastDay=c;
    reconcileMisses();
    refreshChrome();
    if(!$("#onboard"))go(CURRENT_VIEW);
    toast("🌅 A new day — Day "+c+" is now open. Yesterday is locked.");
  }
},30000);

// record any days missed since last visit, then start
reconcileMisses();
refreshChrome();
if(!hasProfile())showOnboarding(false);else go("dashboard");
})();
