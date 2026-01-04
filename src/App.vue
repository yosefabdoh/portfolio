<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Language state
const currentLang = ref<'en' | 'ar'>('en')
const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'en' ? 'ar' : 'en'
}

// Theme state
const theme = ref<'light' | 'dark'>('dark')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  // Apply theme to document
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Initialize theme on mount
onMounted(() => {
  // Apply initial dark mode
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  }
})

// Menu state
const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

// Scroll state for navbar
const isScrolled = ref(false)
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
}

// Translations
const translations = {
  en: {
    nav: {
      about: 'About',
      proficiencies: 'Proficiencies',
      work: 'Work',
      education: 'Education',
      projects: 'Projects',
      references: 'References',
      awards: 'Awards',
      volunteering: 'Volunteering',
      contact: 'Contact',
    },
    hero: {
      name: 'Yousef',
      nameHighlight: 'Abdo',
      tagline: 'Full-Stack Developer based in Cairo with 10+ years of experience.',
      openToWork: 'Open to work.',
      contactBtn: 'Contact Me',
      viewWorkBtn: 'View Work',
    },
    sections: {
      proficiencies: 'Proficiencies',
      work: 'Work Experience',
      education: 'Education',
      projects: 'Selected Projects',
      references: 'References',
      awards: 'Awards',
      volunteering: 'Volunteering',
      contact: 'Get in Touch',
    },
    proficiencies: {
      categories: {
        skills: 'Skills',
        tools: 'Tools & Systems',
        techStack: 'Tech Stack & Certifications',
        languages: 'Languages',
      },
      skills: [
        'Technical Support',
        'Systems Administration',
        'Cloud Management',
        'Network Infrastructure',
        'Endpoint Security',
        'Troubleshooting',
        'Remote Support',
        'UI/UX Design',
        'Front-end Development',
      ],
      tools: [
        '3CX Telephony',
        'Chameleon ERP',
        'Microsoft 365',
        'Sophos Endpoint Security',
        'BioTime Attendance',
        'Vultr Cloud',
        'VS Code',
        'Figma',
      ],
      techStack: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'Vue.js',
        'CompTIA A+',
        'Cisco CCNA',
        'ICDL',
      ],
      languagesList: ['English (Fluent)', 'Arabic (Native)'],
    },
    work: {
      current: 'Current',
      jobs: [
        {
          title: 'Technical Support Specialist',
          company: 'Fast & Accurate Logistics',
          location: 'Cairo',
          years: '2024 – Present',
          description:
            'Delivered technical support across Egypt & Saudi Arabia; administered 3CX telephony, Chameleon ERP, Microsoft 365; managed Sophos endpoint security and BioTime attendance systems; produced executive reports and supervised social media deliverables.',
        },
        {
          title: 'IT Support / Consultant',
          company: 'Servicebaseye, Benefits Group',
          location: 'Cairo',
          years: '2020 – 2024',
          description:
            'Web platform maintenance, training, IT consultancy and project work for logistics and consulting clients.',
        },
        {
          title: 'UI/UX and Front-end Trainer',
          company: 'Modern Technology College (MTC)',
          location: "Sana'a, Yemen",
          years: '2019 - 2022',
          description:
            'Instructed students in HTML, CSS, JavaScript, and modern front-end frameworks • Created hands-on projects to reinforce UI/UX principles and coding practices • Mentored students in user-centered design methodologies and best practices',
        },
        {
          title: 'Programming Projects Supervisor',
          company: "Sana'a Community College (SCC)",
          location: "Sana'a, Yemen",
          years: '2018 - 2022',
          description:
            'Led student programming teams, overseeing projects from conception to completion • Implemented agile methodologies to improve project efficiency • Coordinated with faculty to ensure project relevance and educational value',
        },
      ],
    },
    education: {
      degrees: [
        {
          degree: "Bachelor's Degree in Computer Programming",
          school: "Sana'a Community College (SCC)",
          location: "Sana'a, Yemen",
          years: 'March 2018 - July 2019',
          grade: 'GPA: 3.5',
          description:
            "I hold a Bachelor's degree in Computer Programming from Sana'a Community College, where I strengthened my software development skills and problem-solving abilities.",
        },
        {
          degree: 'High Diploma in Computer Programming Technology',
          school: "Sana'a Community College (SCC)",
          location: "Sana'a, Yemen",
          years: '2015 - 2018',
          grade: '83.28%',
          description:
            'I earned a High Diploma in Computer Programming Technology, laying a solid foundation in coding and technology systems.',
        },
      ],
    },
    projects: {
      list: [
        {
          name: 'Servicebaseye',
          subtitle: 'Logistics Sites',
        },
        {
          name: 'ProjectsPortal',
          subtitle: 'Student/Company Platform',
        },
      ],
    },
    references: {
      testimonial: '"Highly recommended professional with excellent technical skills."',
      list: [
        {
          name: 'Mubark Saif',
          title: 'Academic Advisor and Professor',
          org: "Sana'a Community College",
        },
        {
          name: 'D. Khalid ALBuraihy',
          title: 'Head of Management Information Systems Department',
          org: 'Queen Arwa University',
        },
      ],
    },
    awards: {
      list: [
        {
          title: 'Winner of Development Idea',
          org: "TEDxSana'a",
          date: '2020',
          description:
            "Winner of Development ideas competition for sponsors | Baader | TEDxSana'a | It's Time 2020",
          linkText: 'Watch on YouTube',
        },
      ],
    },
    volunteering: {
      list: [
        {
          role: 'Volunteer Member',
          org: 'VHO - Volunteer Hub Organization',
          description:
            'Active member contributing to community development and organizational initiatives.',
          linkText: 'Visit Website',
        },
      ],
    },
    contact: {
      description:
        "I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      emailBtn: 'Email Me',
      githubBtn: 'GitHub',
      linkedinBtn: 'LinkedIn',
    },
    footer: {
      copyright: 'Yousef Abdo. All rights reserved.',
      crafted: 'Crafted with Vue, Tailwind & Motion.',
    },
  },
  ar: {
    nav: {
      about: 'نبذة',
      proficiencies: 'المهارات',
      work: 'الخبرات',
      education: 'التعليم',
      projects: 'المشاريع',
      references: 'التوصيات',
      awards: 'الجوائز',
      volunteering: 'التطوع',
      contact: 'التواصل',
    },
    hero: {
      name: 'يوسف',
      nameHighlight: 'عبده',
      tagline: 'مطور برمجيات متكامل مقيم في القاهرة مع أكثر من 10 سنوات من الخبرة.',
      openToWork: 'متاح للعمل.',
      contactBtn: 'تواصل معي',
      viewWorkBtn: 'عرض الأعمال',
    },
    sections: {
      proficiencies: 'المهارات والكفاءات',
      work: 'الخبرات العملية',
      education: 'المؤهلات الأكاديمية',
      projects: 'مشاريع مختارة',
      references: 'التوصيات',
      awards: 'الجوائز والتكريمات',
      volunteering: 'الأعمال التطوعية',
      contact: 'تواصل معي',
    },
    proficiencies: {
      categories: {
        skills: 'المهارات',
        tools: 'الأدوات والأنظمة',
        techStack: 'التقنيات والشهادات',
        languages: 'اللغات',
      },
      skills: [
        'الدعم الفني',
        'إدارة الأنظمة',
        'إدارة السحابة',
        'البنية التحتية للشبكات',
        'أمن نقاط النهاية',
        'حل المشكلات التقنية',
        'الدعم عن بُعد',
        'تصميم واجهات المستخدم',
        'تطوير الواجهات الأمامية',
      ],
      tools: [
        'نظام 3CX الهاتفي',
        'نظام Chameleon ERP',
        'Microsoft 365',
        'Sophos لأمن نقاط النهاية',
        'نظام BioTime للحضور',
        'Vultr السحابية',
        'VS Code',
        'Figma',
      ],
      techStack: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'Vue.js',
        '+  CompTIA A',
        'Cisco CCNA',
        'ICDL',
      ],
      languagesList: ['الإنجليزية (بطلاقة)', 'العربية (اللغة الأم)'],
    },
    work: {
      current: 'الحالي',
      jobs: [
        {
          title: 'أخصائي دعم فني',
          company: 'Fast & Accurate Logistics',
          location: 'القاهرة',
          years: '2024 – حتى الآن',
          description:
            'تقديم الدعم الفني في مصر والسعودية؛ إدارة نظام 3CX الهاتفي، نظام Chameleon ERP، Microsoft 365؛ إدارة أمن نقاط النهاية Sophos وأنظمة الحضور BioTime؛ إعداد التقارير التنفيذية والإشراف على المحتوى الرقمي.',
        },
        {
          title: 'دعم تقنية المعلومات / استشاري',
          company: 'Servicebaseye, Benefits Group',
          location: 'القاهرة',
          years: '2020 – 2024',
          description:
            'صيانة المنصات الإلكترونية، التدريب، الاستشارات التقنية والعمل على المشاريع لعملاء اللوجستيات والاستشارات.',
        },
        {
          title: 'مدرب تصميم واجهات المستخدم والتطوير الأمامي',
          company: 'كلية التقنية الحديثة (MTC)',
          location: 'صنعاء، اليمن',
          years: '2019 - 2022',
          description:
            'تدريس الطلاب HTML وCSS وJavaScript وأطر العمل الحديثة للواجهات الأمامية • إنشاء مشاريع عملية لتعزيز مبادئ تصميم واجهات المستخدم وممارسات البرمجة • توجيه الطلاب في منهجيات التصميم المتمحورة حول المستخدم وأفضل الممارسات',
        },
        {
          title: 'مشرف مشاريع البرمجة',
          company: 'كلية المجتمع بصنعاء (SCC)',
          location: 'صنعاء، اليمن',
          years: '2018 - 2022',
          description:
            'قيادة فرق البرمجة الطلابية، والإشراف على المشاريع من البداية إلى النهاية • تطبيق منهجيات أجايل لتحسين كفاءة المشاريع • التنسيق مع أعضاء هيئة التدريس لضمان ملاءمة المشاريع وقيمتها التعليمية',
        },
      ],
    },
    education: {
      degrees: [
        {
          degree: 'بكالوريوس في برمجة الحاسوب',
          school: 'كلية المجتمع بصنعاء (SCC)',
          location: 'صنعاء، اليمن',
          years: 'مارس 2018 - يوليو 2019',
          grade: 'المعدل: 3.5',
          description:
            'حصلت على درجة البكالوريوس في برمجة الحاسوب من كلية المجتمع بصنعاء، حيث عززت مهاراتي في تطوير البرمجيات وحل المشكلات.',
        },
        {
          degree: 'دبلوم عالي في تقنية برمجة الحاسوب',
          school: 'كلية المجتمع بصنعاء (SCC)',
          location: 'صنعاء، اليمن',
          years: '2015 - 2018',
          grade: '83.28%',
          description:
            'حصلت على دبلوم عالي في تقنية برمجة الحاسوب، مما أرسى أساسًا متينًا في البرمجة وأنظمة التكنولوجيا.',
        },
      ],
    },
    projects: {
      list: [
        {
          name: 'Servicebaseye',
          subtitle: 'مواقع لوجستية',
        },
        {
          name: 'ProjectsPortal',
          subtitle: 'منصة طلاب/شركات',
        },
      ],
    },
    references: {
      testimonial: '"محترف موصى به بشدة مع مهارات تقنية ممتازة."',
      list: [
        {
          name: 'مبارك سيف',
          title: 'مستشار أكاديمي وأستاذ',
          org: 'كلية المجتمع بصنعاء',
        },
        {
          name: 'د. خالد البريهي',
          title: 'رئيس قسم نظم المعلومات الإدارية',
          org: 'جامعة الملكة أروى',
        },
      ],
    },
    awards: {
      list: [
        {
          title: 'الفائز بفكرة تطويرية',
          org: "TEDxSana'a",
          date: '2020',
          description:
            "الفائز بمسابقة الأفكار التطويرية للرعاة | Baader | TEDxSana'a | It's Time 2020",
          linkText: 'شاهد على يوتيوب',
        },
      ],
    },
    volunteering: {
      list: [
        {
          role: 'عضو متطوع',
          org: 'VHO - منظمة مركز التطوع',
          description: 'عضو نشط يساهم في التنمية المجتمعية والمبادرات التنظيمية.',
          linkText: 'زيارة الموقع',
        },
      ],
    },
    contact: {
      description:
        'أنا متاح حاليًا لفرص عمل جديدة. سواء كان لديك سؤال أو تريد فقط أن تقول مرحبًا، سأبذل قصارى جهدي للرد عليك!',
      emailBtn: 'راسلني',
      githubBtn: 'GitHub',
      linkedinBtn: 'LinkedIn',
    },
    footer: {
      copyright: 'يوسف عبده. جميع الحقوق محفوظة.',
      crafted: 'صُنع بـ Vue و Tailwind و Motion.',
    },
  },
}

