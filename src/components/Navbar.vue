<template>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { currentLang, theme, menuOpen, isScrolled, navLinks } = storeToRefs(appStore)

const { toggleLanguage, toggleTheme, toggleMenu, scrollTo } = appStore
</script>
