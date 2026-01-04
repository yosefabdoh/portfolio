<template>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, volunteering } = storeToRefs(appStore)
</script>
