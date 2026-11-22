---
name: "yosefabdoh.com"
description: "A career shown as a bilingual terminal flight board, in daylight."
colors:
  concrete: "#e6e7e3"
  concrete-deep: "#dcded9"
  sign-white: "#ffffff"
  ink: "#1d252c"
  ink-muted: "#4b5660"
  rule: "#c6cac4"
  rule-strong: "#9aa19b"
  board-slate: "#1f2a33"
  board-row: "#25323d"
  board-hover: "#2d3c48"
  board-ink: "#f2eee4"
  board-ink-muted: "#a6b1b9"
  board-rule: "#34434f"
  signal-yellow: "#f5b800"
  signal-yellow-press: "#dca500"
  signal-yellow-hover: "#ffc61a"
  lamp-go: "#3fc27a"
  lamp-wait: "#f2a33a"
  lamp-done: "#8b98a2"
  text-go: "#1c7a49"
typography:
  display:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 5.4vw, 5.75rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  contact-email:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 0.7rem + 3.6vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
  title:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  role-line:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1rem + 1.4vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.2
  subhead:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  clock:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.2
  board-title:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 0.95rem + 0.6vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.3
  job-role:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.3
  intro:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-arabic:
    fontFamily: "Noto Kufi Arabic Variable, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  ui:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  small:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Signika Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  bullet: "1px"
  sign: "3px"
  panel: "4px"
  flap: "2px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  wrap: "1180px"
  section: "clamp(72px, 10vw, 128px)"
components:
  sign-go:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    height: "48px"
    padding: "0 20px"
  sign-go-active:
    backgroundColor: "{colors.signal-yellow-press}"
  sign-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    height: "48px"
    padding: "0 20px"
  board:
    backgroundColor: "{colors.board-slate}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.panel}"
  board-row:
    backgroundColor: "{colors.board-row}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.flap}"
    height: "52px"
  view-switch-on:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.flap}"
    height: "40px"
  contact-panel:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
---

# Design System: yosefabdoh.com

<!-- impeccable:design-map -->
Name: yosefabdoh.com
Colors: primary: signal-yellow #f5b800; secondary: board-slate #1f2a33; tertiary: lamp-go #3fc27a; neutral: concrete #e6e7e3; tertiary: lamp-wait #f2a33a; tertiary: lamp-done #8b98a2 (+1 more in the sidecar)
Fonts: Signika Variable (display, contact-email, headline, title, role-line, subhead, clock, board-title, job-role, lead, intro, body, ui, small, label); Noto Kufi Arabic Variable (body-arabic)
Spacing: gutter clamp(16px, 4vw, 40px), wrap 1180px, section clamp(72px, 10vw, 128px)
Radius: bullet 1px, sign 3px, panel 4px, flap 2px
Don't:
- Don't add eyebrows, section numbers, decorative icon tiles, gradient text, glass cards or pill clouds of skills.
- Don't put passport, visa or stamp imagery in the travel world.
- Don't animate sections on scroll; the board flip is the only entrance.
Do:
- Do keep one memorable object per viewport; the board owns the first one.
- Do write every status as a word next to its lamp.
- Do keep Latin product names readable in Arabic (`unicode-bidi: plaintext` on tech lists, LRM before a leading `.NET`).
Full: .impeccable/design-full.md (read a section when you need its detail)
