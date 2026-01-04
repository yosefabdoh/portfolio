<template>
  <section id="contact" class="scroll-mt-24 text-center">
    <h2
      v-motion-slide-visible-once-bottom
      class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
    >
      {{ t.sections.contact }}
    </h2>
    <p class="mx-auto mb-12 max-w-lg text-muted-foreground">
      {{ t.contact.description }}
    </p>
    <div class="flex flex-wrap justify-center gap-4" v-motion-slide-visible-once-bottom>
      <a
        href="mailto:contact@yosefabdoh.com"
        class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {{ t.contact.emailBtn }}
      </a>
      <a
        href="https://github.com/yosefabdoh"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {{ t.contact.githubBtn }}
      </a>
      <a
        href="https://linkedin.com/in/yosefabdoh"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {{ t.contact.linkedinBtn }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t } = storeToRefs(appStore)
</script>
