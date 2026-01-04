<template>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t } = storeToRefs(appStore)

const { scrollTo } = appStore
</script>
