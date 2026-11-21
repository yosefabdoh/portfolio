import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Yousef Abdo, full-stack developer in Cairo',
    description:
      'Yousef Abdo builds bilingual Arabic and English business software with .NET, PostgreSQL, React and Python. CV, project screens and contact.',
  },
  nav: {
    work: 'Work',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close menu',
    switchLang: 'عربي',
    switchLangLabel: 'اعرض الصفحة بالعربية',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    skip: 'Skip to content',
  },
  hero: {
    name: 'Yousef Abdo',
    role: 'Full-stack developer in Cairo',
    intro:
      'I build business software that works in Arabic and English, from the .NET API and PostgreSQL schema to the React screens people use all day. Before that, years of IT support across Egypt, Saudi Arabia and Yemen.',
    available: 'Open to new roles',
    email: 'Email me',
    cv: 'Download CV',
  },
  board: {
    title: 'Projects and roles, 2018 to 2026',
    clock: 'Cairo',
    columns: {
      year: 'Year',
      project: 'Project',
      stack: 'Built with',
      role: 'Role',
      status: 'Status',
    },
    rows: [
      {
        year: '2026',
        project: 'Ayma ERP',
        stack: '.NET, React, PostgreSQL',
        role: 'Main developer',
        status: 'In development',
        tone: 'wait',
        href: '#ayma',
      },
      {
        year: '2026',
        project: 'GiftSniper',
        stack: 'Python, Telethon',
        role: 'Main developer',
        status: 'Running',
        tone: 'go',
        href: '#giftsniper',
      },
      {
        year: '2024',
        project: 'Fast & Accurate Logistics',
        stack: '3CX, Microsoft 365, Sophos',
        role: 'Technical support specialist',
        status: 'Current job',
        tone: 'go',
        href: '#experience',
      },
      {
        year: '2020',
        project: 'Service Base',
        stack: 'Website, IT consulting',
        role: 'IT consultant, web developer',
        status: 'Site live',
        tone: 'go',
        href: '#servicebase',
      },
      {
        year: '2019',
        project: 'Modern Technology College',
        stack: 'HTML, CSS, JavaScript',
        role: 'Front-end trainer',
        status: 'Completed',
        tone: 'done',
        href: '#experience',
      },
      {
        year: '2018',
        project: "Sana'a Community College",
        stack: 'Student software projects',
        role: 'Projects supervisor',
        status: 'Completed',
        tone: 'done',
        href: '#experience',
      },
    ],
  },
  work: {
    title: 'Selected work',
    intro:
      'Ayma and GiftSniper live in private repositories. The screens below come from local runs on demo data, and I am happy to walk you through the code.',
    openFull: 'Open full-size screenshot',
    cases: [
      {
        id: 'ayma',
        name: 'Ayma ERP',
        summary: 'Accounting and ERP for small and mid-size companies in Saudi Arabia.',
        body: 'A multi-tenant system covering the general ledger, sales, purchasing, inventory, treasury and financial reports, in Arabic and English on every screen. I designed the architecture and build the API, the database and the frontend.',
        facts: [
          {
            label: 'Stack',
            value:
              '.NET 10, EF Core, PostgreSQL, React 19, TypeScript, TanStack Query, Tailwind CSS',
          },
          { label: 'Size', value: '60 API controllers and 18 frontend modules' },
          {
            label: 'Tests',
            value:
              'About 830 backend test cases in xUnit, 100 frontend test files in Vitest and Playwright',
          },
          {
            label: 'Now',
            value:
              'ZATCA e-invoicing for the Saudi tax authority: hash chain, clearance and invoice payloads',
          },
        ],
        shots: [
          {
            file: 'ayma-dashboard',
            tab: 'Dashboard',
            alt: 'Ayma dashboard in English with revenue, expenses, net profit, a six-month cash flow chart and overdue receivables',
          },
          {
            file: 'ayma-dashboard-ar',
            tab: 'العربية',
            alt: 'The same Ayma dashboard in Arabic with the layout mirrored right to left',
            dir: 'rtl',
          },
          {
            file: 'ayma-trial-balance',
            tab: 'Trial balance',
            alt: 'Ayma trial balance report listing twelve accounts with matching debit and credit totals',
          },
        ],
        links: [],
        viewsLabel: 'Ayma screens',
        note: 'Local run on demo data',
      },
      {
        id: 'giftsniper',
        name: 'GiftSniper',
        summary:
          'A Telegram bot that buys resale gifts the moment a listing fits the owner’s price rules.',
        body: 'It watches marketplace channels and polls the market in parallel, reserves each listing once, and pays in Telegram Stars over MTProto. A private Arabic dashboard shows purchases, spending and the health of every session.',
        facts: [
          {
            label: 'Stack',
            value: 'Python, asyncio, Telethon, SQLite, PostgreSQL, vanilla JavaScript',
          },
          { label: 'Size', value: 'Up to 32 Telegram sessions sharing one daily spending cap' },
          { label: 'Tests', value: 'About 490 automated tests in pytest' },
          {
            label: 'Design',
            value: 'Right-to-left dashboard with light and dark themes, self-hosted Tajawal type',
          },
        ],
        shots: [
          {
            file: 'giftsniper-overview',
            tab: 'Light',
            alt: 'GiftSniper dashboard in Arabic showing gifts bought, Stars spent, success rate and the latest five purchases',
            dir: 'rtl',
          },
          {
            file: 'giftsniper-overview-dark',
            theme: 'dark',
            tab: 'Dark',
            alt: 'The GiftSniper dashboard in its dark theme',
            dir: 'rtl',
          },
        ],
        links: [],
        viewsLabel: 'GiftSniper themes',
        note: 'Local run on demo data',
      },
      {
        id: 'servicebase',
        name: 'Service Base website',
        summary: "Company site for Service Base for Logistics & Construction in Sana'a, Yemen.",
        body: 'I designed and built the site while consulting for the company: services, mission, partners, a contact form and an office map. Plain HTML, CSS and JavaScript, and it is still online.',
        facts: [
          { label: 'Stack', value: 'HTML, CSS, JavaScript, Bootstrap, Leaflet maps' },
          { label: 'Year', value: 'First version 2021, maintained since' },
        ],
        shots: [
          {
            file: 'servicebase-home',
            tab: 'Home',
            alt: 'Service Base home page with an isometric construction illustration beside the company introduction',
          },
          {
            file: 'servicebase-mission',
            tab: 'Mission',
            alt: 'Service Base mission section with illustrated steps for development and planning',
          },
        ],
        links: [
          { label: 'Visit servicebaseye.com', href: 'https://servicebaseye.com' },
          { label: 'See the code', href: 'https://github.com/yosefabdoh/ServiceBaseye' },
        ],
        viewsLabel: 'Service Base pages',
      },
    ],
    earlierTitle: 'Earlier code',
    earlier: [
      {
        name: 'ProjectPortal',
        year: '2019',
        text: 'A platform where students and companies meet around graduation projects. ASP.NET Web Forms, C#, Azure Pipelines.',
        href: 'https://github.com/yosefabdoh/ProjectPortal',
      },
      {
        name: 'CarsShop',
        year: '2019',
        text: 'Car listings with sign-up, ads and an admin panel. ASP.NET Web Forms, C#, SQL Server.',
        href: 'https://github.com/yosefabdoh/CarsShop',
      },
    ],
    codeLink: 'Code on GitHub',
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'Technical support specialist',
        company: 'Fast & Accurate Logistics',
        place: 'Cairo',
        years: '2024 to now',
        points: [
          'Support staff across offices in Egypt and Saudi Arabia, on site and remotely.',
          'Run the 3CX phone system, Chameleon ERP and Microsoft 365.',
          'Manage Sophos endpoint security and BioTime attendance devices.',
          'Prepare reports for management and oversee social media deliverables.',
        ],
      },
      {
        role: 'IT support and consultant',
        company: 'Servicebaseye, Benefits Group',
        place: 'Cairo',
        years: '2020 to 2024',
        points: [
          'Maintained the company web platforms and trained staff to use them.',
          'IT consulting and project work for logistics and consulting clients.',
        ],
      },
      {
        role: 'UI/UX and front-end trainer',
        company: 'Modern Technology College (MTC)',
        place: "Sana'a, Yemen",
        years: '2019 to 2022',
        points: [
          'Taught HTML, CSS, JavaScript and modern front-end frameworks.',
          'Built hands-on projects around UI/UX principles and clean code.',
          'Mentored students in user-centred design.',
        ],
      },
      {
        role: 'Programming projects supervisor',
        company: "Sana'a Community College (SCC)",
        place: "Sana'a, Yemen",
        years: '2018 to 2022',
        points: [
          'Led student programming teams from the first idea to a finished project.',
          'Introduced agile practices to keep projects on schedule.',
          'Worked with faculty so each project fitted the curriculum.',
        ],
      },
    ],
    educationTitle: 'Education',
    degrees: [
      {
        title: "Bachelor's degree in Computer Programming",
        school: "Sana'a Community College",
        years: '2018 to 2019',
        grade: 'GPA 3.5',
      },
      {
        title: 'Higher diploma in Computer Programming Technology',
        school: "Sana'a Community College",
        years: '2015 to 2018',
        grade: '83.28%',
      },
    ],
    certificationsTitle: 'Certifications',
    certifications: 'CompTIA A+, Cisco CCNA, ICDL',
    awardTitle: 'Award',
    award: {
      text: "Winner of the development ideas competition at TEDxSana'a “It's Time”, 2020, sponsored by Baader.",
      link: { label: 'Watch the talk', href: 'https://www.youtube.com/watch?v=zS1omDbnWkM' },
    },
    volunteeringTitle: 'Volunteering',
    volunteering: {
      text: 'Member of VHO, the Volunteer Hub Organization, working on community projects.',
      link: { label: 'Visit VHO', href: 'https://www.vho-volunteerhub.org/' },
    },
    referencesTitle: 'References',
    references: [
      { name: 'Mubark Saif', title: "Academic advisor and professor, Sana'a Community College" },
      { name: 'Dr. Khalid Al-Buraihy', title: 'Head of the MIS department, Queen Arwa University' },
    ],
    referencesNote: 'Contact details on request.',
  },
  skills: {
    title: 'Skills and tools',
    groups: [
      {
        name: 'Backend',
        items: 'C#, .NET, ASP.NET Core, EF Core, PostgreSQL, SQL Server, Python, asyncio',
      },
      {
        name: 'Frontend',
        items: 'TypeScript, React, Vue, Tailwind CSS, HTML, CSS, right-to-left layouts and i18n',
      },
      {
        name: 'Testing and delivery',
        items:
          'xUnit, Vitest, Playwright, pytest, Docker, Git, Azure Pipelines, Claude Code, Cursor',
      },
      {
        name: 'IT and infrastructure',
        items: 'Microsoft 365, 3CX, Sophos, networking (CCNA), Vultr cloud servers, remote support',
      },
      { name: 'Design', items: 'Figma, interface design for Arabic and English products' },
      { name: 'Languages', items: 'Arabic (native), English (fluent)' },
    ],
  },
  contact: {
    title: 'Contact',
    text: 'I am available for developer and IT roles. Email is the quickest way to reach me.',
    email: 'contact@yosefabdoh.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Download CV (PDF)',
  },
  footer: {
    rights: 'Yousef Abdo',
    source: 'Source on GitHub',
  },
}
