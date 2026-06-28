/* ============================================================
   STUDY NOTES & FORMULA SHEETS  —  keyed by topic id
   Detailed, exam-focused, with worked examples + common traps.
   Built for AFIT Post-UTME (Electrical Engineering).
   ============================================================ */
window.NOTES = {

/* ===================== ABOUT THE EXAM / SCHOOL ===================== */
"about-afit":{title:"About AFIT & The Screening",subject:"General",body:`
<h3>The Air Force Institute of Technology (AFIT)</h3>
<p>AFIT is a military-run university in <b>Kaduna</b> (NAF Base, Kawo), often called the <b>Nigerian Air Force University</b>. Knowing your school well is a genuine edge — general-knowledge sections love "about us" questions.</p>
<h4>Key dates & names</h4>
<ul>
<li>Founded <b>1977</b> as the <b>Technical and Supply School (TSS)</b>.</li>
<li>Renamed Technical Training Wing (1979) → Technical Training Group (1983) → <b>320 TTG (2000)</b>.</li>
<li>Formally became <b>AFIT on 12 March 2008</b>.</li>
<li>Approved by the <b>National Universities Commission (NUC)</b> to run degrees in <b>2018</b>.</li>
<li>Motto: <b>"Quest for Excellence"</b>.</li>
</ul>
<h4>Structure</h4>
<p>AFIT has <b>5 faculties</b> plus a School of Postgraduate Studies:</p>
<ul>
<li><b>Air Engineering</b></li>
<li><b>Ground and Communication Engineering</b> (your Electrical Engineering lives around here)</li>
<li><b>Computing</b></li>
<li><b>Sciences</b></li>
<li><b>Social and Management Sciences</b></li>
</ul>
<h4>Accreditation & reach</h4>
<ul>
<li>Accredited by <b>NUC, NBTE, COREN</b> (engineers' regulator) and the <b>Nigerian Society of Engineers (NSE)</b>.</li>
<li>Affiliated with <b>Cranfield University (UK)</b> for postgraduate aerospace studies.</li>
<li>Has graduated over <b>5,600</b> people (Air Force, Army, Navy and civilians, including international students).</li>
</ul>
<div class="key"><b>Exam format (what to expect):</b> a physical <b>Computer-Based Test (CBT)</b> for degree candidates, drawn from <b>English, Mathematics, Physics, Chemistry</b> plus general knowledge / current affairs. The exact number of questions isn't officially published — many Nigerian Post-UTMEs use about <b>50 questions</b>, so this app's 60-question "Full Simulation" is deliberate over-preparation. Bring your <b>JAMB slip, AFIT acknowledgement slip and a calculator</b>. JAMB cut-off has been <b>200</b> for degree programmes — with 228 you're above the line; the screening decides the rest.</div>`},

/* ===================== MATHEMATICS ===================== */
"m-numberbases":{title:"Number Bases",subject:"Maths",body:`
<p>The <b>base</b> of a number tells you how many distinct digits it uses and the value of each place. Base 10 (denary) uses digits 0–9; base 2 (binary) uses 0–1; base 8 (octal) 0–7; base 16 (hexadecimal) uses 0–9 then A,B,C,D,E,F.</p>
<p>Place values are <b>powers of the base</b>. In base 10 the columns are …, 1000, 100, 10, 1 (that is 10³, 10², 10¹, 10⁰). In base 2 they are …, 8, 4, 2, 1 (2³, 2², 2¹, 2⁰).</p>

<h4>1 · Converting any base → base 10 (expand)</h4>
<p>Multiply each digit by its place value and add.</p>
<div class="formula">1011<sub>2</sub> = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11<sub>10</sub></div>
<div class="formula">324<sub>5</sub> = 3·25 + 2·5 + 4·1 = 75 + 10 + 4 = 89<sub>10</sub></div>

<h4>2 · Converting base 10 → another base (repeated division)</h4>
<p>Divide repeatedly by the new base, keep the remainders, then read them <b>bottom-up</b>.</p>
<div class="formula">45 → base 2:
45÷2 = 22 r <b>1</b>
22÷2 = 11 r <b>0</b>
11÷2 = 5  r <b>1</b>
5÷2  = 2  r <b>1</b>
2÷2  = 1  r <b>0</b>
1÷2  = 0  r <b>1</b>
Read up → 101101<sub>2</sub></div>

<h4>3 · Adding & multiplying in a base</h4>
<p>Work as normal, but <b>carry the base</b> instead of 10. In binary you carry when a column reaches 2; in octal when it reaches 8.</p>
<div class="formula">101<sub>2</sub> + 011<sub>2</sub>:  1+1 = 10 (write 0 carry 1); 0+1+1 = 10 (write 0 carry 1); 1+0+1 = 10 → answer 1000<sub>2</sub> (= 5+3 = 8 ✓)</div>

<h4>4 · Solving "find the base" equations</h4>
<p>Convert each side to base 10 using an unknown base <i>x</i>, then solve.</p>
<div class="formula">If 24<sub>x</sub> = 14<sub>10</sub> then 2x + 4 = 14 → x = 5.</div>
<div class="key"><b>Exam traps:</b> a digit can never equal or exceed its base (you can't have a "5" in base 5). Always read remainders bottom-up, not top-down.</div>`},

"m-indices":{title:"Indices (Laws of Exponents)",subject:"Maths",body:`
<p>An index (power) tells you how many times to multiply a number by itself: 2⁴ = 2×2×2×2 = 16. Mastering the seven laws lets you simplify almost anything.</p>
<h4>The laws</h4>
<div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ        (add powers when multiplying)
aᵐ ÷ aⁿ = aᵐ⁻ⁿ        (subtract powers when dividing)
(aᵐ)ⁿ = aᵐⁿ           (multiply powers for a power of a power)
(ab)ⁿ = aⁿbⁿ
a⁰ = 1                (anything to power 0 is 1)
a⁻ⁿ = 1/aⁿ            (negative power = reciprocal)
a^(1/n) = ⁿ√a , a^(m/n) = (ⁿ√a)ᵐ</div>

<h4>Worked examples</h4>
<div class="formula">8^(2/3) = (³√8)² = 2² = 4</div>
<div class="formula">(3x²)³ = 27x⁶</div>
<div class="formula">16^(−¾) = 1/16^(¾) = 1/(⁴√16)³ = 1/2³ = 1/8</div>

<h4>Solving index equations</h4>
<p><b>Strategy:</b> write both sides with the <b>same base</b>, then equate the powers.</p>
<div class="formula">2^(x+1) = 32  →  2^(x+1) = 2⁵  →  x + 1 = 5  →  x = 4</div>
<div class="formula">9ˣ = 27  →  (3²)ˣ = 3³  →  2x = 3  →  x = 3/2</div>
<div class="key"><b>Common mistakes:</b> a⁻¹ means <i>reciprocal</i> (1/a), not "negative a". And aᵐ + aⁿ does <b>not</b> simplify by adding powers — the laws are only for × and ÷.</div>`},

"m-logs":{title:"Logarithms",subject:"Maths",body:`
<p>A logarithm is the inverse of an index. It answers: "to what power must I raise the base to get this number?"</p>
<div class="formula">If aˣ = n  then  logₐ n = x.   e.g. 2³ = 8  ⇔  log₂ 8 = 3</div>
<p>"log" with no base written means base 10. "ln" means base e (natural log).</p>

<h4>Laws of logarithms (mirror the index laws)</h4>
<div class="formula">log(M×N) = log M + log N
log(M÷N) = log M − log N
log(Mᵖ)  = p · log M
logₐ a = 1 ,  logₐ 1 = 0</div>
<div class="formula">Change of base: logₐ n = (log n)/(log a)</div>

<h4>Worked examples</h4>
<div class="formula">log₂ 32 = 5   (because 2⁵ = 32)</div>
<div class="formula">Given log 2 = 0.301: log 8 = log 2³ = 3(0.301) = 0.903</div>
<div class="formula">log 200 = log(2×100) = log 2 + log 100 = 0.301 + 2 = 2.301</div>
<div class="formula">Solve log₃ x = 4  →  x = 3⁴ = 81</div>
<div class="key"><b>Exam trap:</b> logs of zero or negative numbers don't exist. log(M+N) is NOT log M + log N — only products split into sums.</div>`},

"m-surds":{title:"Surds",subject:"Maths",body:`
<p>A surd is a root that can't be simplified to a whole number, e.g. √2, √3, √5 — these are irrational. We keep them exact rather than rounding.</p>
<h4>Rules</h4>
<div class="formula">√a × √b = √(ab)        √a ÷ √b = √(a/b)
a√c ± b√c = (a±b)√c    (only "like" surds combine)
(√a)² = a</div>

<h4>Simplifying</h4>
<p>Pull out the largest perfect square factor.</p>
<div class="formula">√50 = √(25×2) = 5√2        √72 = √(36×2) = 6√2</div>
<div class="formula">√12 + √27 = 2√3 + 3√3 = 5√3</div>

<h4>Rationalising the denominator (no surd left on the bottom)</h4>
<p>Single surd: multiply top and bottom by that surd.</p>
<div class="formula">6/√3 = 6/√3 × √3/√3 = 6√3/3 = 2√3</div>
<p>Two terms: multiply by the <b>conjugate</b> (change the middle sign).</p>
<div class="formula">1/(3+√2) = (3−√2)/[(3+√2)(3−√2)] = (3−√2)/(9−2) = (3−√2)/7</div>
<div class="key"><b>Tip:</b> the conjugate of (a+√b) is (a−√b); multiplying them removes the surd via a²−b.</div>`},

"m-sets":{title:"Sets",subject:"Maths",body:`
<p>A set is a collection of objects (elements). Notation: ∈ "is a member of", ∪ union (everything in either), ∩ intersection (in both), A′ complement (everything <i>not</i> in A), n(A) the number of elements in A, ∅ the empty set, ⊂ subset.</p>
<h4>Key formula (two sets)</h4>
<div class="formula">n(A∪B) = n(A) + n(B) − n(A∩B)</div>
<p>We subtract the overlap because it was counted twice.</p>

<h4>Worked example (Venn diagram)</h4>
<p>In a class of 40, 25 offer Maths, 20 offer Physics and 8 offer both. How many offer neither?</p>
<div class="formula">offer at least one = 25 + 20 − 8 = 37
offer neither = 40 − 37 = 3</div>
<p>On a Venn diagram: <b>both</b> = 8 in the middle; <b>only Maths</b> = 25−8 = 17; <b>only Physics</b> = 20−8 = 12.</p>

<h4>Subsets</h4>
<div class="formula">A set with n elements has 2ⁿ subsets (including ∅ and itself).</div>
<div class="key"><b>Trap:</b> "only A" means n(A) − n(A∩B), not n(A). Always fill the middle of the Venn diagram first.</div>`},

"m-algebra":{title:"Algebra & Equations",subject:"Maths",body:`
<h4>Expansion (removing brackets)</h4>
<div class="formula">a(b+c) = ab + ac
(a+b)² = a² + 2ab + b²
(a−b)² = a² − 2ab + b²
(a+b)(a−b) = a² − b²   ← difference of two squares</div>

<h4>Factorisation (the reverse)</h4>
<ul><li>Common factor: 6x² + 9x = 3x(2x + 3)</li>
<li>Difference of squares: x² − 25 = (x−5)(x+5)</li>
<li>Trinomial: x² + 5x + 6 = (x+2)(x+3) — two numbers that multiply to 6, add to 5.</li></ul>

<h4>Change of subject</h4>
<p>Isolate the wanted letter using inverse operations.</p>
<div class="formula">Make r the subject of A = πr²:  r² = A/π  →  r = √(A/π)</div>

<h4>Simultaneous equations</h4>
<p><b>Elimination:</b> make one variable's coefficients equal, then add/subtract.</p>
<div class="formula">2x + y = 7 ... (1)
3x − y = 8 ... (2)
Add: 5x = 15 → x = 3, then y = 1</div>

<h4>Inequalities</h4>
<div class="formula">5 − 2x > 1  →  −2x > −4  →  x < 2</div>
<div class="key"><b>Golden rule:</b> when you multiply or divide an inequality by a <b>negative</b> number, <b>flip the sign</b> (&gt; becomes &lt;).</div>`},

"m-quadratic":{title:"Quadratic Equations",subject:"Maths",body:`
<p>A quadratic has the form <b>ax² + bx + c = 0</b> (highest power 2). It usually has two solutions ("roots").</p>

<h4>Method 1 — Factorising</h4>
<p>Find two numbers that multiply to <b>a·c</b> and add to <b>b</b>.</p>
<div class="formula">x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2 or x = 3</div>

<h4>Method 2 — The quadratic formula (always works)</h4>
<div class="formula">x = [ −b ± √(b² − 4ac) ] / (2a)</div>
<p>Example: 2x² + 3x − 2 = 0 (a=2, b=3, c=−2):</p>
<div class="formula">x = [−3 ± √(9 + 16)]/4 = [−3 ± 5]/4 → x = ½ or x = −2</div>

<h4>The discriminant (b² − 4ac) tells you the nature of the roots</h4>
<table><tr><th>b² − 4ac</th><th>Roots</th></tr>
<tr><td>&gt; 0</td><td>two real and different</td></tr>
<tr><td>= 0</td><td>two equal (one repeated) real root</td></tr>
<tr><td>&lt; 0</td><td>no real roots</td></tr></table>

<h4>Sum & product of roots (fast facts)</h4>
<div class="formula">Sum of roots = −b/a        Product of roots = c/a
Build an equation: x² − (sum)x + (product) = 0</div>
<div class="key"><b>Trap:</b> a, b and c keep their signs. In 2x² + 3x − 2, c = −2 (negative). Mis-signing c is the #1 error.</div>`},

"m-variation":{title:"Variation",subject:"Maths",body:`
<p>Variation describes how one quantity changes with another, using a constant k.</p>
<table><tr><th>Type</th><th>Statement</th><th>Equation</th></tr>
<tr><td>Direct</td><td>y varies as x</td><td>y = kx</td></tr>
<tr><td>Inverse</td><td>y varies inversely as x</td><td>y = k/x</td></tr>
<tr><td>Joint</td><td>y varies as x and z</td><td>y = kxz</td></tr></table>
<h4>Method:</h4>
<ol><li>Write the equation with k.</li><li>Put in the first set of values to find k.</li><li>Use k with the new values.</li></ol>
<div class="formula">y ∝ x, y = 12 when x = 3 → k = 4. When x = 5, y = 4×5 = 20.</div>
<div class="formula">y ∝ 1/x, y = 6 when x = 2 → k = 12. When x = 3, y = 12/3 = 4.</div>
<div class="key">In <b>inverse</b> variation, as one goes up the other goes down — but k = y×x stays constant.</div>`},

"m-sequence":{title:"Sequences & Series (AP / GP)",subject:"Maths",body:`
<p>A <b>sequence</b> is an ordered list of terms; a <b>series</b> is their sum.</p>

<h4>Arithmetic Progression (AP) — constant difference d</h4>
<p>Each term adds the same amount. d = (any term) − (previous term).</p>
<div class="formula">nth term: Tₙ = a + (n − 1)d
Sum of n terms: Sₙ = n/2 [2a + (n − 1)d]  =  n/2 (first + last)</div>
<p>Example: 3, 7, 11, … (a=3, d=4). 10th term = 3 + 9(4) = 39.</p>

<h4>Geometric Progression (GP) — constant ratio r</h4>
<p>Each term multiplies by the same amount. r = (any term) ÷ (previous term).</p>
<div class="formula">nth term: Tₙ = a·rⁿ⁻¹
Sum of n terms: Sₙ = a(rⁿ − 1)/(r − 1)
Sum to infinity (only if |r| < 1): S∞ = a/(1 − r)</div>
<p>Example: 2, 6, 18, … (a=2, r=3). 5th term = 2·3⁴ = 162.</p>
<p>Example: 8, 4, 2, … (r = ½). S∞ = 8/(1 − ½) = 16.</p>
<div class="key"><b>Spot the type:</b> constant <i>difference</i> → AP; constant <i>ratio</i> → GP. Sum to infinity only exists for a GP with |r| < 1.</div>`},

"m-trig":{title:"Trigonometry",subject:"Maths",body:`
<p>Trigonometry links the angles and sides of triangles.</p>
<div class="formula">SOH–CAH–TOA
sin θ = Opposite/Hypotenuse
cos θ = Adjacent/Hypotenuse
tan θ = Opposite/Adjacent  ( = sin θ / cos θ )</div>

<h4>Special angles (memorise this table)</h4>
<table><tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
<tr><td>sin</td><td>0</td><td>½</td><td>√2/2</td><td>√3/2</td><td>1</td></tr>
<tr><td>cos</td><td>1</td><td>√3/2</td><td>√2/2</td><td>½</td><td>0</td></tr>
<tr><td>tan</td><td>0</td><td>√3/3</td><td>1</td><td>√3</td><td>—</td></tr></table>

<h4>Identities</h4>
<div class="formula">sin²θ + cos²θ = 1        tan θ = sin θ / cos θ</div>

<h4>Non-right triangles</h4>
<div class="formula">Sine rule:  a/sin A = b/sin B = c/sin C
Cosine rule:  a² = b² + c² − 2bc·cos A</div>
<p>Use the <b>cosine rule</b> when you know two sides + the included angle, or all three sides. Use the <b>sine rule</b> otherwise.</p>
<div class="key"><b>3-4-5 triangle:</b> if opp=3, adj=4, hyp=5, then sin θ = 3/5, cos θ = 4/5, tan θ = 3/4. These "Pythagorean triples" (3-4-5, 5-12-13) show up constantly.</div>`},

"m-coordinate":{title:"Coordinate Geometry",subject:"Maths",body:`
<p>Coordinate geometry studies points and lines on the x–y plane.</p>
<div class="formula">Distance between (x₁,y₁) and (x₂,y₂): √[(x₂−x₁)² + (y₂−y₁)²]
Midpoint: ( (x₁+x₂)/2 , (y₁+y₂)/2 )
Gradient (slope): m = (y₂−y₁)/(x₂−x₁)</div>

<h4>Equation of a straight line</h4>
<div class="formula">y = mx + c        (m = gradient, c = y-intercept)
or  y − y₁ = m(x − x₁)   when you know a point and the gradient</div>
<p>Example: line through (1,1) and (3,5): m = (5−1)/(3−1) = 2, so y − 1 = 2(x − 1) → y = 2x − 1.</p>

<h4>Parallel & perpendicular</h4>
<div class="formula">Parallel lines: equal gradients (m₁ = m₂)
Perpendicular lines: m₁ × m₂ = −1  (negative reciprocal)</div>
<p>So a line perpendicular to y = 2x + 3 has gradient −½.</p>
<div class="key"><b>Worked distance:</b> (1,2) to (4,6): √[(3)² + (4)²] = √25 = 5. (It's a 3-4-5 again.)</div>`},

"m-mensuration":{title:"Mensuration (Area & Volume)",subject:"Maths",body:`
<p>Mensuration is measuring lengths, areas and volumes of shapes. Take π = 22/7 unless told otherwise.</p>
<h4>2-D areas & perimeters</h4>
<table><tr><th>Shape</th><th>Area</th><th>Perimeter</th></tr>
<tr><td>Rectangle</td><td>l × b</td><td>2(l + b)</td></tr>
<tr><td>Triangle</td><td>½ × base × height</td><td>sum of sides</td></tr>
<tr><td>Circle</td><td>πr²</td><td>2πr (circumference)</td></tr>
<tr><td>Trapezium</td><td>½(a + b)h</td><td>sum of sides</td></tr></table>

<h4>3-D volumes & surfaces</h4>
<table><tr><th>Solid</th><th>Volume</th><th>Surface</th></tr>
<tr><td>Cuboid</td><td>l×b×h</td><td>2(lb+bh+lh)</td></tr>
<tr><td>Cylinder</td><td>πr²h</td><td>2πrh + 2πr²</td></tr>
<tr><td>Cone</td><td>⅓πr²h</td><td>πrl + πr²</td></tr>
<tr><td>Sphere</td><td>4/3 πr³</td><td>4πr²</td></tr></table>

<h4>Sectors of a circle (angle θ)</h4>
<div class="formula">Arc length = (θ/360) × 2πr        Sector area = (θ/360) × πr²</div>
<p>Example: circle r = 7. Area = 22/7 × 49 = 154. Circumference = 2 × 22/7 × 7 = 44.</p>
<div class="key"><b>Watch units:</b> area is in square units, volume in cubic units. Convert all lengths to the same unit first.</div>`},

"m-calculus":{title:"Calculus (Differentiation & Integration)",subject:"Maths",body:`
<p>Calculus studies rates of change (differentiation) and accumulation/area (integration).</p>

<h4>Differentiation — the gradient function</h4>
<div class="formula">If y = a·xⁿ  then  dy/dx = n·a·xⁿ⁻¹</div>
<p>Rules: differentiate each term separately; a constant differentiates to 0.</p>
<div class="formula">y = 3x² → dy/dx = 6x
y = 5x³ − 4x + 7 → dy/dx = 15x² − 4</div>

<h4>What dy/dx is used for</h4>
<ul><li><b>Gradient at a point:</b> substitute the x-value. For y = x² at x = 3, dy/dx = 2x = 6.</li>
<li><b>Maximum / minimum (turning points):</b> set dy/dx = 0 and solve.</li>
<li><b>Motion:</b> velocity = ds/dt, acceleration = dv/dt.</li></ul>
<div class="formula">Max or min? Find d²y/dx². If positive → minimum; if negative → maximum.</div>

<h4>Integration — the reverse (adds 1 to the power)</h4>
<div class="formula">∫ a·xⁿ dx = a·xⁿ⁺¹/(n+1) + C   (n ≠ −1)</div>
<p>Example: ∫6x dx = 3x² + C. The "+C" is the constant of integration.</p>
<p>A <b>definite</b> integral ∫ₐᵇ gives the area under the curve between x = a and x = b.</p>
<div class="key"><b>Trap:</b> don't forget +C for indefinite integrals, and remember a lone constant differentiates away to nothing.</div>`},

"m-stats":{title:"Statistics",subject:"Maths",body:`
<h4>Averages (measures of central tendency)</h4>
<div class="formula">Mean = Σx / n      (grouped: Σfx / Σf)
Median = the middle value when arranged in order
Mode = the value that occurs most often</div>
<p>Example: 4, 6, 8, 10, 12 → mean = 40/5 = 8. For 1,3,5,7,9 the median is 5.</p>
<p>If there are two middle values, the median is their average.</p>

<h4>Spread (dispersion)</h4>
<div class="formula">Range = highest − lowest
Variance = Σ(x − x̄)² / n
Standard deviation = √(variance)</div>

<h4>Grouped data</h4>
<p>Use the <b>class mid-value</b> for x. The <b>modal class</b> is the class with the highest frequency; the mean uses Σfx ÷ Σf.</p>
<div class="key"><b>Trap:</b> "mean", "median" and "mode" are all "averages" — read which one is asked. Sorting the data first prevents median errors.</div>`},

"m-probability":{title:"Probability",subject:"Maths",body:`
<p>Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain).</p>
<div class="formula">P(event) = (number of favourable outcomes) / (total outcomes)
P(not A) = 1 − P(A)</div>

<h4>Combining events</h4>
<div class="formula">AND (independent events) → multiply:  P(A and B) = P(A) × P(B)
OR (mutually exclusive) → add:  P(A or B) = P(A) + P(B)</div>

<h4>Worked examples</h4>
<div class="formula">Fair die, P(even) = 3/6 = ½
Two coins, P(both heads) = ½ × ½ = ¼
Bag of 3 red + 2 blue, P(red) = 3/5</div>

<h4>With / without replacement</h4>
<p>If a ball is <b>not replaced</b>, the total (and possibly the favourable count) drops by 1 for the second draw.</p>
<div class="formula">3 red, 2 blue; P(red then red, no replacement) = 3/5 × 2/4 = 6/20 = 3/10</div>
<div class="key"><b>Trap:</b> "at least one" is usually easiest via 1 − P(none).</div>`},

"m-matrices":{title:"Matrices & Determinants",subject:"Maths",body:`
<p>A matrix is a rectangular array of numbers. Its "order" is rows × columns.</p>
<h4>Add / subtract</h4>
<p>Only matrices of the <b>same order</b>; add element by element.</p>
<div class="formula">[1 2; 3 4] + [0 1; 1 0] = [1 3; 4 4]</div>
<h4>Multiply</h4>
<p>Row × column. A scalar multiplies every element.</p>
<h4>2×2 determinant & inverse</h4>
<div class="formula">For M = [a b; c d]:
determinant |M| = ad − bc
inverse M⁻¹ = 1/(ad − bc) × [d −b; −c a]</div>
<p>Example: [2 3; 1 4] → det = (2)(4) − (3)(1) = 5.</p>
<div class="key"><b>Key fact:</b> if the determinant = 0 the matrix is "singular" and has <b>no inverse</b>.</div>`},

"m-permcomb":{title:"Permutations & Combinations",subject:"Maths",body:`
<p><b>Factorial:</b> n! = n×(n−1)×…×2×1. So 5! = 120, and 0! = 1.</p>
<h4>Permutation — order matters (arrangements)</h4>
<div class="formula">ⁿPᵣ = n! / (n − r)!</div>
<p>Number of ways to arrange 4 distinct books in a row = 4! = 24.</p>
<h4>Combination — order doesn't matter (selections)</h4>
<div class="formula">ⁿCᵣ = n! / [ r!(n − r)! ]</div>
<p>Choosing 2 students from 5 = ⁵C₂ = 10.</p>
<div class="key"><b>Decide which:</b> "arrange / line up / in order" → permutation. "choose / select / committee" → combination.</div>`},

"m-geometry":{title:"Geometry (Angles & Circles)",subject:"Maths",body:`
<h4>Angle basics</h4>
<ul><li>Angles on a straight line add to 180°; around a point, 360°.</li>
<li>Vertically opposite angles are equal.</li>
<li>Triangle angles add to 180°; quadrilateral to 360°.</li></ul>
<h4>Polygons</h4>
<div class="formula">Sum of interior angles = (n − 2) × 180°
Each exterior angle of a regular polygon = 360° / n
Interior + exterior = 180°</div>
<p>Pentagon interior sum = 3×180 = 540°. Regular hexagon exterior angle = 360/6 = 60°.</p>
<h4>Circle theorems</h4>
<ul><li>Angle at the centre = 2 × angle at the circumference (same arc).</li>
<li>Angle in a semicircle = 90°.</li>
<li>Angles in the same segment are equal.</li>
<li>Opposite angles of a cyclic quadrilateral add to 180°.</li>
<li>A tangent meets a radius at 90°.</li></ul>
<div class="key"><b>Triangle types:</b> equilateral (all 60°), isosceles (two equal angles), right-angled (one 90°).</div>`},

/* ===================== PHYSICS ===================== */
"p-measurement":{title:"Measurement, Units & Vectors",subject:"Physics",body:`
<h4>SI base units (learn these)</h4>
<table><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>
<tr><td>Length</td><td>metre</td><td>m</td></tr><tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
<tr><td>Time</td><td>second</td><td>s</td></tr><tr><td>Electric current</td><td>ampere</td><td>A</td></tr>
<tr><td>Temperature</td><td>kelvin</td><td>K</td></tr></table>
<h4>Derived units (built from the base units)</h4>
<div class="formula">Force: newton (N) = kg·m/s²
Energy/Work: joule (J) = N·m
Power: watt (W) = J/s
Pressure: pascal (Pa) = N/m²</div>

<h4>Scalars vs Vectors</h4>
<p><b>Scalar</b> = magnitude only: mass, distance, speed, energy, temperature, time.</p>
<p><b>Vector</b> = magnitude + direction: displacement, velocity, acceleration, force, momentum, weight.</p>

<h4>Adding vectors</h4>
<div class="formula">Two perpendicular vectors: resultant = √(a² + b²)</div>
<p>Example: 3 N east and 4 N north give a resultant of √(9+16) = 5 N.</p>
<div class="key"><b>Prefixes:</b> kilo (×10³), centi (×10⁻²), milli (×10⁻³), micro (×10⁻⁶). 1 km = 1000 m, 1 mm = 0.001 m.</div>`},

"p-kinematics":{title:"Motion & Kinematics",subject:"Physics",body:`
<p>Kinematics describes motion without worrying about its cause. Symbols: u = initial velocity, v = final velocity, a = acceleration, s = distance/displacement, t = time.</p>
<h4>The four equations of uniformly accelerated motion</h4>
<div class="formula">v = u + at
s = ut + ½at²
v² = u² + 2as
s = ½(u + v)t</div>
<p><b>Choosing one:</b> identify the three quantities you know and the one you want — pick the equation containing exactly those four.</p>

<h4>Worked example</h4>
<p>A car starts from rest (u=0) and accelerates at 2 m/s² for 5 s.</p>
<div class="formula">v = u + at = 0 + 2(5) = 10 m/s
s = ut + ½at² = 0 + ½(2)(25) = 25 m</div>

<h4>Free fall & vertical motion (take g = 10 m/s²)</h4>
<ul><li>Falling: a = +g (downward). Rising: a = −g (it decelerates).</li>
<li>At maximum height, v = 0.</li><li>Time up = time down (symmetry).</li></ul>
<p>Thrown up at 20 m/s: time to top = u/g = 20/10 = 2 s.</p>
<div class="key"><b>Distance–time graph:</b> slope = velocity. <b>Velocity–time graph:</b> slope = acceleration, and the <i>area</i> under it = distance.</div>`},

"p-dynamics":{title:"Newton's Laws & Forces",subject:"Physics",body:`
<h4>Newton's three laws</h4>
<ul><li><b>1st (inertia):</b> a body stays at rest or moves at constant velocity unless a net (resultant) force acts on it.</li>
<li><b>2nd:</b> net force = mass × acceleration. The basis of most calculations.</li>
<li><b>3rd:</b> to every action there is an equal and opposite reaction.</li></ul>
<div class="formula">F = ma        Weight W = mg        (g = 10 m/s²)</div>
<p>Example: a 10 N force on a 5 kg mass gives a = F/m = 2 m/s². A 10 kg mass weighs mg = 100 N.</p>

<h4>Friction</h4>
<div class="formula">Friction F = μR   (μ = coefficient of friction, R = normal reaction)</div>
<p>Friction always opposes (or tends to oppose) motion.</p>

<h4>Momentum & impulse</h4>
<div class="formula">Momentum p = mv (kg·m/s)
Impulse = Force × time = change in momentum (Ft = mv − mu)</div>
<div class="key"><b>Key idea:</b> "net force" matters. Balanced forces → no acceleration (equilibrium or constant velocity), not necessarily "at rest".</div>`},

"p-momentum":{title:"Momentum & Collisions",subject:"Physics",body:`
<div class="formula">Momentum p = mass × velocity = mv   (unit: kg·m/s, a vector)</div>
<h4>Conservation of momentum</h4>
<p>In any collision or explosion with no external force, total momentum before = total momentum after.</p>
<div class="formula">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>
<p>Example: a 2 kg trolley at 3 m/s hits a stationary 1 kg trolley and they stick together. Combined velocity:</p>
<div class="formula">2(3) + 1(0) = (2+1)v → 6 = 3v → v = 2 m/s</div>
<h4>Impulse</h4>
<div class="formula">Impulse = Ft = change in momentum = mv − mu</div>
<div class="key"><b>Elastic</b> collisions conserve kinetic energy; <b>inelastic</b> ones (objects stick) do not — but momentum is conserved in both.</div>`},

"p-energy":{title:"Work, Energy & Power",subject:"Physics",body:`
<div class="formula">Work = Force × distance moved in the direction of the force  (joule)
Power = Work / time = Force × velocity  (watt)</div>
<h4>Forms of mechanical energy</h4>
<div class="formula">Kinetic energy (motion): KE = ½mv²
Potential energy (height): PE = mgh</div>
<p>Examples: a 2 kg body at 4 m/s has KE = ½(2)(4²) = 16 J. Lifting 5 kg by 10 m gives PE = 5(10)(10) = 500 J.</p>

<h4>Conservation of energy</h4>
<p>Energy is never created or destroyed, only converted. A falling object converts PE → KE; at the bottom, KE gained = PE lost.</p>

<h4>Efficiency</h4>
<div class="formula">Efficiency = (useful energy output / total energy input) × 100%</div>
<p>Example: 100 J of work in 5 s → power = 100/5 = 20 W.</p>
<div class="key"><b>Trap:</b> if a force is at right angles to the motion (e.g. carrying a load horizontally against gravity), the work done by that force is zero.</div>`},

"p-equilibrium":{title:"Equilibrium & Moments",subject:"Physics",body:`
<p>The <b>moment</b> (turning effect) of a force about a pivot:</p>
<div class="formula">Moment = Force × perpendicular distance from the pivot  (N·m)</div>
<h4>Principle of moments</h4>
<p>A body in equilibrium has:</p>
<div class="formula">sum of clockwise moments = sum of anticlockwise moments</div>
<p>Example: a 20 N weight 3 m left of a pivot balances a force F at 2 m right: 20×3 = F×2 → F = 30 N.</p>
<h4>Conditions for equilibrium</h4>
<ul><li>The resultant force in any direction is zero.</li>
<li>The resultant moment about any point is zero.</li></ul>
<div class="key"><b>Centre of gravity</b> is the single point where the whole weight seems to act. A wider base + lower centre of gravity = more stable.</div>`},

"p-heat":{title:"Heat & Temperature",subject:"Physics",body:`
<p><b>Heat</b> is energy transferred due to a temperature difference; <b>temperature</b> measures how hot something is.</p>
<div class="formula">Kelvin: K = °C + 273.   So 27 °C = 300 K.</div>
<h4>Heat capacity</h4>
<div class="formula">Q = mcΔθ   (c = specific heat capacity, Δθ = temperature change)</div>
<p>Specific heat capacity = heat to raise 1 kg by 1 K.</p>
<h4>Latent heat (change of state — temperature stays constant)</h4>
<div class="formula">Q = mL   (L = specific latent heat)</div>
<p>Melting and boiling absorb latent heat without any temperature rise.</p>
<h4>Heat transfer</h4>
<ul><li><b>Conduction</b> — through solids (metals are best).</li>
<li><b>Convection</b> — through fluids by currents.</li>
<li><b>Radiation</b> — through space, no medium needed (how the Sun's heat reaches us).</li></ul>
<div class="key"><b>Always use Kelvin</b> in gas-law calculations.</div>`},

"p-gaslaws":{title:"Gas Laws",subject:"Physics",body:`
<p>Three variables describe a fixed mass of gas: pressure P, volume V and temperature T (in <b>kelvin</b>).</p>
<table><tr><th>Law</th><th>Held constant</th><th>Relation</th></tr>
<tr><td>Boyle's</td><td>Temperature</td><td>PV = constant (P ∝ 1/V)</td></tr>
<tr><td>Charles'</td><td>Pressure</td><td>V/T = constant (V ∝ T)</td></tr>
<tr><td>Pressure law</td><td>Volume</td><td>P/T = constant (P ∝ T)</td></tr></table>
<div class="formula">General gas equation: P₁V₁/T₁ = P₂V₂/T₂</div>
<h4>Worked example (Boyle's law)</h4>
<p>A gas at 2 atm occupies 3 L. Compressed to 1 L at the same temperature:</p>
<div class="formula">P₁V₁ = P₂V₂ → 2×3 = P₂×1 → P₂ = 6 atm</div>
<div class="key"><b>Trap:</b> convert °C to K before using Charles' or the pressure law, or you'll get nonsense.</div>`},

"p-elasticity":{title:"Elasticity (Hooke's Law)",subject:"Physics",body:`
<p>Elastic materials return to their original shape when the load is removed.</p>
<div class="formula">Hooke's law: F = ke   (force ∝ extension, within the elastic limit)</div>
<p>k is the spring constant (stiffness, N/m); e is the extension (new length − original length).</p>
<h4>Key terms</h4>
<ul><li><b>Elastic limit:</b> the point beyond which a material no longer returns to its original shape.</li>
<li><b>Proportional limit:</b> up to here, extension is directly proportional to force (a straight-line graph).</li></ul>
<p>Example: a spring extends 2 cm under 10 N. k = F/e = 10/0.02 = 500 N/m. Under 25 N it extends e = F/k = 25/500 = 0.05 m = 5 cm.</p>
<div class="key"><b>Trap:</b> Hooke's law only holds <i>within the elastic limit</i>. Past it, the spring deforms permanently.</div>`},

"p-electrostatics":{title:"Electrostatics",subject:"Physics",body:`
<p>Static electricity is charge at rest. Charge comes in two kinds: positive and negative.</p>
<ul><li><b>Like charges repel; unlike charges attract.</b></li>
<li>Charge is measured in <b>coulombs (C)</b>.</li>
<li>Objects charge up by <b>friction</b> (transfer of electrons), induction or contact.</li></ul>
<div class="formula">Coulomb's law: force between charges F ∝ q₁q₂ / r²
(force grows with charge, falls off with the square of distance)</div>
<div class="key"><b>Concept:</b> rubbing transfers electrons. The object that <i>gains</i> electrons becomes negative; the one that <i>loses</i> them becomes positive. Protons don't move.</div>`},

"p-current":{title:"Current Electricity (EEE core)",subject:"Physics",body:`
<p>This is bread-and-butter for Electrical Engineering — expect several questions.</p>
<div class="formula">Ohm's law: V = IR   (Voltage = Current × Resistance)
Charge: Q = It      (charge = current × time)
Power: P = IV = I²R = V²/R
Electrical energy: E = Pt = IVt</div>

<h4>Worked examples</h4>
<div class="formula">2 A through a 5 Ω resistor → V = IR = 10 V
A 12 V, 2 A device → P = IV = 24 W
Charge from 2 A for 5 s → Q = It = 10 C</div>

<h4>Combining resistors</h4>
<div class="formula">Series:  R = R₁ + R₂ + R₃ + …   (same current everywhere; voltages add)
Parallel: 1/R = 1/R₁ + 1/R₂ + …  (same voltage; currents add)</div>
<p>Two resistors 6 Ω and 3 Ω in parallel: 1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω.</p>
<div class="key"><b>EEE facts:</b> total parallel resistance is always smaller than the smallest resistor. e.m.f. is the total energy per coulomb supplied by the source; "lost volts" = current × internal resistance.</div>`},

"p-magnetism":{title:"Magnetism & Transformers",subject:"Physics",body:`
<h4>Magnets & fields</h4>
<ul><li>Like poles repel; unlike poles attract.</li>
<li>Field lines run from <b>North to South</b> outside a magnet.</li>
<li>A current-carrying wire creates a magnetic field around it (electromagnetism). A coil (solenoid) acts like a bar magnet.</li></ul>
<h4>The motor effect</h4>
<p>A current-carrying conductor in a magnetic field experiences a force — the principle of the electric motor. Fleming's <b>left-hand rule</b> gives the direction (thumb = thrust/force, first finger = field, second finger = current).</p>
<h4>Transformers</h4>
<div class="formula">Vₚ/Vₛ = Nₚ/Nₛ   (voltage ratio = turns ratio)</div>
<p><b>Step-up:</b> more turns on secondary → higher voltage. <b>Step-down:</b> fewer turns → lower voltage. Transformers only work on <b>alternating current (AC)</b>.</p>
<div class="key">Power is (ideally) conserved: VₚIₚ = VₛIₛ. Step the voltage up and the current steps down.</div>`},

"p-induction":{title:"Electromagnetic Induction",subject:"Physics",body:`
<p>A <b>changing</b> magnetic field through a coil induces a voltage (e.m.f.). This is how generators and transformers work.</p>
<ul><li><b>Faraday's law:</b> the induced e.m.f. is proportional to the rate of change of magnetic flux.</li>
<li><b>Lenz's law:</b> the induced current flows so as to <b>oppose</b> the change that produced it (conservation of energy).</li></ul>
<p>Move a magnet into a coil and you get a current one way; pull it out and the current reverses. Faster movement → bigger e.m.f.</p>
<p>Fleming's <b>right-hand rule</b> gives the direction of induced current in a generator (dynamo).</p>
<div class="key"><b>Generator vs motor:</b> a generator turns motion → electricity (induction); a motor turns electricity → motion (motor effect). Same physics, opposite direction.</div>`},

"p-electronics":{title:"Electronics & Semiconductors",subject:"Physics",body:`
<p>Materials are grouped by how well they conduct:</p>
<ul><li><b>Conductors</b> (copper, aluminium) — many free electrons, conduct easily.</li>
<li><b>Insulators</b> (rubber, glass) — almost no free electrons.</li>
<li><b>Semiconductors</b> (silicon, germanium) — in between; the heart of all modern electronics.</li></ul>
<h4>Doping</h4>
<ul><li><b>n-type:</b> doped to provide extra free <b>electrons</b> (negative carriers).</li>
<li><b>p-type:</b> doped to provide "<b>holes</b>" (positive carriers).</li></ul>
<h4>Key components</h4>
<ul><li><b>Diode (p–n junction):</b> lets current flow one way only — used to convert AC to DC (rectification).</li>
<li><b>Transistor:</b> amplifies a small signal or acts as an electronic switch (the basis of logic chips).</li>
<li><b>Capacitor:</b> stores charge; <b>resistor:</b> limits current.</li></ul>
<div class="key"><b>EEE essentials:</b> a diode is "forward biased" (conducts) when its p-side is positive. Transistors switching on/off are how computers represent 1s and 0s.</div>`},

"p-waves":{title:"Waves & Sound",subject:"Physics",body:`
<p>A wave transfers energy without transferring matter.</p>
<div class="formula">Wave speed: v = fλ   (frequency × wavelength)
Period: T = 1/f   (time for one complete oscillation)</div>
<p>Frequency f is in hertz (Hz); wavelength λ in metres.</p>
<h4>Two types</h4>
<ul><li><b>Transverse:</b> vibrations are perpendicular to travel (light, water ripples, all EM waves).</li>
<li><b>Longitudinal:</b> vibrations are parallel to travel, with compressions and rarefactions (sound).</li></ul>
<h4>Sound facts</h4>
<ul><li>Sound needs a medium — it <b>cannot</b> travel through a vacuum.</li>
<li>Speed of sound in air ≈ 340 m/s; speed of light ≈ 3×10⁸ m/s.</li>
<li>An echo is reflected sound. Loudness ↔ amplitude; pitch ↔ frequency.</li></ul>
<p>Example: f = 50 Hz, λ = 2 m → v = 100 m/s.</p>
<div class="key"><b>Wave behaviours:</b> reflection, refraction, diffraction and interference. All waves can do these.</div>`},

"p-light":{title:"Light & Optics",subject:"Physics",body:`
<h4>Reflection</h4>
<div class="formula">Angle of incidence = angle of reflection (measured from the normal)</div>
<p>Plane mirrors give a virtual, upright, laterally-inverted image, same size as the object.</p>
<h4>Refraction (bending when speed changes)</h4>
<div class="formula">Refractive index n = sin i / sin r = (speed in vacuum)/(speed in medium)</div>
<p>Light bends <b>towards</b> the normal entering a denser medium, and <b>away</b> when leaving. This causes a stick to look bent in water.</p>
<h4>Lenses</h4>
<ul><li><b>Convex (converging):</b> brings rays to a focus; can form real, inverted images (camera, eye).</li>
<li><b>Concave (diverging):</b> spreads rays out; forms virtual, upright, diminished images.</li></ul>
<div class="formula">Lens/mirror formula: 1/f = 1/u + 1/v        Magnification = v/u</div>
<h4>Dispersion</h4>
<p>A prism splits white light into seven colours — <b>ROYGBIV</b> (red bends least, violet most).</p>
<div class="key"><b>EM spectrum order</b> (low→high frequency): radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. All travel at 3×10⁸ m/s in a vacuum.</div>`},

/* ===================== CHEMISTRY ===================== */
"c-atomic":{title:"Atomic Structure",subject:"Chemistry",body:`
<p>An atom has a tiny dense nucleus (protons + neutrons) surrounded by electrons in shells.</p>
<table><tr><th>Particle</th><th>Relative charge</th><th>Relative mass</th><th>Location</th></tr>
<tr><td>Proton</td><td>+1</td><td>1</td><td>nucleus</td></tr>
<tr><td>Neutron</td><td>0</td><td>1</td><td>nucleus</td></tr>
<tr><td>Electron</td><td>−1</td><td>≈ 1/1840</td><td>shells</td></tr></table>
<div class="formula">Atomic number Z = number of protons (= electrons in a neutral atom)
Mass number A = protons + neutrons
Number of neutrons = A − Z</div>
<p>Example: sodium has A = 23, Z = 11, so neutrons = 23 − 11 = 12.</p>
<h4>Isotopes</h4>
<p>Atoms of the same element (same protons) but different numbers of neutrons, e.g. carbon-12 and carbon-14. They have identical chemistry but different mass.</p>
<h4>Electron arrangement</h4>
<p>Shells fill in the order 2, 8, 8, 18… The outer (<b>valence</b>) electrons control bonding and reactivity.</p>
<div class="key"><b>Trap:</b> in a neutral atom, protons = electrons. In an ion they differ — that imbalance is the charge.</div>`},

"c-periodic":{title:"Periodic Table",subject:"Chemistry",body:`
<p>Elements are arranged by increasing atomic number into <b>periods</b> (rows) and <b>groups</b> (columns).</p>
<ul><li><b>Group number</b> = number of outer (valence) electrons → similar chemical properties down a group.</li>
<li><b>Period number</b> = number of electron shells.</li></ul>
<h4>Important groups</h4>
<table><tr><th>Group</th><th>Name</th><th>Character</th></tr>
<tr><td>1</td><td>Alkali metals</td><td>very reactive metals (Na, K)</td></tr>
<tr><td>2</td><td>Alkaline earth metals</td><td>reactive metals (Ca, Mg)</td></tr>
<tr><td>7</td><td>Halogens</td><td>reactive non-metals (Cl, Br)</td></tr>
<tr><td>8/0</td><td>Noble gases</td><td>inert — full outer shell (He, Ne, Ar)</td></tr></table>
<h4>Trends</h4>
<ul><li>Across a period: atomic radius decreases, electronegativity increases.</li>
<li>Down a group: metals get more reactive; non-metals get less reactive.</li></ul>
<div class="key"><b>Metals</b> lose electrons → positive ions (cations). <b>Non-metals</b> gain electrons → negative ions (anions). The dividing "staircase" separates them.</div>`},

"c-bonding":{title:"Chemical Bonding",subject:"Chemistry",body:`
<p>Atoms bond to achieve a stable, full outer shell (the octet rule), like the noble gases.</p>
<h4>The three main bonds</h4>
<table><tr><th>Bond</th><th>How</th><th>Between</th><th>Example</th></tr>
<tr><td>Ionic</td><td>transfer of electrons</td><td>metal + non-metal</td><td>NaCl, MgO</td></tr>
<tr><td>Covalent</td><td>sharing of electrons</td><td>non-metal + non-metal</td><td>H₂O, CO₂</td></tr>
<tr><td>Metallic</td><td>sea of free electrons</td><td>metal atoms</td><td>Cu, Fe</td></tr></table>
<h4>Properties this explains</h4>
<ul><li><b>Ionic:</b> high melting points; conduct only when molten or dissolved (ions free to move).</li>
<li><b>Covalent (simple molecules):</b> low melting points; usually don't conduct.</li>
<li><b>Metallic:</b> good conductors, malleable and ductile (delocalised electrons).</li></ul>
<div class="key"><b>Quick check:</b> metal + non-metal → ionic. Two non-metals → covalent.</div>`},

"c-mole":{title:"Mole Concept & Stoichiometry",subject:"Chemistry",body:`
<p>The mole is the chemist's "counting unit" — one mole contains 6.02×10²³ particles (Avogadro's number).</p>
<div class="formula">Moles = mass / molar mass
Number of particles = moles × 6.02×10²³
Volume of gas at s.t.p. = moles × 22.4 dm³
Concentration (mol/dm³) = moles / volume (in dm³)</div>

<h4>Worked examples</h4>
<div class="formula">12 g of carbon (Ar = 12) → 12/12 = 1 mole
Molar mass of CO₂ = 12 + 2(16) = 44 g/mol
44 g of CO₂ = 1 mole = 22.4 dm³ at s.t.p.</div>

<h4>Using equations (stoichiometry)</h4>
<p><b>Balance first</b>, then use the coefficients as the mole ratio.</p>
<div class="formula">2H₂ + O₂ → 2H₂O : 2 moles of H₂ react with 1 mole of O₂ to give 2 moles of water.</div>
<div class="key"><b>Tip:</b> 1 dm³ = 1 litre = 1000 cm³. Convert cm³ to dm³ (÷1000) before using concentration.</div>`},

"c-acids":{title:"Acids, Bases & Salts",subject:"Chemistry",body:`
<table><tr><th></th><th>Acid</th><th>Base / Alkali</th></tr>
<tr><td>Ion produced</td><td>H⁺ (hydrogen)</td><td>OH⁻ (hydroxide)</td></tr>
<tr><td>pH</td><td>less than 7</td><td>greater than 7</td></tr>
<tr><td>Litmus</td><td>turns blue → red</td><td>turns red → blue</td></tr></table>
<p>pH 7 is neutral (pure water). The lower the pH, the stronger the acid.</p>
<h4>Reactions to know</h4>
<div class="formula">Acid + Base → Salt + Water           (neutralisation)
Acid + Metal → Salt + Hydrogen
Acid + Carbonate → Salt + Water + Carbon dioxide</div>
<h4>Titration</h4>
<p>Used to find an unknown concentration by neutralising acid against base with an indicator.</p>
<div class="formula">(Cₐ Vₐ)/nₐ = (C_b V_b)/n_b</div>
<div class="key"><b>Test for CO₂:</b> turns limewater milky. <b>Test for H₂:</b> "pop" with a lighted splint.</div>`},

"c-redox":{title:"Redox Reactions",subject:"Chemistry",body:`
<p>Redox = reduction + oxidation, happening together. Remember <b>OIL RIG</b>:</p>
<div class="formula">Oxidation Is Loss of electrons
Reduction Is Gain of electrons</div>
<table><tr><th></th><th>Oxidation</th><th>Reduction</th></tr>
<tr><td>Electrons</td><td>lost</td><td>gained</td></tr>
<tr><td>Oxygen</td><td>gained</td><td>lost</td></tr>
<tr><td>Hydrogen</td><td>lost</td><td>gained</td></tr>
<tr><td>Oxidation number</td><td>increases</td><td>decreases</td></tr></table>
<h4>Agents</h4>
<ul><li>An <b>oxidising agent</b> oxidises something else and is itself reduced.</li>
<li>A <b>reducing agent</b> reduces something else and is itself oxidised.</li></ul>
<div class="key"><b>Oxidation numbers:</b> uncombined element = 0; simple ion = its charge; O is usually −2; H usually +1; the total in a neutral compound = 0.</div>`},

"c-electrolysis":{title:"Electrolysis",subject:"Chemistry",body:`
<p>Electrolysis breaks down an ionic compound (molten or in solution) using electricity.</p>
<ul><li><b>Cathode (−):</b> attracts positive ions (<b>cations</b>) → reduction happens here.</li>
<li><b>Anode (+):</b> attracts negative ions (<b>anions</b>) → oxidation happens here.</li></ul>
<p>Remember: <b>PANIC</b> — Positive Anode, Negative Is Cathode. Or "cations go to the cathode."</p>
<div class="formula">Faraday: Q = It.   1 mole of electrons = 96 500 C (1 faraday)</div>
<h4>Uses</h4>
<p>Extraction of reactive metals (aluminium from bauxite), electroplating, purifying copper.</p>
<div class="key"><b>Worked idea:</b> charge passed Q = It; divide by 96 500 to get moles of electrons, then use the half-equation to find the mass deposited.</div>`},

"c-rates":{title:"Rates of Reaction",subject:"Chemistry",body:`
<p>The rate of a reaction is how fast reactants turn into products. It is increased by:</p>
<ul><li><b>Higher temperature</b> — particles move faster and collide more often, with more energy.</li>
<li><b>Higher concentration / pressure</b> — more particles per volume → more collisions.</li>
<li><b>Larger surface area</b> (smaller pieces / powder) — more area exposed for collisions.</li>
<li><b>A catalyst</b> — provides an easier path with <b>lower activation energy</b>; it is not used up.</li></ul>
<h4>Collision theory</h4>
<p>A reaction happens only when particles collide with enough energy (the activation energy) and the correct orientation.</p>
<div class="key"><b>Catalyst fact:</b> a catalyst speeds up a reaction without being consumed and does not change the amount of product — only how fast you get there. Enzymes are biological catalysts.</div>`},

"c-equilibrium":{title:"Chemical Equilibrium",subject:"Chemistry",body:`
<p>Some reactions are <b>reversible</b> (shown by ⇌). In a closed system they reach a <b>dynamic equilibrium</b>: forward and backward rates are equal, so concentrations stay constant (though both reactions continue).</p>
<h4>Le Chatelier's principle</h4>
<p>If you change the conditions, the equilibrium shifts to oppose that change:</p>
<ul><li>Increase <b>concentration</b> of a reactant → shifts toward products.</li>
<li>Increase <b>pressure</b> → shifts toward the side with fewer gas molecules.</li>
<li>Increase <b>temperature</b> → shifts in the endothermic direction.</li></ul>
<div class="key"><b>Catalyst note:</b> a catalyst speeds up <i>both</i> directions equally — it reaches equilibrium faster but does <b>not</b> change the position of equilibrium.</div>`},

"c-energetics":{title:"Energetics",subject:"Chemistry",body:`
<p>Reactions absorb or release energy, mostly as heat (enthalpy change, ΔH).</p>
<table><tr><th>Type</th><th>Heat</th><th>ΔH sign</th><th>Surroundings</th><th>Example</th></tr>
<tr><td>Exothermic</td><td>released</td><td>negative (−)</td><td>get hotter</td><td>combustion, neutralisation</td></tr>
<tr><td>Endothermic</td><td>absorbed</td><td>positive (+)</td><td>get colder</td><td>photosynthesis, thermal decomposition</td></tr></table>
<div class="key"><b>Bond logic:</b> breaking bonds <i>absorbs</i> energy; making bonds <i>releases</i> energy. If more is released than absorbed overall, the reaction is exothermic.</div>`},

"c-separation":{title:"Separation Techniques",subject:"Chemistry",body:`
<table><tr><th>Method</th><th>Separates</th><th>Based on</th></tr>
<tr><td>Filtration</td><td>insoluble solid from liquid</td><td>particle size</td></tr>
<tr><td>Evaporation</td><td>dissolved solid from solution</td><td>boiling off solvent</td></tr>
<tr><td>Simple distillation</td><td>solvent from solution (pure water from seawater)</td><td>boiling point</td></tr>
<tr><td>Fractional distillation</td><td>miscible liquids (crude oil, alcohol–water)</td><td>different boiling points</td></tr>
<tr><td>Chromatography</td><td>coloured dyes / mixtures</td><td>solubility / movement</td></tr>
<tr><td>Decantation</td><td>liquid from settled solid</td><td>density</td></tr>
<tr><td>Sublimation</td><td>solids that vaporise (e.g. ammonium chloride)</td><td>change of state</td></tr></table>
<div class="key"><b>Pick the clue:</b> "pure water from salt water" → distillation (filtration would let the salt through). "Separate inks" → chromatography.</div>`},

"c-metals":{title:"Metals & Corrosion",subject:"Chemistry",body:`
<h4>Reactivity series (most → least reactive)</h4>
<div class="formula">K  Na  Ca  Mg  Al  Zn  Fe  Pb  (H)  Cu  Ag  Au</div>
<p>A more reactive metal displaces a less reactive one from its salt. Very reactive metals (K, Na, Ca) are extracted by <b>electrolysis</b>; less reactive ones by reduction with carbon.</p>
<h4>Rusting of iron</h4>
<p>Rust forms when iron is exposed to <b>both oxygen and water</b>. Prevent it by painting, galvanising (zinc coating), oiling or alloying (stainless steel).</p>
<h4>General metal properties</h4>
<p>Shiny, good conductors of heat and electricity, malleable, ductile, mostly high melting points.</p>
<div class="key"><b>Mnemonic for the series:</b> "Please Stop Calling Me A Zebra, Instead Let Cats Sit Gladly." Gold and silver are so unreactive they're found "native" (uncombined).</div>`},

"c-organic":{title:"Organic Chemistry",subject:"Chemistry",body:`
<p>Organic chemistry is the chemistry of carbon compounds. A <b>homologous series</b> is a family with the same general formula and similar properties.</p>
<table><tr><th>Family</th><th>General formula</th><th>Bonding</th><th>First member</th></tr>
<tr><td>Alkanes</td><td>CₙH₂ₙ₊₂</td><td>single bonds (saturated)</td><td>methane CH₄</td></tr>
<tr><td>Alkenes</td><td>CₙH₂ₙ</td><td>one C=C double bond</td><td>ethene C₂H₄</td></tr>
<tr><td>Alkynes</td><td>CₙH₂ₙ₋₂</td><td>one C≡C triple bond</td><td>ethyne C₂H₂</td></tr>
<tr><td>Alkanols (alcohols)</td><td>CₙH₂ₙ₊₁OH</td><td>−OH group</td><td>methanol CH₃OH</td></tr></table>
<p>Naming by carbon count: meth-(1), eth-(2), prop-(3), but-(4), pent-(5).</p>
<h4>Key reactions</h4>
<ul><li><b>Combustion:</b> hydrocarbon + O₂ → CO₂ + H₂O (+ energy).</li>
<li><b>Test for unsaturation:</b> alkenes <b>decolourise bromine water</b>; alkanes don't.</li>
<li>Fermentation of sugar → ethanol + CO₂.</li></ul>
<div class="key"><b>Saturated vs unsaturated:</b> "saturated" = only single bonds (alkanes); "unsaturated" = has a double/triple bond (alkenes/alkynes) and is more reactive.</div>`},

/* ===================== ENGLISH ===================== */
"e-vocab":{title:"Vocabulary, Synonyms & Antonyms",subject:"English",body:`
<p>A <b>synonym</b> has the same/similar meaning; an <b>antonym</b> has the opposite. Always read the sentence — choose the word that fits the <b>context</b> and the same part of speech.</p>
<h4>High-frequency words (learn meaning + opposite)</h4>
<table><tr><th>Word</th><th>Meaning (synonym)</th><th>Antonym</th></tr>
<tr><td>Benevolent</td><td>kind, generous</td><td>cruel, malevolent</td></tr>
<tr><td>Candid</td><td>frank, honest</td><td>secretive, evasive</td></tr>
<tr><td>Lucid</td><td>clear, easy to follow</td><td>confusing, vague</td></tr>
<tr><td>Frugal</td><td>thrifty, careful with money</td><td>wasteful, extravagant</td></tr>
<tr><td>Audacious</td><td>bold, daring</td><td>timid, cowardly</td></tr>
<tr><td>Abundant</td><td>plentiful</td><td>scarce, sparse</td></tr>
<tr><td>Diligent</td><td>hard-working</td><td>lazy, idle</td></tr>
<tr><td>Obscure</td><td>unclear, hidden</td><td>obvious, clear</td></tr>
<tr><td>Tenacious</td><td>persistent, determined</td><td>yielding, irresolute</td></tr>
<tr><td>Verbose</td><td>wordy</td><td>concise, terse</td></tr></table>
<div class="key"><b>Strategy:</b> if you don't know a word, break it into roots/prefixes (e.g. "bene-" = good, "mal-" = bad, "-phobia" = fear). And match the part of speech: an adjective answers an adjective.</div>`},

"e-grammar":{title:"Concord (Agreement) & Tenses",subject:"English",body:`
<h4>Subject–verb concord (the verb must match the subject)</h4>
<ul><li>Singular subject → singular verb: "The boy <b>runs</b>." Plural → plural: "The boys <b>run</b>."</li>
<li>"Each / every / either / neither / one of / everybody" → <b>singular</b> verb. ("Each of the boys <b>is</b>…")</li>
<li>Two subjects joined by <b>and</b> → plural. Joined by <b>or / nor</b> → the verb agrees with the <b>nearer</b> subject. ("Neither John nor his friends <b>are</b> coming.")</li>
<li>Uncountable nouns (information, advice, furniture, equipment, news, mathematics) take a <b>singular</b> verb and no plural "-s". ("The news <b>is</b> good.")</li>
<li>Collective nouns (team, government, family) usually take a singular verb.</li></ul>
<h4>Tenses — keep them consistent</h4>
<table><tr><th>Tense</th><th>Use</th><th>Example</th></tr>
<tr><td>Past simple</td><td>finished action, stated time</td><td>She <b>went</b> yesterday.</td></tr>
<tr><td>Present perfect</td><td>past action, present relevance</td><td>She <b>has gone</b>.</td></tr>
<tr><td>Present perfect continuous</td><td>action continuing up to now</td><td>He <b>has been</b> waiting since 8.</td></tr></table>
<div class="key"><b>Participles:</b> after "has/have/had" use the <b>past participle</b> (done, gone, written), not the past simple (did, went, wrote).</div>`},

"e-comprehension":{title:"Comprehension & Sentence Completion",subject:"English",body:`
<h4>Comprehension strategy</h4>
<ol><li>Skim the questions first so you know what to look for.</li>
<li>Read the passage; underline key points.</li>
<li>Answer using the <b>passage only</b>, not your opinion or outside knowledge.</li>
<li>For "the word X as used means…", substitute each option back into the sentence and keep the one that preserves the meaning.</li>
<li><b>Main idea</b> = the point of the whole passage, not a single supporting detail.</li></ol>
<h4>Sentence completion — use grammar + logic clues</h4>
<p>Signal words tell you the relationship:</p>
<ul><li><b>Contrast:</b> although, but, however, whereas, despite.</li>
<li><b>Cause/effect:</b> because, since, therefore, so, hence.</li>
<li><b>Addition:</b> and, moreover, furthermore, in addition.</li></ul>
<p>"Although he was tired, he ___ working" → a contrast is needed → "continued".</p>
<div class="key"><b>Tip:</b> the correct option must fit both the <b>meaning</b> and the <b>grammar</b> (tense, number, part of speech) of the sentence.</div>`},

"e-figures":{title:"Idioms & Figures of Speech",subject:"English",body:`
<h4>Figures of speech</h4>
<table><tr><th>Figure</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Simile</td><td>compares using like / as</td><td>brave as a lion</td></tr>
<tr><td>Metaphor</td><td>direct comparison (no like/as)</td><td>he is a lion in battle</td></tr>
<tr><td>Personification</td><td>human qualities to non-humans</td><td>the wind whispered</td></tr>
<tr><td>Hyperbole</td><td>deliberate exaggeration</td><td>I've told you a million times</td></tr>
<tr><td>Onomatopoeia</td><td>words that imitate sounds</td><td>buzz, clang, hiss</td></tr>
<tr><td>Euphemism</td><td>mild term for something harsh</td><td>passed away (= died)</td></tr>
<tr><td>Alliteration</td><td>repeated initial sounds</td><td>Peter picked peppers</td></tr>
<tr><td>Irony</td><td>opposite of what's meant</td><td>"Lovely weather!" in a storm</td></tr></table>
<h4>Common idioms</h4>
<ul><li><b>A piece of cake</b> = very easy.</li>
<li><b>Bite the bullet</b> = endure something difficult bravely.</li>
<li><b>Let the cat out of the bag</b> = reveal a secret.</li>
<li><b>Once in a blue moon</b> = very rarely.</li>
<li><b>Cost an arm and a leg</b> = very expensive.</li>
<li><b>Beat about the bush</b> = avoid the main point.</li></ul>
<div class="key"><b>Simile vs metaphor:</b> if you see "like" or "as", it's a simile; a direct "X is Y" is a metaphor.</div>`},

/* ===================== GENERAL KNOWLEDGE ===================== */
"g-naf":{title:"Nigerian Air Force & AFIT",subject:"General",body:`
<h4>Air Force Institute of Technology (AFIT)</h4>
<ul><li>Located in <b>Kaduna</b> (NAF Base, Kawo).</li>
<li>Founded <b>1977</b> as the Technical and Supply School (TSS); became <b>AFIT on 12 March 2008</b>.</li>
<li>Motto: <b>"Quest for Excellence"</b>.</li>
<li>Approved by the <b>NUC</b> in 2018; accredited by NUC, NBTE, COREN and NSE; affiliated with <b>Cranfield University (UK)</b>.</li>
<li>Has <b>5 faculties</b>: Air Engineering; Ground & Communication Engineering; Computing; Sciences; Social & Management Sciences (plus a School of Postgraduate Studies).</li>
<li>Awards B.Eng degrees including Aerospace, Electrical, Mechatronics, Civil, ICT and Telecommunications.</li></ul>
<h4>Nigerian Air Force (NAF)</h4>
<ul><li>Established in <b>1964</b>; headquarters in <b>Abuja</b>.</li>
<li>Headed by the <b>Chief of the Air Staff (CAS)</b>.</li>
<li>The <b>Nigerian Air Force Academy (NAFA)</b> is in Kaduna; the <b>Nigerian Defence Academy (NDA)</b> is also in Kaduna.</li>
<li>NAF roles: control of the airspace, air defence, close air support and airlift.</li></ul>
<div class="key"><b>Likely questions:</b> AFIT's motto, location, founding year, number of faculties, and what it awards. See the detailed <b>"About AFIT & The Screening"</b> lesson too.</div>`},

"g-nigeria":{title:"Nigeria — History, Government & Geography",subject:"General",body:`
<h4>History & politics</h4>
<ul><li>Independence: <b>1 October 1960</b>; became a <b>Republic in 1963</b>; current constitution is from <b>1999</b>.</li>
<li>First President: <b>Nnamdi Azikiwe</b>; first Prime Minister: <b>Tafawa Balewa</b>.</li>
<li>Capital: <b>Abuja</b> (moved from Lagos in 1991). <b>36 states</b> + FCT; <b>774</b> local government areas.</li>
<li>Currency: the <b>Naira</b>. National motto: <b>"Unity and Faith, Peace and Progress"</b>.</li></ul>
<h4>Three arms of government (separation of powers)</h4>
<ul><li><b>Executive</b> — implements laws (President).</li>
<li><b>Legislature</b> — makes laws (National Assembly).</li>
<li><b>Judiciary</b> — interprets laws (courts).</li></ul>
<p>Bicameral National Assembly: <b>Senate</b> (109 members) + <b>House of Representatives</b> (360 members).</p>
<h4>Geography</h4>
<ul><li>Rivers <b>Niger</b> and <b>Benue</b> meet (confluence) at <b>Lokoja</b>.</li>
<li>Neighbours: Niger (north), Chad (north-east), Cameroon (east), Benin (west).</li>
<li>Largest city: Lagos. Major groups: Hausa, Yoruba, Igbo.</li></ul>
<div class="key"><b>Anthem:</b> Nigeria readopted "Nigeria, We Hail Thee" in 2024. Three tiers of government: Federal, State and Local.</div>`},

"g-current":{title:"Current Affairs & World Knowledge",subject:"General",body:`
<h4>Organisations & headquarters</h4>
<table><tr><th>Body</th><th>HQ</th><th>Note</th></tr>
<tr><td>United Nations (UN)</td><td>New York, USA</td><td>formed 1945; Nigeria joined 1960</td></tr>
<tr><td>ECOWAS</td><td>Abuja, Nigeria</td><td>West African bloc</td></tr>
<tr><td>African Union (AU)</td><td>Addis Ababa, Ethiopia</td><td></td></tr>
<tr><td>OPEC</td><td>Vienna, Austria</td><td>oil exporters</td></tr>
<tr><td>WHO</td><td>Geneva, Switzerland</td><td>health</td></tr></table>
<h4>World facts that recur</h4>
<ul><li>Largest continent: <b>Asia</b>. Smallest: Australia/Oceania. Longest river: the <b>Nile</b>. Largest desert: the <b>Sahara</b>.</li>
<li>Largest ocean: the Pacific. Highest mountain: Everest.</li>
<li>Light speed ≈ 3×10⁸ m/s; water boils at 100 °C, freezes at 0 °C.</li></ul>
<div class="key"><b>Stay current:</b> facts like the President, Chief of Air Staff, ministers, and recent sports/Olympic/AFCON results <b>change over time</b>. In the week before your exam, quickly confirm the current holders of these posts from the news — don't rely on memory alone.</div>`},

};
