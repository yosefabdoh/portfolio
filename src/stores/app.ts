import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { translations, type Language } from '@/locales/translations'

type Theme = 'light' | 'dark'

const LANG_KEY = 'lang'
const THEME_KEY = 'darkMode' // read by the inline script in index.html before first paint

function read(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* private mode: the choice lasts for this visit only */
  }
}

function initialLang(): Language {
  const saved = read(LANG_KEY)
  if (saved === 'ar' || saved === 'en') return saved
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ar'))
    return 'ar'
  return 'en'
}

function initialTheme(): Theme {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
    return 'dark'
  return 'light'
}

export const useAppStore = defineStore('app', () => {
  const lang = ref<Language>(initialLang())
  const theme = ref<Theme>(initialTheme())
  const menuOpen = ref(false)

  const t = computed(() => translations[lang.value])
  const isRTL = computed(() => lang.value === 'ar')

  function applyDocument() {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.lang = lang.value
    root.dir = isRTL.value ? 'rtl' : 'ltr'
    root.classList.toggle('dark', theme.value === 'dark')
    document.title = t.value.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.value.meta.description)
  }

  function toggleLanguage() {
    lang.value = lang.value === 'en' ? 'ar' : 'en'
    write(LANG_KEY, lang.value)
    applyDocument()
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    write(THEME_KEY, String(theme.value === 'dark'))
    applyDocument()
  }

  function setMenu(open: boolean) {
    menuOpen.value = open
  }

  return { lang, theme, menuOpen, t, isRTL, applyDocument, toggleLanguage, toggleTheme, setMenu }
})
