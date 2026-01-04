<template>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, projects } = storeToRefs(appStore)
</script>
