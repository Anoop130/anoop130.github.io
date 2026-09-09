/* ------------------------------------------------------------------
   Detail content for every card on the page. One entry per data-item.
   ------------------------------------------------------------------ */

const ITEMS = {

  playbook: {
    kind: "Work · Internship",
    title: "Playbook",
    meta: "Infrastructure Engineer Intern · Playbook · Athletics Intelligence Research Laboratory",
    when: "Jun 2026 to Present",
    did: [
      "Architected a multi-database PostgreSQL cluster storing <strong>4.3M+ rows for 50+ users</strong>, with 40+ versioned migrations and per-service role isolation.",
      "Implemented multi-tenant authorization with PostgreSQL Row-Level Security, enforcing <strong>default-deny access across 3 independent scopes</strong>.",
      "Migrated production services to rootless Podman with systemd Quadlets on RHEL 9/SELinux, across 3 VMs and a dedicated GPU workstation.",
      "Automated 3-environment CI/CD with GitHub Actions and GHCR, sequencing migrations before deployments to prevent version mismatches."
    ],
    stack: ["PostgreSQL", "Row-Level Security", "Podman (rootless)", "systemd Quadlets", "RHEL 9 / SELinux", "GitHub Actions", "GHCR", "nginx", "gunicorn"],
    note: "Internal lab work. The repository is private."
  },

  truscript: {
    kind: "Work · Fellowship",
    title: "TruScript",
    meta: "AI Hub Fellow · Mississippi ITS AI Innovation Hub · AI Modeling &amp; Fraud Detection Lead",
    when: "Feb 2026 to May 2026",
    did: [
      "Delivered a completed proof of concept and <strong>presented findings directly to the Mississippi Board of Nursing</strong>.",
      "Designed and implemented an AI/ML transcript fraud detection pipeline on AWS using <strong>Textract, Lambda, and Bedrock Knowledge Bases</strong>.",
      "Built Lambda orchestration combining OCR extraction, prompt-based fraud checks, risk scoring, and explainable output generation.",
      "Integrated the AI pipeline with a FastAPI backend via async invocation and S3 document flow with secure callback updates."
    ],
    stack: ["AWS Textract", "AWS Bedrock", "Bedrock Knowledge Bases", "AWS Lambda", "S3", "FastAPI", "Python"],
    links: [
      { label: "Mississippi ITS · AI Innovation Student Teams", href: "https://www.its.ms.gov/services/ai-innovation-student-teams" }
    ],
    gallery: [
      { src: "images/truscript-talk.jpg", alt: "Presenting the TruScript pipeline", caption: "Presenting the TruScript pipeline at the Mississippi Sports Hall of Fame and Museum." },
      { src: "images/truscript-team.jpg", alt: "TruScript team with Mississippi Board of Nursing representatives", caption: "With Mississippi Board of Nursing representatives after the final presentation." },
      { src: "images/truscript-architecture.png", alt: "AWS architecture diagram for the TruScript system", caption: "System architecture.", pad: true },
      { src: "images/aihub-cohort.jpg", alt: "AI Innovation Hub student cohort", caption: "The AI Innovation Hub student cohort." }
    ],
    note: "Agency work. The implementation repository is not public."
  },

  fronthaul: {
    kind: "Research · NSF funded",
    title: "Open Fronthaul Security Testing",
    meta: "Undergraduate Research Assistant · Wireless Communications Lab, Mississippi State University",
    when: "Feb 2025 to Jul 2026",
    did: [
      "Won the <strong>IEEE MILCOM Outstanding Demo Award</strong> for co-authored research on Open Fronthaul protocol security testing.",
      "Built an autonomous Bash testing engine with self-recovery, enabling <strong>24/7 attack execution with zero human intervention</strong>.",
      "Reduced test environment setup time by <strong>75%</strong> via Linux network virtualization, Docker containers, and SDR UE emulation.",
      "Streamed live logs to InfluxDB and built Grafana dashboards for real-time attack observability across test runs."
    ],
    stack: ["Bash", "srsRAN", "Docker", "Linux network virtualization", "SDR / UE emulation", "InfluxDB", "Grafana", "Python"],
    gallery: [
      { src: "images/fronthaul-dos.png", alt: "The attack harness console during a denial-of-service replay, logging injection points and per-packet counters from the radio unit", caption: "The harness replaying a denial-of-service attack against the Open Fronthaul interface, with the radio unit's counters logged per packet." }
    ],
    note: "Lab and collaborator repositories are private. The demo work was published through IEEE MILCOM."
  },

  netauto: {
    kind: "Research · NTIA funded",
    title: "AI-Driven Network Automation",
    meta: "Undergraduate Research Assistant · Wireless Communications Lab, Mississippi State University",
    when: "Feb 2025 to Jul 2026",
    did: [
      "Built a self-healing multi-agent LLM orchestration system with LangChain and HuggingFace Transformers, <strong>reducing network configuration complexity by 70%</strong>.",
      "Engineered a RAG pipeline backed by ChromaDB, <strong>improving O-RAN spec retrieval accuracy by 60%</strong>.",
      "Benchmarked 5 open-source LLMs on custom efficiency metrics, surfacing a <strong>6x performance gap</strong> to guide model selection."
    ],
    stack: ["LangChain", "HuggingFace Transformers", "ChromaDB", "FAISS", "RAG", "Python"],
    links: [
      { label: "github.com/Anoop130/ORAN_RAG", href: "https://github.com/Anoop130/ORAN_RAG" }
    ],
    gallery: [
      { src: "images/network-automation.png", alt: "A six-step agent loop: a controller prompts a planner to write a test procedure, a second agent generates the API calls and config, a validator checks the plan, then the executor runs the test against a UE's NAS, RRC, PDCP, RLC, MAC and PHY layers and returns results to analyse", caption: "The controller prompts the planner, config and validation agents; the executor drives the test UE and reports back.", pad: true }
    ]
  },

  autosec: {
    kind: "Research",
    title: "AutoSec-RAN",
    meta: "5G/O-RAN security LLM pipeline · Wireless Communications Lab, Mississippi State University",
    when: "Feb 2025 to Jul 2026",
    did: [
      "Designed a multi-step data generation system producing <strong>4.8K+ security Q&amp;A examples</strong> with validation passes for factual grounding.",
      "Fine-tuned instruction-following LLMs with <strong>LoRA/PEFT on an A100 GPU</strong> using mixed precision, checkpointing, and memory-aware training.",
      "Evaluated <strong>168 security scenarios</strong> from network captures and logs, identifying <strong>243 high/critical findings</strong> across DoS and injection-style attacks."
    ],
    stack: ["PyTorch", "HuggingFace", "LoRA / PEFT", "A100 / mixed precision", "Python"],
    gallery: [
      { src: "images/autosec-ran.png", alt: "The AutoSec-RAN pipeline: an offline path curates the specification corpus, builds FAISS stores and generates training pairs to LoRA fine-tune a Mistral-7B adapter; at inference, RAG retrieval and that adapter answer an investigator's question and a judge model scores the result", caption: "Offline fine-tuning on the left, retrieval and scored evaluation at inference on the right.", pad: true }
    ],
    note: "The repository is private while the paper is in progress."
  },

  ta: {
    kind: "Work · Teaching",
    title: "Teaching Assistant",
    meta: "NSF ExLENT XAI Project · Mississippi State University",
    when: "Feb 2026 to May 2026",
    did: [
      "Graded and validated reference solutions across NLP and deep learning modules in an NSF-funded XAI curriculum."
    ],
    stack: ["PyTorch", "HuggingFace", "Jupyter", "Python"],
    note: "The course repository is private. It contains student submissions and graded work."
  },

  cavs: {
    kind: "Work · Data science",
    title: "Data Science Assistant",
    meta: "Center for Advanced Vehicular Systems (CAVS), Mississippi State University",
    when: "Nov 2024 to Jul 2025",
    did: [
      "Optimized construction resource allocation across multiple sites using mathematical models based on hardware constraints."
    ],
    stack: ["Python", "Mathematical modelling"],
    note: "Repository is private. It contains partner site data."
  },

  "debate-record": {
    kind: "Extracurricular \u00b7 Debate",
    title: "IPDA competitive debate",
    meta: "Mississippi State University Debate Team \u00b7 Novice 2023/24, then Junior Varsity 2024/25",
    when: "Sep 2023 to Apr 2025",
    what: [
      "The International Public Debate Association places competitors in Novice, Junior Varsity, Varsity or Professional divisions. Topics are drawn shortly before each round, debaters compete individually, and rounds are decided by lay judges.",
      "National standing is cumulative rather than a single bracket: one point per preliminary win, one for breaking to elimination rounds, two per elimination win, with the best six tournaments counting."
    ],
    did: [
      "<strong>2023/24 Novice: 9th nationally out of 871 competitors</strong> in IPDA's season-long standings, across eight sanctioned tournaments.",
      "<strong>Semifinalist at the 2024 IPDA National Championship.</strong> Sixth seed in a 127-entry field on seven preliminary wins, then won triple-octofinals, double-octofinals, octofinals and quarterfinals before losing in the semifinal.",
      "<strong>30th speaker of 127</strong> at that national tournament.",
      "<strong>Quarterfinalist at Union University</strong>, third seed on five preliminary wins. <strong>Quarterfinalist at Central Arkansas</strong>, winning octofinals from the 14th seed.",
      "<strong>Eighth seed of 63</strong> at the LSU Shreveport Red River Classic, with five preliminary wins and a break to double-octofinals.",
      "<strong>Speaker award at the Bowling Green State online tournament.</strong>",
      "<strong>Top-scoring novice on the Mississippi State squad</strong>, which placed in the national top three of 172 squads. Only a school's best three novices count toward that award.",
      "<strong>2024/25 Junior Varsity: 17th nationally out of 400</strong>, across seven tournaments.",
      "<strong>8th speaker of 82</strong> in Junior Varsity at the 2025 IPDA National Championship, on 304 total speaker points.",
      "<strong>Fourth seed at the Mendoza Debates at Lee College</strong> on five wins and 218 speaker points. <strong>Quarterfinalist at the MTSU Naveen Scott Pejaver Memorial.</strong>",
      "Squad results over both seasons: Mississippi State finished <strong>#1 of 179 schools</strong> on the IPDA Founders Award and <strong>#1 of 178</strong> on the Scholastic Award, won a second straight IPDA National Championship, and took the IPDA Season-Long Championship for the first time."
    ],
    stack: ["IPDA", "Novice", "Junior Varsity", "Extemporaneous", "Lay judging"],
    links: [
      { label: "2024 Nationals, Novice result sheets", href: "https://forensicstournament.net/IPDANationals/24/results/et/51813" },
      { label: "2025 Nationals, JV speaker awards", href: "https://forensicstournament.net/IPDANationals/25/speakerawards/57586" },
      { label: "MSU newsroom, national championship", href: "https://www.msstate.edu/newsroom/article/2025/04/msu-claims-second-straight-collegiate-debate-national-championship" }
    ],
    note: "Placements are taken from IPDA's official season-long results workbooks for 2023/24 and 2024/25 and from the tournament tab sheets on forensicstournament.net."
  },

  synq: {
    kind: "Project",
    title: "Synq",
    meta: "Cloud native systems tracker · C++, PostgreSQL",
    when: "Dec 2025 to Present",
    did: [
      "Built a C++ monitoring agent with <strong>0.3% CPU usage and a 15 MB memory footprint</strong>, deployed via Docker on Supabase and Render."
    ],
    stack: ["C++", "Python", "Flask", "PostgreSQL", "Supabase", "Docker", "systemd", "Render"],
    links: [{ label: "github.com/Anoop130/synq", href: "https://github.com/Anoop130/synq" }],
    gallery: [
      { src: "images/synq-architecture.png", alt: "Synq system architecture", caption: "Collector on the device, Flask server on Render, PostgreSQL on Supabase.", pad: true }
    ]
  },

  "synq-gnome": {
    kind: "Project · Published extension",
    title: "Synq for GNOME",
    meta: "GNOME Shell extension · JavaScript (GJS)",
    when: "2026 · GNOME Shell 45 to 48",
    did: [
      "Published to extensions.gnome.org for GNOME Shell 45 to 48.",
      "Exposes a D-Bus API that a Synq collector can subscribe to."
    ],
    stack: ["JavaScript (GJS)", "GNOME Shell 45 to 48", "D-Bus", "GSettings / GSchema", "CSS"],
    links: [
      { label: "github.com/Anoop130/synq-gnome", href: "https://github.com/Anoop130/synq-gnome" },
      { label: "extensions.gnome.org", href: "https://extensions.gnome.org/extension/10088/synq/" }
    ],
    gallery: [
      { src: "images/synq-gnome-panel.png", alt: "Synq panel menu with daily app breakdown", caption: "The panel menu: 24 hour strip, per-app durations and shares, peak focus block, switch count, CSV export.", tall: true }
    ]
  },

  wakapanel: {
    kind: "Project · Published extension",
    title: "WakaPanel",
    meta: "GNOME Shell extension · JavaScript (GJS), GTK4",
    when: "Nov 2025 to Present · GNOME Shell 45 to 48",
    did: [
      "Published a GNOME Shell extension integrating the WakaTime API to surface real-time coding stats on the desktop panel.",
      "Deployed the initial version, then iterated on UI/UX based on user feedback, <strong>growing to 200+ users</strong>."
    ],
    stack: ["JavaScript (GJS)", "GTK4 / libadwaita", "GNOME Shell 45 to 48", "WakaTime API", "GSettings / GSchema"],
    links: [
      { label: "github.com/Anoop130/wakapanel", href: "https://github.com/Anoop130/wakapanel" },
      { label: "extensions.gnome.org", href: "https://extensions.gnome.org/extension/8679/wakapanel/" }
    ],
    gallery: [
      { src: "images/wakapanel-panel.png", alt: "WakaPanel panel menu showing today's coding stats", caption: "Today's total, top project and top language, in the panel." },
      { src: "images/wakapanel-prefs.png", alt: "WakaPanel GTK4 preferences window", caption: "GTK4 preferences: API key, refresh interval, endpoint." }
    ]
  },

  oranrag: {
    kind: "Projects · Open source",
    title: "Open source repositories",
    meta: "Tooling from lab work",
    when: "2025 to 2026",
    did: [
      "<strong>ORAN_RAG</strong>: retrieval pipeline over O-RAN specification documents.",
      "<strong>5g_helpers</strong>: scripts for setting up 5G test environments."
    ],
    stack: ["Python", "ChromaDB", "FAISS", "Bash"],
    links: [
      { label: "github.com/Anoop130/ORAN_RAG", href: "https://github.com/Anoop130/ORAN_RAG" },
      { label: "github.com/Anoop130/5g_helpers", href: "https://github.com/Anoop130/5g_helpers" },
      { label: "All repositories", href: "https://github.com/Anoop130?tab=repositories" }
    ]
  }
};