// Computed properties
const t = computed(() => translations[currentLang.value])
const isRTL = computed(() => currentLang.value === 'ar')

// Navigation links
const navLinks = computed(() => [
  { text: t.value.nav.about, href: '#about' },
  { text: t.value.nav.proficiencies, href: '#proficiencies' },
  { text: t.value.nav.work, href: '#work' },
  { text: t.value.nav.education, href: '#education' },
  { text: t.value.nav.projects, href: '#projects' },
  { text: t.value.nav.references, href: '#references' },
  { text: t.value.nav.awards, href: '#awards' },
  { text: t.value.nav.volunteering, href: '#volunteering' },
  { text: t.value.nav.contact, href: '#contact' },
])

// Computed data using translations
const proficiencies = computed(() => ({
  [t.value.proficiencies.categories.skills]: t.value.proficiencies.skills,
  [t.value.proficiencies.categories.tools]: t.value.proficiencies.tools,
  [t.value.proficiencies.categories.techStack]: t.value.proficiencies.techStack,
  [t.value.proficiencies.categories.languages]: t.value.proficiencies.languagesList,
}))

const experiences = computed(() =>
  t.value.work.jobs.map((job, index) => ({
    ...job,
    current: index === 0,
  })),
)

const education = computed(() => t.value.education.degrees)
const projects = computed(() => t.value.projects.list)
const references = computed(() => t.value.references.list)

