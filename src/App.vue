<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const store = useAppStore()
const { t, lang } = storeToRefs(store)

onMounted(() => store.applyDocument())
watch(lang, () => store.applyDocument())
</script>

<template>
  <a class="skip-link" href="#main">{{ t.nav.skip }}</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <WorkSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