/* ------------------------------------------------------------------
   Detail overlay
   ------------------------------------------------------------------ */

const scrim  = document.getElementById("scrim");
const detail = document.getElementById("detail");
const body   = document.getElementById("detail-body");
const kindEl = document.getElementById("detail-kind");
let lastFocused = null;

function render(item) {
  const parts = [];

  parts.push(`<h2 id="detail-title">${item.title}</h2>`);
  parts.push(`<p class="detail-meta">${item.meta}</p>`);
  parts.push(`<p class="detail-when">${item.when}</p>`);

  if (item.what) {
    parts.push(`<h3>What it is</h3>`);
    item.what.forEach(p => parts.push(`<p>${p}</p>`));
  }

  if (item.did) {
    parts.push(`<h3>In detail</h3><ul>`);
    item.did.forEach(li => parts.push(`<li>${li}</li>`));
    parts.push(`</ul>`);
  }

  if (item.gallery && item.gallery.length) {
    parts.push(`<h3>${item.gallery.length > 1 ? "Gallery" : "Reference"}</h3>`);
    item.gallery.forEach(g => parts.push(figure(g)));
  }

  if (item.stack) {
    parts.push(`<h3>Stack</h3><div class="tags">`);
    item.stack.forEach(t => parts.push(`<span class="tag">${t}</span>`));
    parts.push(`</div>`);
  }

  if (item.links) {
    parts.push(`<h3>Where it lives</h3><div class="detail-links">`);
    item.links.forEach(l => parts.push(
      `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.label} \u2197</a>`
    ));
    parts.push(`</div>`);
  }

  if (item.note) parts.push(`<p class="note">${item.note}</p>`);

  kindEl.textContent = item.kind;
  body.innerHTML = parts.join("");
  body.scrollTop = 0;
  detail.scrollTop = 0;
}

