import { defineStore } from 'pinia'
import { ref, computed, shallowRef, triggerRef, readonly } from 'vue'
import { translations, type Language } from '@/locales/translations'

// Cache for computed translations to avoid recalculation
const translationCache = new Map<Language, any>()
let scrollRAF: number | null = null

export const useAppStore = defineStore('app', () => {
  // Use shallowRef for better performance with large objects
  const currentLang = shallowRef<Language>('en')
  const theme = shallowRef<'light' | 'dark'>('dark')
  const menuOpen = ref(false)
  const isScrolled = ref(false)

  // Memoized translations with caching
  const getCachedTranslation = (lang: Language) => {
    if (!translationCache.has(lang)) {
      const translation = translations[lang]
      // Pre-compute commonly accessed values
      const cached = {
        ...translation,
        _navLinks: [
          { text: translation.nav.about, href: '#about' },
          { text: translation.nav.proficiencies, href: '#proficiencies' },
          { text: translation.nav.work, href: '#work' },
          { text: translation.nav.education, href: '#education' },
          { text: translation.nav.projects, href: '#projects' },
          { text: translation.nav.references, href: '#references' },
          { text: translation.nav.awards, href: '#awards' },
          { text: translation.nav.volunteering, href: '#volunteering' },
          { text: translation.nav.contact, href: '#contact' },
        ],
        _proficiencies: {
          [translation.proficiencies.categories.skills]: translation.proficiencies.skills,
          [translation.proficiencies.categories.tools]: translation.proficiencies.tools,
          [translation.proficiencies.categories.techStack]: translation.proficiencies.techStack,
          [translation.proficiencies.categories.languages]: translation.proficiencies.languagesList,
        },
        _experiences: translation.work.jobs.map((job, index) => ({
          ...job,
          current: index === 0,
        })),
        _awards: translation.awards.list.map((award) => ({
          ...award,
          link: 'https://www.youtube.com/watch?v=zS1omDbnWkM',
        })),
        _volunteering: translation.volunteering.list.map((vol) => ({
          ...vol,
          link: 'https://www.vho-volunteerhub.org/',
        })),
      }
      translationCache.set(lang, cached)
    }
    return translationCache.get(lang)!
  }

  // Computed properties with optimized dependencies
  const t = computed(() => getCachedTranslation(currentLang.value))
  const isRTL = computed(() => currentLang.value === 'ar')

  // Use readonly for navigation links to prevent unnecessary reactivity
  const navLinks = computed(() => t.value._navLinks)
  const proficiencies = computed(() => t.value._proficiencies)
  const experiences = computed(() => t.value._experiences)
  const education = computed(() => t.value.education.degrees)
  const projects = computed(() => t.value.projects.list)
  const references = computed(() => t.value.references.list)
  const awards = computed(() => t.value._awards)
  const volunteering = computed(() => t.value._volunteering)

  // Optimized actions
  const toggleLanguage = () => {
    const newLang = currentLang.value === 'en' ? 'ar' : 'en'
    currentLang.value = newLang

    // Update document direction
    if (typeof document !== 'undefined') {
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = newLang
    }
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = newTheme

    // Apply theme to document
    if (typeof document !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }

  const scrollTo = (href: string) => {
    if (typeof document === 'undefined') return

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      menuOpen.value = false
    }
  }

  const initializeTheme = () => {
    if (typeof document === 'undefined') return

    // Apply initial dark mode
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    }

    // Set initial direction
    document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLang.value
  }

  // Optimized scroll listener with RAF
  const initializeScrollListener = () => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      if (scrollRAF) return

      scrollRAF = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50
        if (isScrolled.value !== scrolled) {
          isScrolled.value = scrolled
        }
        scrollRAF = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollRAF) {
        cancelAnimationFrame(scrollRAF)
        scrollRAF = null
      }
    }
  }

  // Performance monitoring utilities
  const clearCache = () => {
    translationCache.clear()
  }

  // Return readonly values where appropriate
  return {
    // State
    currentLang: readonly(currentLang),
    theme: readonly(theme),
    menuOpen,
    isScrolled,

    // Computed (already readonly)
    t,
    isRTL,
    navLinks,
    proficiencies,
    experiences,
    education,
    projects,
    references,
    awards,
    volunteering,

    // Actions
    toggleLanguage,
    toggleTheme,
    toggleMenu,
    scrollTo,
    initializeTheme,
    initializeScrollListener,

    // Utilities
    clearCache,
  }
})
