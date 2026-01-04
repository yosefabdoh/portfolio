<template>
  <section id="proficiencies" class="mb-32 scroll-mt-24">
    <h2
      v-motion-slide-visible-once-bottom
      class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
    >
      {{ t.sections.proficiencies }}
    </h2>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(items, category) in proficiencies"
        :key="category"
        class="glass-card card-hover p-8 rounded-2xl"
        v-motion-slide-visible-once-bottom
      >
        <h3 class="mb-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
          {{ category }}
        </h3>
        <ul class="space-y-2">
          <li v-for="item in items" :key="item" class="flex items-center text-sm font-medium">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-500 me-2"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, proficiencies } = storeToRefs(appStore)
</script>
