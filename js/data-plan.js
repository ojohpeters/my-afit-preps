/* ============================================================
   35-DAY STUDY PLAN — AFIT Post-UTME (Electrical Engineering)
   Sprint window: Day 1 = 28 Jun 2026  →  Day 35 = 1 Aug 2026
   Exam window: 3–7 Aug 2026 (1-day buffer built in)
   Each non-mock day = read the lessons + pass the daily quiz (>=70%).
   ============================================================ */
window.EXAM_DATE = "2026-08-03T08:00:00";
window.SPRINT_START = "2026-06-28";
window.PASS_MARK = 70;

window.STUDY_PLAN = [
  // ---------- WEEK 1 — Foundations ----------
  {d:1, week:1, title:"Number Bases & Indices", focus:["Maths"],
   notes:["m-numberbases","m-indices"], topics:["m-numberbases","m-indices"]},
  {d:2, week:1, title:"Logarithms, Surds & Sets", focus:["Maths"],
   notes:["m-logs","m-surds","m-sets"], topics:["m-logs","m-surds","m-sets"]},
  {d:3, week:1, title:"Measurement, Units & Vectors", focus:["Physics"],
   notes:["p-measurement"], topics:["p-measurement"]},
  {d:4, week:1, title:"Atomic Structure & Periodic Table", focus:["Chemistry"],
   notes:["c-atomic","c-periodic"], topics:["c-atomic","c-periodic"]},
  {d:5, week:1, title:"Synonyms, Antonyms & Vocabulary", focus:["English"],
   notes:["e-vocab"], topics:["e-synonyms","e-antonyms","e-vocab"]},
  {d:6, week:1, title:"Nigerian Air Force & AFIT Facts", focus:["General"],
   notes:["about-afit","g-naf"], topics:["g-naf","g-afit"]},
  {d:7, week:1, title:"WEEKLY MOCK 1 — Week 1 topics", focus:["Mixed"], mock:true,
   notes:[], topics:["m-numberbases","m-indices","m-logs","m-surds","m-sets","p-measurement","c-atomic","c-periodic","e-synonyms","e-antonyms","g-naf","g-afit"]},

  // ---------- WEEK 2 — Algebra & Mechanics ----------
  {d:8, week:2, title:"Algebra & Quadratic Equations", focus:["Maths"],
   notes:["m-algebra","m-quadratic"], topics:["m-algebra","m-quadratic"]},
  {d:9, week:2, title:"Variation, Sequences & Series (AP/GP)", focus:["Maths"],
   notes:["m-sequence"], topics:["m-variation","m-sequence"]},
  {d:10, week:2, title:"Motion & Kinematics", focus:["Physics"],
   notes:["p-kinematics"], topics:["p-kinematics"]},
  {d:11, week:2, title:"Newton's Laws, Forces & Momentum", focus:["Physics"],
   notes:["p-dynamics"], topics:["p-dynamics","p-momentum"]},
  {d:12, week:2, title:"Chemical Bonding & Mole Concept", focus:["Chemistry"],
   notes:["c-bonding","c-mole"], topics:["c-bonding","c-mole"]},
  {d:13, week:2, title:"Concord (Agreement) & Tenses", focus:["English"],
   notes:["e-grammar"], topics:["e-concord","e-tenses"]},
  {d:14, week:2, title:"WEEKLY MOCK 2 — Weeks 1–2", focus:["Mixed"], mock:true,
   notes:[], topics:["m-algebra","m-quadratic","m-sequence","p-kinematics","p-dynamics","p-momentum","c-bonding","c-mole","e-concord","e-tenses"]},

  // ---------- WEEK 3 — Geometry, Energy, Reactions ----------
  {d:15, week:3, title:"Trigonometry", focus:["Maths"],
   notes:["m-trig"], topics:["m-trig"]},
  {d:16, week:3, title:"Coordinate Geometry & Mensuration", focus:["Maths"],
   notes:["m-coordinate","m-mensuration"], topics:["m-coordinate","m-mensuration"]},
  {d:17, week:3, title:"Work, Energy, Power & Equilibrium", focus:["Physics"],
   notes:["p-energy"], topics:["p-energy","p-equilibrium"]},
  {d:18, week:3, title:"Heat, Gas Laws & Elasticity", focus:["Physics"],
   notes:["p-heat"], topics:["p-heat","p-gaslaws","p-elasticity"]},
  {d:19, week:3, title:"Acids, Bases, Salts & Redox", focus:["Chemistry"],
   notes:["c-acids","c-redox"], topics:["c-acids","c-redox"]},
  {d:20, week:3, title:"Comprehension & Sentence Completion", focus:["English"],
   notes:["e-comprehension"], topics:["e-comprehension","e-vocab"]},
  {d:21, week:3, title:"WEEKLY MOCK 3 — Weeks 1–3", focus:["Mixed"], mock:true,
   notes:[], topics:["m-trig","m-coordinate","m-mensuration","p-energy","p-heat","c-acids","c-redox","e-comprehension"]},

  // ---------- WEEK 4 — Calculus, Electricity, EEE focus ----------
  {d:22, week:4, title:"Calculus — Differentiation & Integration", focus:["Maths"],
   notes:["m-calculus"], topics:["m-calculus"]},
  {d:23, week:4, title:"Statistics & Probability", focus:["Maths"],
   notes:["m-stats","m-probability"], topics:["m-stats","m-probability"]},
  {d:24, week:4, title:"Electrostatics & Current Electricity", focus:["Physics"],
   notes:["p-current"], topics:["p-electrostatics","p-current"]},
  {d:25, week:4, title:"Magnetism, Induction & Electronics (EEE core)", focus:["Physics"],
   notes:["p-electronics"], topics:["p-magnetism","p-induction","p-electronics"]},
  {d:26, week:4, title:"Electrolysis, Rates & Equilibrium", focus:["Chemistry"],
   notes:["c-electrolysis"], topics:["c-electrolysis","c-rates","c-equilibrium"]},
  {d:27, week:4, title:"Idioms, Figures of Speech & Common Errors", focus:["English"],
   notes:["e-figures"], topics:["e-idioms","e-figures","e-errors"]},
  {d:28, week:4, title:"WEEKLY MOCK 4 — Weeks 1–4", focus:["Mixed"], mock:true,
   notes:[], topics:["m-calculus","m-stats","m-probability","p-current","p-magnetism","p-electronics","c-electrolysis","c-rates","e-idioms","e-figures"]},

  // ---------- WEEK 5 — Consolidation & exam-readiness ----------
  {d:29, week:5, title:"Maths Revision — Matrices, Permutations, Geometry", focus:["Maths"],
   notes:["m-matrices","m-geometry"], topics:["m-matrices","m-permcomb","m-geometry"]},
  {d:30, week:5, title:"Waves, Sound & Light", focus:["Physics"],
   notes:["p-waves","p-light"], topics:["p-waves","p-light"]},
  {d:31, week:5, title:"Organic Chemistry, Energetics & Metals", focus:["Chemistry"],
   notes:["c-organic"], topics:["c-organic","c-energetics","c-separation","c-metals"]},
  {d:32, week:5, title:"Nigeria — Government, Geography & History", focus:["General"],
   notes:["g-nigeria"], topics:["g-nigeria","g-government","g-geography"]},
  {d:33, week:5, title:"Current Affairs & World Knowledge", focus:["General"],
   notes:["g-current"], topics:["g-currentaffairs","g-world","g-science"]},
  {d:34, week:5, title:"Speed Drill — English + Maths mixed", focus:["Mixed"],
   notes:[], topics:["e-synonyms","e-concord","e-tenses","m-algebra","m-indices","m-quadratic"]},
  {d:35, week:5, title:"FINAL MOCK — Full CBT Simulation", focus:["Mixed"], mock:true, final:true,
   notes:[], topics:["ALL"]},
];
