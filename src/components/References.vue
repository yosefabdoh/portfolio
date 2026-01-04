<template>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, references } = storeToRefs(appStore)
</script>