function figure(g) {
  return `<figure class="figure">
    <img src="${g.src}" alt="${g.alt}" loading="lazy">
    ${g.caption ? `<figcaption>${g.caption}</figcaption>` : ""}
  </figure>`;
}

function openDetail(id, pushHash = true) {
  const item = ITEMS[id];
  if (!item) return;
  lastFocused = document.activeElement;
  render(item);
  scrim.classList.add("open");
  detail.classList.add("open");
  document.body.classList.add("locked");
  detail.focus();
  if (pushHash) history.pushState({ id }, "", "#" + id);
}

function closeDetail(popHash = true) {
  scrim.classList.remove("open");
  detail.classList.remove("open");
  document.body.classList.remove("locked");
  if (popHash && location.hash) history.pushState("", "", location.pathname + location.search);
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll("[data-item]").forEach(card => {
  card.addEventListener("click", () => openDetail(card.dataset.item));
});

/* cross-links between Synq and its extension */
body.addEventListener("click", e => {
  const jump = e.target.closest("[data-jump]");
  if (!jump) return;
  e.preventDefault();
  openDetail(jump.dataset.jump);
});

document.getElementById("close").addEventListener("click", () => closeDetail());
scrim.addEventListener("click", () => closeDetail());
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && detail.classList.contains("open")) closeDetail();
});

window.addEventListener("popstate", () => {
  const id = location.hash.slice(1);
  if (ITEMS[id]) openDetail(id, false);
  else closeDetail(false);
});

/* deep link on load: /#synq */
const initial = location.hash.slice(1);
if (ITEMS[initial]) openDetail(initial, false);

/* ------------------------------------------------------------------
   Theme
   ------------------------------------------------------------------ */

const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) {
  root.setAttribute("data-theme", saved);
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.setAttribute("data-theme", "light");
}

document.getElementById("theme").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

document.getElementById("year").textContent = new Date().getFullYear();