const awards = computed(() =>
  t.value.awards.list.map((award) => ({
    ...award,
    link: 'https://www.youtube.com/watch?v=zS1omDbnWkM',
  })),
)

const volunteering = computed(() =>
  t.value.volunteering.list.map((vol) => ({
    ...vol,
    link: 'https://www.vho-volunteerhub.org/',
  })),
)

const scrollTo = (href: string) => {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
    menuOpen.value = false
  }
}
</script>

<template>
  <div
    :dir="isRTL ? 'rtl' : 'ltr'"
    :class="theme"
    class="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 relative overflow-hidden"
  >
    <!-- Animated Background Gradients -->
    <div
      class="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-background"
    ></div>
    <div class="animated-gradient fixed inset-0 -z-10 opacity-10 dark:opacity-30"></div>

    <!-- Floating Geometric Shapes -->
    <div class="geometric-shapes fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="grid-pattern fixed inset-0 -z-10 opacity-[0.01] dark:opacity-[0.02]"></div>

    <!-- Navbar -->
    <nav :class="[isScrolled ? 'nav-scrolled' : '', 'modern-nav']">
      <div class="flex h-12 items-center justify-between">
        <a
          href="#"
          class="flex items-center gap-2 font-black text-lg tracking-tighter hover:opacity-80 transition-opacity"
        >
          <div
            class="hidden xs:flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs"
          >
            YA
          </div>
          <span class="gradient-text">Yousef Abdo</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.text"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {{ link.text }}
          </a>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- Language Toggle Button -->
          <button
            @click="toggleLanguage"
            class="flex items-center justify-center gap-1.5 p-2 px-3 rounded-xl border border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-sm text-xs font-bold"
            :aria-label="currentLang === 'en' ? 'Switch to Arabic' : 'Switch to English'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path>
            </svg>
            <span>{{ currentLang === 'en' ? 'AR' : 'EN' }}</span>
          </button>

          <!-- Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="flex items-center justify-center p-2 rounded-xl border border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 shadow-sm"
            :aria-label="theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'"
          >
            <!-- Sun Icon (Light Mode) -->
            <svg
              v-if="theme === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-amber-500"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <!-- Moon Icon (Dark Mode) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-amber-500"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Toggles -->
        <div class="lg:hidden flex items-center gap-2">
          <!-- Language Toggle Button (Mobile) -->
          <button
            @click="toggleLanguage"
            class="flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            :aria-label="currentLang === 'en' ? 'Switch to Arabic' : 'Switch to English'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path>
            </svg>
            <span>{{ currentLang === 'en' ? 'AR' : 'EN' }}</span>
          </button>

          <!-- Theme Toggle Button (Mobile) -->
          <button
            @click="toggleTheme"
            class="flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            :aria-label="theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'"
          >
            <!-- Sun Icon (Light Mode) -->
            <svg
              v-if="theme === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-amber-500"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <!-- Moon Icon (Dark Mode) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-amber-500"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" class="p-2 text-muted-foreground hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-10 scale-95 opacity-0"
        enter-to-class="transform translate-y-0 scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 scale-100 opacity-100"
        leave-to-class="transform -translate-y-10 scale-95 opacity-0"
      >
        <div
          v-if="menuOpen"
          class="absolute top-full left-0 right-0 mt-4 rounded-4xl mobile-menu-glass shadow-2xl p-4 lg:hidden"
        >
          <div class="flex flex-col gap-2">
            <a
              v-for="link in navLinks"
              :key="link.text"
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="block rounded-3xl px-6 py-4 text-base font-bold text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all active:scale-[0.98]"
            >
              {{ link.text }}
            </a>
          </div>
        </div>
      </transition>
    </nav>

    <main class="container px-4 sm:px-8 py-24 sm:py-32">
      <!-- Hero Section -->
      <section id="about" class="mb-32 flex flex-col items-center justify-center text-center">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
          class="mb-6 rounded-2xl p-4 glass-card shadow-2xl shadow-primary/10"
        >
          <div
            class="flex h-24 w-24 items-center justify-center rounded-xl bg-primary text-primary-foreground text-4xl font-black shadow-inner"
          >
            YA
          </div>
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          class="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
        >
          {{ t.hero.name }}
          <span class="gradient-text drop-shadow-sm">{{ t.hero.nameHighlight }}</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
          class="max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {{ t.hero.tagline }}
          <span class="block mt-2">{{ t.hero.openToWork }}</span>
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 600 } }"
          class="mt-10 flex gap-4"
        >
          <button
            @click="scrollTo('#contact')"
            class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {{ t.hero.contactBtn }}
          </button>
          <button
            @click="scrollTo('#work')"
            class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {{ t.hero.viewWorkBtn }}
          </button>
        </div>
      </section>

      <!-- Proficiencies -->
      <section id="proficiencies" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.proficiencies }}
        </h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(items, category) in proficiencies"
            :key="category"
            class="glass-card card-hover p-8 rounded-2xl"
            v-motion-slide-visible-once-bottom
          >
            <h3 class="mb-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              {{ category }}
            </h3>
            <ul class="space-y-2">
              <li v-for="item in items" :key="item" class="flex items-center text-sm font-medium">
                <span class="h-1.5 w-1.5 rounded-full bg-amber-500 me-2"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section id="work" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.work }}
        </h2>
        <div
          class="relative space-y-12 border-s-2 border-primary/20 ms-4 md:ms-8 ps-10 md:ps-16 py-4"
        >
          <div
            v-for="(job, index) in experiences"
            :key="index"
            class="relative"
            v-motion-slide-visible-once-bottom
          >
            <div
              class="absolute -start-[41px] md:-start-[59px] top-1 h-5 w-5 rounded-full border-4 border-background bg-amber-500"
            ></div>
            <div class="mb-1 flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <h3 class="text-xl font-bold">{{ job.title }}</h3>
              <span
                v-if="job.current"
                class="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
              >
                {{ t.work.current }}
              </span>
            </div>
            <div class="mb-4 text-sm text-muted-foreground">
              {{ job.company }} • {{ job.years }} • {{ job.location }}
            </div>
            <p class="text-muted-foreground leading-relaxed">
              {{ job.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section id="education" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.education }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="glass-card card-hover p-8 rounded-2xl"
            v-motion-slide-visible-once-bottom
          >
            <div class="mb-2 flex items-center justify-between">
              <span class="text-sm font-medium text-primary">{{ edu.years }}</span>
              <span
                class="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                v-if="edu.grade"
                >{{ edu.grade }}</span
              >
            </div>
            <h3 class="mb-1 text-xl font-bold">{{ edu.degree }}</h3>
            <p class="mb-4 text-sm text-muted-foreground">{{ edu.school }} • {{ edu.location }}</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ edu.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.projects }}
        </h2>
        <div class="grid gap-6 sm:grid-cols-2">
          <div
            v-for="project in projects"
            :key="project.name"
            class="glass-card card-hover p-10 rounded-2xl group relative overflow-hidden"
            v-motion-slide-visible-once-bottom
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-muted-foreground">{{ project.subtitle }}</p>
          </div>
        </div>
      </section>

      <!-- References -->
      <section id="references" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.references }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(ref, index) in references"
            :key="index"
            class="glass-card card-hover p-8 rounded-2xl"
          >
            <div class="mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z" />
              </svg>
            </div>
            <p class="mb-4 text-base italic text-muted-foreground">
              {{ t.references.testimonial }}
            </p>
            <div class="flex items-center gap-3">
              <div
                class="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold"
              >
                {{ ref.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold">{{ ref.name }}</h4>
                <p class="text-xs text-muted-foreground">{{ ref.title }}</p>
                <p class="text-xs text-muted-foreground">{{ ref.org }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Awards -->
      <section id="awards" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.awards }}
        </h2>
        <div class="grid gap-6 md:grid-cols-1">
          <div
            v-for="(award, index) in awards"
            :key="index"
            class="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40"
            v-motion-slide-visible-once-bottom
          >
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 class="text-xl font-bold">{{ award.title }}</h3>
              <span
                class="mt-2 sm:mt-0 rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {{ award.date }}
              </span>
            </div>
            <p class="mb-1 text-sm font-semibold text-primary">{{ award.org }}</p>
            <p class="mb-4 text-muted-foreground">{{ award.description }}</p>
            <a
              :href="award.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              {{ award.linkText }}
            </a>
          </div>
        </div>
      </section>

      <!-- Volunteering -->
      <section id="volunteering" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {{ t.sections.volunteering }}
        </h2>
        <div class="grid gap-6 md:grid-cols-1">
          <div
            v-for="(vol, index) in volunteering"
            :key="index"
            class="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40"
            v-motion-slide-visible-once-bottom
          >
            <h3 class="text-xl font-bold mb-1">{{ vol.role }}</h3>
            <p class="mb-2 text-sm font-semibold text-primary">{{ vol.org }}</p>
            <p class="mb-4 text-muted-foreground">{{ vol.description }}</p>
            <a
              :href="vol.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
              {{ vol.linkText }}
            </a>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="scroll-mt-24 text-center">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {{ t.sections.contact }}
        </h2>
        <p class="mx-auto mb-12 max-w-lg text-muted-foreground">
          {{ t.contact.description }}
        </p>
        <div class="flex flex-wrap justify-center gap-4" v-motion-slide-visible-once-bottom>
          <a
            href="mailto:contact@yosefabdoh.com"
            class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {{ t.contact.emailBtn }}
          </a>
          <a
            href="https://github.com/yosefabdoh"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {{ t.contact.githubBtn }}
          </a>
          <a
            href="https://linkedin.com/in/yosefabdoh"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {{ t.contact.linkedinBtn }}
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-border/40 py-8">
      <div
        class="container flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left text-sm text-muted-foreground"
      >
        <p>© {{ new Date().getFullYear() }} {{ t.footer.copyright }}</p>
        <p>{{ t.footer.crafted }}</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Arabic Typography and RTL Support */
[dir='rtl'] {
  font-family: 'Cairo', sans-serif;
}

[dir='rtl'] * {
  font-family: 'Cairo', sans-serif;
}

/* Smooth Direction Transition */
[dir] {
  transition: all 0.3s ease;
}

/* Gradient Text Effect */
html.dark .gradient-text {
  background-image: linear-gradient(to right, hsl(var(--primary)), #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* Animated Background Gradient */
.animated-gradient {
  background: linear-gradient(
    135deg,
    rgba(20, 184, 166, 0.1) 0%,
    rgba(59, 130, 246, 0.15) 25%,
    rgba(139, 92, 246, 0.1) 50%,
    rgba(236, 72, 153, 0.15) 75%,
    rgba(20, 184, 166, 0.1) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Floating Geometric Shapes */
.geometric-shapes {
  perspective: 1000px;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
  top: 10%;
  left: 10%;
  animation: float1 20s infinite;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.25), rgba(59, 130, 246, 0.25));
  bottom: 15%;
  right: 10%;
  animation: float2 25s infinite;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2));
  top: 50%;
  right: 20%;
  animation: float3 18s infinite;
}

.shape-4 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
  bottom: 30%;
  left: 15%;
  animation: float4 22s infinite;
}

