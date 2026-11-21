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

## Overview

A daylight airport terminal. The page is one career laid out as a flight information board:
every project and role is a row with a year, what it was built with, the role and a live status,
and the board flips between English and Arabic the way boards in Cairo and Riyadh alternate
scripts. Everything around the board stays quiet: concrete ground, white sign panels, thin rules.

Visitor mode is Experience: the work leads. Real screens of the owner's projects sit in plain
framed panels directly under each case title. Boldness is spent in two places only, the board in
the first viewport and the yellow contact sign at the close.

## Colors

Restrained strategy with one wayfinding color.

- **Concrete** (#e6e7e3) is the page ground; **sign white** (#ffffff) marks the Experience band.
- **Ink** (#1d252c) for text, **ink muted** (#4b5660) for secondary lines (6:1 on concrete).
- **Board slate** (#1f2a33) carries the header bar and the board, with **board ink** (#f2eee4)
  warm white type.
- **Signal yellow** (#f5b800) means "go this way": primary actions, the active view switch,
  the board's hover arrow, the contact sign, the focus ring and text selection. Black on yellow
  points somewhere; yellow on slate says where you are (the board title).
- **Lamps** report status only: green for live or current, amber for in development, grey for
  completed. Every lamp has a written label.

Dark theme (night terminal) swaps the same variables: ground #151b20, panel #1d252c, ink #ece9e1,
ink muted #a9b3ba, board #0f151a, text-go #5fd394. Yellow and lamps stay fixed.

## Typography

Signika (a wayfinding sans) for Latin and Noto Kufi Arabic for Arabic, both self-hosted variable
fonts. Latin words inside Arabic keep Signika through `[lang="en"]`. Tabular figures for years,
the clock and every date column.

Scale (frontmatter has every step): display 92px name, 56px contact email, 48px section headings,
40px case titles, 34px role line, 24px subheads, 19-22px board and job titles, 18px intros, 17px
body, 15-16px UI and board cells, 14px labels. Headings use balanced wrapping; body measure stays under 64ch. Arabic gets
taller line height (1.75) and no negative tracking.

Board cells use sentence case, not airport capitals, and no monospace appears anywhere.

## Layout

Single column inside a 1180px wrap with fluid gutters. First viewport at 1440x900: header bar,
then name and role on the left with the intro, availability lamp and two actions on the right,
then the full-width board, all six rows above the fold.

Case studies stack: title and one-line summary, a view switch, the full-width screenshot (16:10),
then body text beside a ruled facts list. Experience is a two-column CV layout: jobs with a year
gutter on the left, education, certifications, award, volunteering and references on the right.

Breakpoints: 980px hides the board's "Built with" column; 900px stacks the hero; 860px swaps nav
for a full-screen menu; 680px stacks each board row as year beside project, role and status.
Right-to-left mirrors everything through `dir="rtl"`; arrows flip, years and code stay LTR.

Print: the same page prints as a two-page A4 CV (board, screenshots, contact panel and nav hidden;
a contact line appears under the name). The PDF downloads are printed from it.

## Elevation & Depth

Flat, with two offset shadows: the board (0 18px 40px -24px, slate at 55%) and screenshot frames
(0 24px 48px -32px). No glass, no glow, no gradients.

## Shapes

Sign corners: 3px on buttons and tiles, 4px on panels (board, frames, contact sign), 2px on board
rows and flap tiles. Lists are separated by 1px rules under a 2px ink top rule.

## Components

- **Board**: slate panel, yellow title, Cairo clock, column row, six link rows. On wide screens
  every cell is its own flat tile with a 3px slate gap (the board's module grid), and the rows
  run edge to edge on the title rule. Year sits on a split-flap tile (dark card with a hairline
  across the middle). Hovering a row lightens its tiles and slides a yellow arrow into the end of
  the Status tile. At 680px and below each row is one tile with year, project, role and status. Each cell flips in once on load and flips again on language change;
  whole words flip, never letters, so Arabic keeps its joined shapes.
- **Signs** (buttons): `sign-go` yellow, `sign-quiet` outlined. Lift 1px on hover, press 1px down.
- **View switch**: slate segmented control above a screenshot; the active view is yellow.
- **Facts list**: definition list with a fixed label column.
- **Contact sign**: full-width yellow panel with the email set large and three routes below.

## Do's and Don'ts

- Do keep one memorable object per viewport; the board owns the first one.
- Do write every status as a word next to its lamp.
- Do keep Latin product names readable in Arabic (`unicode-bidi: plaintext` on tech lists, LRM
  before a leading `.NET`).
- Don't add eyebrows, section numbers, decorative icon tiles, gradient text, glass cards or pill
  clouds of skills.
- Don't put passport, visa or stamp imagery in the travel world.
- Don't animate sections on scroll; the board flip is the only entrance.
