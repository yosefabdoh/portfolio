<script setup lang="ts">
import { ref } from 'vue'

// Define references and state if needed, though most is static for the clone
const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

// Navigation links
const navLinks = [
  { text: 'About', href: '#about' },
  { text: 'Proficiencies', href: '#proficiencies' },
  { text: 'Work', href: '#work' },
  { text: 'Education', href: '#education' },
  { text: 'Projects', href: '#projects' },
  { text: 'References', href: '#references' },
  { text: 'Contact', href: '#contact' },
]

// Data
const proficiencies = {
  Skills: [
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
  'Tools & Systems': [
    '3CX Telephony',
    'Chameleon ERP',
    'Microsoft 365',
    'Sophos Endpoint Security',
    'BioTime Attendance',
    'Vultr Cloud',
    'VS Code',
    'Figma',
  ],
  'Tech Stack & Certifications': [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'Vue.js',
    'CompTIA A+',
    'Cisco CCNA',
    'ICDL',
  ],
  Languages: ['English (Fluent)', 'Arabic (Native)'],
}

const experiences = [
  {
    title: 'Technical Support Specialist',
    company: 'Fast & Accurate Logistics',
    location: 'Cairo',
    years: '2024 – Present',
    current: true,
    description:
      'Delivered technical support across Egypt & Saudi Arabia; administered 3CX telephony, Chameleon ERP, Microsoft 365; managed Sophos endpoint security and BioTime attendance systems; produced executive reports and supervised social media deliverables.',
  },
  {
    title: 'IT Support / Consultant',
    company: 'Servicebaseye, Benefits Group',
    location: 'Cairo',
    years: '2020 – 2024',
    current: false,
    description:
      'Web platform maintenance, training, IT consultancy and project work for logistics and consulting clients.',
  },
  {
    title: 'UI/UX and Front-end Trainer',
    company: 'Modern Technology College (MTC)',
    location: "Sana'a, Yemen",
    years: '2019 - 2022',
    current: false,
    description:
      'Instructed students in HTML, CSS, JavaScript, and modern front-end frameworks • Created hands-on projects to reinforce UI/UX principles and coding practices • Mentored students in user-centered design methodologies and best practices',
  },
  {
    title: 'Programming Projects Supervisor',
    company: "Sana'a Community College (SCC)",
    location: "Sana'a, Yemen",
    years: '2018 - 2022',
    current: false,
    description:
      'Led student programming teams, overseeing projects from conception to completion • Implemented agile methodologies to improve project efficiency • Coordinated with faculty to ensure project relevance and educational value',
  },
]

const education = [
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
]

const projects = [
  {
    name: 'Servicebaseye',
    subtitle: 'Logistics Sites',
  },
  {
    name: 'ProjectsPortal',
    subtitle: 'Student/Company Platform',
  },
]

const references = [
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
]

const scrollTo = (href: string) => {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
    menuOpen.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div class="container flex h-16 items-center justify-between px-4 sm:px-8">
        <a href="#" class="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            YA
          </div>
          <span class="hidden sm:inline-block">Yousef Abdo</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
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

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
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

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="menuOpen" class="border-b border-border bg-background md:hidden">
          <div class="container space-y-1 py-4">
            <a
              v-for="link in navLinks"
              :key="link.text"
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="block rounded-md px-4 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-2"
        >
          <div
            class="flex h-24 w-24 items-center justify-center rounded-xl bg-background text-4xl font-bold"
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
          Yousef <span class="gradient-text">Abdo</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
          class="max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Full-Stack Developer based in Cairo with 10+ years of experience.
          <span class="block mt-2">Open to work.</span>
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
            Contact Me
          </button>
          <button
            @click="scrollTo('#work')"
            class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Work
          </button>
        </div>
      </section>

      <!-- Proficiencies -->
      <section id="proficiencies" class="mb-32 scroll-mt-24">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Proficiencies
        </h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(items, category) in proficiencies"
            :key="category"
            class="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/40"
            v-motion-slide-visible-once-bottom
          >
            <h3 class="mb-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              {{ category }}
            </h3>
            <ul class="space-y-2">
              <li v-for="item in items" :key="item" class="flex items-center text-sm font-medium">
                <span class="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
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
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Work Experience
        </h2>
        <div class="relative space-y-8 border-l border-border/60 ml-3 md:ml-6 pl-8 md:pl-12 py-2">
          <div
            v-for="(job, index) in experiences"
            :key="index"
            class="relative"
            v-motion-slide-visible-once-bottom
          >
            <div
              class="absolute -left-[41px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"
            ></div>
            <div class="mb-1 flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <h3 class="text-xl font-bold">{{ job.title }}</h3>
              <span
                v-if="job.current"
                class="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
              >
                Current
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
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Education
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/40"
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
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Selected Projects
        </h2>
        <div class="grid gap-6 sm:grid-cols-2">
          <div
            v-for="project in projects"
            :key="project.name"
            class="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            v-motion-slide-visible-once-bottom
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="bg-primary/0"
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
          class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          References
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(ref, index) in references"
            :key="index"
            class="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40"
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
              "Highly recommended professional with excellent technical skills."
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

      <!-- Contact -->
      <section id="contact" class="scroll-mt-24 text-center">
        <h2
          v-motion-slide-visible-once-bottom
          class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Get in Touch
        </h2>
        <p class="mx-auto mb-12 max-w-lg text-muted-foreground">
          I'm currently available for new opportunities. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>
        <div class="flex flex-wrap justify-center gap-4" v-motion-slide-visible-once-bottom>
          <a
            href="mailto:contact@yosefabdoh.com"
            class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Email Me
          </a>
          <a
            href="https://github.com/yosefabdoh"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yosefabdoh"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-border/40 py-8">
      <div
        class="container flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left text-sm text-muted-foreground"
      >
        <p>© {{ new Date().getFullYear() }} Yousef Abdo. All rights reserved.</p>
        <p>Crafted with Vue, Tailwind & Motion.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Utilities specific to this layout */
html.dark .gradient-text {
  background-image: linear-gradient(to right, hsl(var(--primary)), #60a5fa, #22d3ee);
}
</style>