.shape-5 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(20, 184, 166, 0.25));
  top: 70%;
  left: 50%;
  animation: float5 16s infinite;
}

@keyframes float1 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-40px, -25px) rotate(-120deg);
  }
  66% {
    transform: translate(25px, 30px) rotate(-240deg);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, 40px) scale(1.1);
  }
}

@keyframes float4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  50% {
    transform: translate(35px, -35px) scale(0.9) rotate(180deg);
  }
}

@keyframes float5 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(-25px, -40px);
  }
  66% {
    transform: translate(40px, 25px);
  }
}

/* Grid Pattern */
.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Enhanced Card Styling with Glass Morphism */
.bg-card {
  background: rgba(var(--card-rgb, 24, 24, 27), 0.6) !important;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Enhanced Navbar */
nav {
  background: rgba(var(--background-rgb, 9, 9, 11), 0.8) !important;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

/* Enhanced Button Hover Effects */
button,
a[class*='inline-flex'] {
  position: relative;
  overflow: hidden;
}

button::before,
a[class*='inline-flex']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

button:hover::before,
a[class*='inline-flex']:hover::before {
  width: 300px;
  height: 300px;
}

/* Enhanced Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.02em;
  line-height: 1.2;
}

/* Improved Link Hover Effects */
a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover {
  transform: translateY(-1px);
}

/* Enhanced Section Spacing */
section {
  position: relative;
}

/* Card Hover Glow Effect */
.rounded-xl:hover {
  box-shadow: 0 0 30px rgba(var(--primary-rgb, 59, 130, 246), 0.15);
}

/* Smooth Transitions */
* {
  transition-property:
    background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Performance Optimizations */
.animated-gradient,
.shape {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Enhanced Focus States */
*:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
  border-radius: 4px;
}

/* Improved Text Selection */
::selection {
  background: hsl(var(--primary) / 0.3);
  color: hsl(var(--foreground));
}

/* Enhanced Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.3);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .shape {
    filter: blur(40px);
    opacity: 0.3;
  }

  .shape-1,
  .shape-4 {
    width: 200px;
    height: 200px;
  }

  .shape-2 {
    width: 250px;
    height: 250px;
  }

  .shape-3,
  .shape-5 {
    width: 150px;
    height: 150px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .animated-gradient,
  .shape {
    animation: none !important;
  }

  html {
    scroll-behavior: auto;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .bg-card {
    border: 2px solid hsl(var(--foreground));
  }

  button,
  a[class*='inline-flex'] {
    border: 2px solid currentColor;
  }
}
</style>
