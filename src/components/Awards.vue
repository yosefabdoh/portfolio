<template>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, awards } = storeToRefs(appStore)
</script>
