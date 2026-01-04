<template>
  <section id="work" class="mb-32 scroll-mt-24">
    <h2
      v-motion-slide-visible-once-bottom
      class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
    >
      {{ t.sections.work }}
    </h2>
    <div class="relative space-y-12 border-s-2 border-primary/20 ms-4 md:ms-8 ps-10 md:ps-16 py-4">
      <div
        v-for="(job, index) in experiences"
        :key="index"
        class="relative"
        v-motion-slide-visible-once-bottom
      >
        <div
          class="absolute -start-[41px] md:-start-[59px] top-1 h-5 w-5 rounded-full border-4 border-background bg-amber-500"
        ></div>
        <div class="mb-1 flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <h3 class="text-xl font-bold">{{ job.title }}</h3>
          <span
            v-if="job.current"
            class="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
          >
            {{ t.work.current }}
          </span>
        </div>
        <div class="mb-4 text-sm text-muted-foreground">
          {{ job.company }} • {{ job.years }} • {{ job.location }}
        </div>
        <p class="text-muted-foreground leading-relaxed">
          {{ job.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t, experiences } = storeToRefs(appStore)
</script>
