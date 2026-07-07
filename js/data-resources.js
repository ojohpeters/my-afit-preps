/* ============================================================
   RESOURCE LIBRARY  —  standalone interactive study guides
   Each opens its own self-contained page in resources/*.html
   (lessons + worked examples + a click-to-answer quiz).

   TO ADD A NEW GUIDE: drop the .html into /resources and add one
   entry below. Fields:
     file    – filename inside /resources
     title   – card heading
     subject – Maths | Physics | Chemistry | Biology | English | General
     desc    – one-line summary shown on the card
     meta    – small badge text (e.g. "30-question quiz")
     note    – (optional) extra flag, e.g. "For tutors"
   ============================================================ */
window.RESOURCES = [

  /* ---------- Maths ---------- */
  {file:"maths-variation.html", subject:"Maths",
   title:"Variation — Direct, Inverse, Joint & Partial",
   desc:"The constant k and the 3-step method for direct, inverse and power variation, plus a deep dive on joint and partial variation (solving for two constants).",
   meta:"30-question quiz"},
  {file:"maths-calculus-student.html", subject:"Maths",
   title:"Calculus — Differentiation & Integration",
   desc:"Taught from zero: power rule, chain/product/quotient, turning points, integration, area under a curve + Further Maths extras.",
   meta:"30-question quiz"},
  {file:"maths-calculus-tutor.html", subject:"Maths",
   title:"Calculus — Tutor Guide",
   desc:"A teaching companion: lesson plan, what to say, common mistakes, check-questions and a practice set with full solutions.",
   meta:"Teaching guide", note:"For tutors"},
  {file:"maths-indices-logarithms-surds.html", subject:"Maths",
   title:"Indices, Logarithms & Surds",
   desc:"All the laws of indices and logs, solving indicial & log equations, simplifying surds and rationalising denominators (single & conjugate).",
   meta:"30-question quiz"},
  {file:"maths-probability.html", subject:"Maths",
   title:"Probability",
   desc:"Single events, the complement, addition rule (OR), multiplication rule (AND), independence, with/without replacement and 'at least one' problems.",
   meta:"30-question quiz"},

  /* ---------- Physics ---------- */
  {file:"physics-electricity.html", subject:"Physics",
   title:"Electricity A–Z",
   desc:"Electric charges, electric field (E = kQ/r²), current, Ohm's law, resistors in series & parallel, power and safety.",
   meta:"30-question quiz"},
  {file:"physics-moments.html", subject:"Physics",
   title:"Principle of Moments",
   desc:"Turning effect of forces, clockwise = anticlockwise, equilibrium, seesaws, metre-rule & reaction-force problems solved step by step.",
   meta:"30-question quiz"},
  {file:"physics-ac-circuits.html", subject:"Physics",
   title:"A.C. Circuits",
   desc:"Alternating current, r.m.s. vs peak, reactance (ELI the ICE man), impedance, RLC resonance, power factor and transformers.",
   meta:"30-question quiz"},
  {file:"physics-radioactivity.html", subject:"Physics",
   title:"Radioactivity",
   desc:"Alpha, beta & gamma radiation compared, balancing nuclear equations, half-life calculations, fission vs fusion, uses and safety.",
   meta:"30-question quiz"},
  {file:"physics-vectors.html", subject:"Physics",
   title:"Vectors & Lami's Theorem",
   desc:"Scalars vs vectors, resolving into components, the parallelogram law, equilibrium, Lami's theorem and complex problems (inclines, strings, tensions).",
   meta:"30-question quiz"},
  {file:"physics-work-energy-power.html", subject:"Physics",
   title:"Work, Energy & Power",
   desc:"Work (F·d, F·d·cosθ, mgh), kinetic & potential energy, conservation and transformation of energy, power (W/t, F·v) and efficiency.",
   meta:"30-question quiz"},
  {file:"physics-waves.html", subject:"Physics",
   title:"Waves",
   desc:"Transverse vs longitudinal, wave terms, the wave equation v = fλ, reflection/refraction/diffraction, sound & echoes, EM spectrum, nodes & harmonics.",
   meta:"30-question quiz"},

  /* ---------- Chemistry ---------- */
  {file:"chemistry-mixed-practice.html", subject:"Chemistry",
   title:"Chemistry — Mixed Practice",
   desc:"General revision across atomic structure, bonding & reactions, moles & gas laws, organic and everyday chemistry.",
   meta:"48-question quiz"},
  {file:"chemistry-separation.html", subject:"Chemistry",
   title:"Separation Techniques",
   desc:"Every method — filtration, distillation, sublimation, chromatography, separating funnel — with the 'spot the difference' master table.",
   meta:"30-question quiz"},
  {file:"chemistry-isoelectronic.html", subject:"Chemistry",
   title:"Isoelectronic Species (Ions)",
   desc:"Counting electrons in ions, the 10- and 18-electron families (Ne & Ar series), and why ionic size falls as nuclear charge rises.",
   meta:"30-question quiz"},
  {file:"chemistry-metals-nonmetals.html", subject:"Chemistry",
   title:"Metals, Non-metals & Their Compounds",
   desc:"Physical & chemical differences, the reactivity series, reactions with oxygen/water/acid, and classifying oxides (basic/acidic/amphoteric/neutral).",
   meta:"30-question quiz"},
  {file:"chemistry-acids-bases-salts.html", subject:"Chemistry",
   title:"Acids, Bases & Salts",
   desc:"Arrhenius/Brønsted/Lewis definitions, pH & indicators, salt types & preparation, solubility rules, titration calculations and salt hydrolysis.",
   meta:"30-question quiz"},
  {file:"chemistry-mole-stoichiometry.html", subject:"Chemistry",
   title:"Mole Concept & Stoichiometry",
   desc:"The mole & Avogadro's number, molar mass & molar volume, empirical/molecular formulae, % composition, reacting-mass sums and concentration.",
   meta:"30-question quiz"},

  /* ---------- Biology ---------- */
  {file:"biology-genetics.html", subject:"Biology",
   title:"Genetics",
   desc:"Mendel's laws, genes & alleles, genotype/phenotype, Punnett squares (3:1, 9:3:3:1), sex determination, blood groups, variation.",
   meta:"30-question quiz"},
  {file:"biology-pollination.html", subject:"Biology",
   title:"Insect vs Wind Pollination",
   desc:"Flower structure and every adaptation of insect- and wind-pollinated flowers, with the key side-by-side comparison table.",
   meta:"30-question quiz"},
  {file:"biology-circulatory-system.html", subject:"Biology",
   title:"Circulatory System",
   desc:"The heart & double circulation, arteries/veins/capillaries, blood components, the circulation pathway, and ABO/Rhesus blood groups.",
   meta:"30-question quiz"},
  {file:"biology-digestion-nutrition.html", subject:"Biology",
   title:"Food, Nutrition & Digestion",
   desc:"Food classes & tests, vitamin deficiencies, the alimentary canal, digestive enzymes (substrate→product), absorption via villi and modes of nutrition.",
   meta:"30-question quiz"},

  /* ---------- English ---------- */
  {file:"english-parallelism.html", subject:"English",
   title:"Structural Parallelism",
   desc:"Parallel structure rules, correlative conjunctions (either/or, not only/but also), and how to spot & fix faulty parallelism.",
   meta:"30-question quiz"},

  /* ---------- Mixed / Past paper ---------- */
  {file:"post-utme-week5.html", subject:"General",
   title:"Post-UTME Week 5 — Full Worked Paper (PCB)",
   desc:"197 solved questions — Physics, Chemistry, Biology & Use of English — every answer taught step by step.",
   meta:"197 solved questions"}

];
