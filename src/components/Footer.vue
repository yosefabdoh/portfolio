<template>
  <footer class="border-t border-border/40 py-8">
    <div
      class="container flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left text-sm text-muted-foreground"
    >
      <p>© {{ new Date().getFullYear() }} {{ t.footer.copyright }}</p>
      <p>{{ t.footer.crafted }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t } = storeToRefs(appStore)
</script>
