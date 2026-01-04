<template>
  <section id="education" class="mb-32 scroll-mt-24">
    <h2
      v-motion-slide-visible-once-bottom
      class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
    >
      {{ t.sections.education }}
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="(edu, index) in education"
        :key="index"
        class="glass-card card-hover p-8 rounded-2xl"
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, education } = storeToRefs(appStore)
</script>
