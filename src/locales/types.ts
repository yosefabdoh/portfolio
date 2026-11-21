export type Tone = 'go' | 'wait' | 'done'

export interface Link {
  label: string
  href: string
}

export interface BoardRow {
  year: string
  project: string
  stack: string
  role: string
  status: string
  tone: Tone
  href: string
}

export interface Shot {
  /** File name in /public/work without extension; a -1000 variant exists for small screens. */
  file: string
  tab: string
  alt: string
  dir?: 'rtl' | 'ltr'
  theme?: 'light' | 'dark'
}

export interface Fact {
  label: string
  value: string
}

export interface CaseStudy {
  id: string
  name: string
  summary: string
  body: string
  facts: Fact[]
  shots: Shot[]
  links: Link[]
  viewsLabel: string
}

export interface EarlierProject {
  name: string
  year: string
  text: string
  href: string
}

export interface Job {
  role: string
  company: string
  place: string
  years: string
  points: string[]
}

export interface Degree {
  title: string
  school: string
  years: string
  grade: string
}

export interface SkillGroup {
  name: string
  items: string
}

export interface Content {
  meta: { title: string; description: string }
  nav: {
    work: string
    experience: string
    skills: string
    contact: string
    menu: string
    close: string
    switchLang: string
    switchLangLabel: string
    themeToDark: string
    themeToLight: string
    skip: string
  }
  hero: {
    name: string
    role: string
    intro: string
    available: string
    email: string
    cv: string
  }
  board: {
    title: string
    clock: string
    columns: { year: string; project: string; stack: string; role: string; status: string }
    rows: BoardRow[]
  }
  work: {
    title: string
    intro: string
    openFull: string
    cases: CaseStudy[]
    earlierTitle: string
    earlier: EarlierProject[]
    codeLink: string
  }
  experience: {
    title: string
    jobs: Job[]
    educationTitle: string
    degrees: Degree[]
    certificationsTitle: string
    certifications: string
    awardTitle: string
    award: { text: string; link: Link }
    volunteeringTitle: string
    volunteering: { text: string; link: Link }
    referencesTitle: string
    references: { name: string; title: string }[]
    referencesNote: string
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  contact: {
    title: string
    text: string
    email: string
    github: string
    linkedin: string
    cv: string
  }
  footer: {
    rights: string
    source: string
  }
}
