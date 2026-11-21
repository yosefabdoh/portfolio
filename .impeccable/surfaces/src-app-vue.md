---
version: 1
slug: "src-app-vue"
primary_target: "src/App.vue"
related_targets: []
---

## Scope

yosefabdoh.com single page (src/App.vue and components). Visitor mode: Experience (the work leads).
Audience: hiring managers and tech leads, laptop in daylight, 1-2 minutes; Arabic readers via the AR toggle.
Job: see what he builds, see proof, scan history, contact or download the CV.
Proof: real screens of Ayma ERP and GiftSniper (local runs on synthetic demo data), Service Base site.
Constraints: Vue 3 + Tailwind 4, EN/AR with RTL, private repos described not linked, no invented claims.

## Direction contract

THESIS: One career shown as a terminal flight board. A bilingual information board lists every project and role with a live status, and it flips between English and Arabic the way airport boards in Cairo and Riyadh alternate scripts. Refuses the category default: dark hero, gradient name, skill pills, equal project cards.

OWN-WORLD: Daylight terminal. Pale concrete ground, white sign panels, a deep slate board with warm white type, signal yellow for wayfinding (black on yellow = go somewhere; yellow on slate = you are here), status lamps in green, amber and grey. Signika (a wayfinding sans) for Latin, Noto Kufi Arabic for Arabic, tabular figures. Panel corners 3px. Drawn SVG arrows only where a sign points. No glass, no gradients, no glow.

STORY: In one glance the visitor knows who (Yousef Abdo, full-stack developer, Cairo), what (bilingual business software, API to interface), and that it is real (the board rows open real screens). Then the work history in IT support and teaching across Egypt, Saudi Arabia and Yemen; then email or CV download.

FIRST VIEWPORT: Slate sign bar on top with name, section links, EN/AR toggle. Left-aligned h1 naming him and the role with one sub-line and two actions (Email, Download CV) styled as yellow and outlined signs. Below it, full content width, the board: column row (Year, Project, Built with, Role, Status) and six rows, each a link to its section. Board is the dominant object.

FORM: Candidate 6 of 7 (air travel documents), translated: passport and visa material replaced by the terminal flight board and wayfinding signs, because stamps foreground immigration status for a job-seeker. Signature interaction: the board flips in once on load, and every board cell flips to the other script on the language toggle (per cell, so Arabic shaping survives); reduced motion swaps instantly. seed:26ff82bb48ccebfb

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

Live deployment happens on merge to the Vercel production branch (not done in this session).
