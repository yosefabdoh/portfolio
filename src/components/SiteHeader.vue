<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import SignIcon from './SignIcon.vue'

const store = useAppStore()
const { t, theme, menuOpen } = storeToRefs(store)

const links = computed(() => [
  { id: 'work', label: t.value.nav.work },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'contact', label: t.value.nav.contact },
])

// "You are here": the section nearest the top of the viewport lights its link.
const current = ref('')
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) current.value = entry.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  for (const id of ['top', 'work', 'experience', 'skills', 'contact']) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => observer?.disconnect())

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') store.setMenu(false)
}

watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header class="bar">
    <div class="wrap bar-inner">
      <a class="mark" href="#top" @click="store.setMenu(false)">
        <span class="mark-tile" aria-hidden="true">Y</span>
        <span class="mark-name">{{ t.hero.name }}</span>
      </a>

      <nav class="nav" :aria-label="t.nav.menu">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :aria-current="current === link.id ? 'location' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="tools">
        <button
          type="button"
          class="tool lang"
          :lang="t.nav.switchLang === 'English' ? 'en' : 'ar'"
          :aria-label="t.nav.switchLangLabel"
          @click="store.toggleLanguage()"
        >
          {{ t.nav.switchLang }}
        </button>
        <button
          type="button"
          class="tool icon"
          :aria-label="theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark"
          @click="store.toggleTheme()"
        >
          <SignIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <button
          type="button"
          class="tool icon menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          :aria-label="menuOpen ? t.nav.close : t.nav.menu"
          @click="store.setMenu(!menuOpen)"
        >
          <SignIcon :name="menuOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" id="site-menu" class="sheet">
      <nav class="wrap sheet-nav" :aria-label="t.nav.menu">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`" @click="store.setMenu(false)">
          <span>{{ link.label }}</span>
          <SignIcon name="arrow" />
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.bar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--board);
  color: var(--board-ink);
  border-bottom: 1px solid var(--board-line);
}

.bar-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 64px;
}

.mark {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  white-space: nowrap;
}

.mark-tile {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius);
  background: var(--signal);
  color: var(--signal-ink);
  font-family: var(--font-latin);
  font-weight: 700;
  font-size: 1.125rem;
}

.nav {
  display: flex;
  gap: 4px;
  margin-inline-start: auto;
}

.nav a {
  position: relative;
  padding: 10px 12px;
  color: var(--board-ink-2);
  text-decoration: none;
  font-weight: 500;
  border-radius: var(--radius);
  transition: color 160ms var(--ease-out);
}

.nav a::after {
  content: '';
  position: absolute;
  inset-inline: 12px;
  bottom: 4px;
  height: 2px;
  background: var(--signal);
  transform: scaleX(0);
  transform-origin: var(--origin, left);
  transition: transform 220ms var(--ease-out);
}

[dir='rtl'] .nav a::after {
  --origin: right;
}

.nav a:hover,
.nav a[aria-current='location'] {
  color: var(--board-ink);
}

.nav a:hover::after,
.nav a[aria-current='location']::after {
  transform: scaleX(1);
}

.tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tool {
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--board-line);
  border-radius: var(--radius);
  background: transparent;
  color: var(--board-ink);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 160ms var(--ease-out),
    border-color 160ms var(--ease-out);
}

.tool:hover {
  background: var(--board-hover);
  border-color: var(--board-ink-2);
}

.tool.lang:lang(ar) {
  font-family: var(--font-arabic);
}

.tool.lang:lang(en) {
  font-family: var(--font-latin);
}

.tool.icon {
  padding: 0;
  width: 44px;
}

.tool.icon svg {
  width: 20px;
  height: 20px;
}

.menu-btn {
  display: none;
}

.sheet {
  position: fixed;
  inset: 64px 0 0;
  background: var(--board);
  overflow-y: auto;
}

.sheet-nav {
  display: flex;
  flex-direction: column;
  padding-block: 16px 40px;
}

.sheet-nav a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  border-bottom: 1px solid var(--board-line);
  color: var(--board-ink);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
}

.sheet-nav svg {
  width: 24px;
  height: 24px;
  color: var(--signal);
}

@media print {
  .bar {
    display: none;
  }
}

@media screen and (max-width: 860px) {
  .nav {
    display: none;
  }

  .tools {
    margin-inline-start: auto;
  }

  .menu-btn {
    display: inline-grid;
  }
}

@media screen and (min-width: 861px) {
  .sheet {
    display: none;
  }
}
</style>
