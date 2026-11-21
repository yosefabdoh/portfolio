<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import type { CaseStudy } from '@/locales/types'
import SignIcon from './SignIcon.vue'

const props = defineProps<{ item: CaseStudy; openFull: string }>()
const { theme } = storeToRefs(useAppStore())

function preferred() {
  const i = props.item.shots.findIndex((s) => s.theme === theme.value)
  return i >= 0 && props.item.shots.some((s) => s.theme) ? i : 0
}

const active = ref(preferred())
watch(theme, () => (active.value = preferred()))
// Language change swaps the shot list order (Arabic screen first in Arabic).
watch(
  () => props.item.shots[0]?.file,
  () => (active.value = preferred()),
)

const shot = computed(() => props.item.shots[active.value] ?? props.item.shots[0]!)
const src = (file: string) => `/work/${file}.webp`
const srcset = (file: string) => `/work/${file}-1000.webp 1000w, /work/${file}.webp 2000w`
</script>

<template>
  <article :id="item.id" class="case" :aria-labelledby="`${item.id}-title`">
    <header class="case-head">
      <div>
        <h3 :id="`${item.id}-title`" class="case-name">{{ item.name }}</h3>
        <p class="case-summary">{{ item.summary }}</p>
      </div>
      <div v-if="item.links.length" class="case-links">
        <a
          v-for="(link, i) in item.links"
          :key="link.href"
          class="sign"
          :class="i === 0 ? 'sign-go' : 'sign-quiet'"
          :href="link.href"
          target="_blank"
          rel="noopener"
        >
          {{ link.label }}
          <SignIcon :name="link.href.includes('github.com') ? 'github' : 'external'" />
        </a>
      </div>
    </header>

    <figure class="screen">
      <div v-if="item.shots.length > 1" class="views" role="group" :aria-label="item.viewsLabel">
        <button
          v-for="(s, i) in item.shots"
          :key="s.file"
          type="button"
          class="view"
          :class="{ on: i === active }"
          :aria-pressed="i === active"
          :lang="/[؀-ۿ]/.test(s.tab) ? 'ar' : 'en'"
          @click="active = i"
        >
          {{ s.tab }}
        </button>
      </div>
      <a class="frame" :href="src(shot.file)" target="_blank" rel="noopener" :title="openFull">
        <Transition name="swap" mode="out-in">
          <img
            :key="shot.file"
            :src="src(shot.file)"
            :srcset="srcset(shot.file)"
            sizes="(max-width: 1260px) 100vw, 1180px"
            width="2000"
            height="1250"
            loading="lazy"
            decoding="async"
            :alt="shot.alt"
          />
        </Transition>
      </a>
    </figure>

    <div class="case-body">
      <p class="case-text">{{ item.body }}</p>
      <dl class="facts">
        <div v-for="fact in item.facts" :key="fact.label" class="fact">
          <dt>{{ fact.label }}</dt>
          <dd class="bidi-plain">{{ fact.value }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<style scoped>
.case {
  padding-top: clamp(40px, 5vw, 64px);
  border-top: 1px solid var(--line);
}

.case + .case {
  margin-top: clamp(56px, 7vw, 96px);
}

.case-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 32px;
  margin-bottom: 24px;
}

.case-name {
  margin: 0;
  font-size: clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem);
  font-weight: 600;
  line-height: 1.15;
}

.case-summary {
  margin: 8px 0 0;
  max-width: 60ch;
  color: var(--ink-2);
  font-size: 1.125rem;
}

.case-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.screen {
  margin: 0;
}

.views {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  margin-bottom: 10px;
  background: var(--board);
  border-radius: 4px;
}

.view {
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 2px;
  background: transparent;
  color: var(--board-ink-2);
  font: inherit;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition:
    background-color 160ms var(--ease-out),
    color 160ms var(--ease-out);
}

.view:lang(ar) {
  font-family: var(--font-arabic);
}

.view:lang(en) {
  font-family: var(--font-latin);
}

.view:hover {
  color: var(--board-ink);
}

.view.on {
  background: var(--signal);
  color: var(--signal-ink);
}

.frame {
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--panel);
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  box-shadow: 0 24px 48px -32px rgb(16 24 31 / 0.45);
}

.frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 500ms var(--ease-out);
}

.frame:hover img {
  transform: scale(1.015);
}

.swap-enter-active,
.swap-leave-active {
  transition: opacity 180ms linear;
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
}

.case-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: clamp(24px, 4vw, 64px);
  margin-top: 28px;
}

.case-text {
  margin: 0;
  max-width: 58ch;
  font-size: 1.0625rem;
}

.facts {
  margin: 0;
  border-top: 2px solid var(--ink);
}

.fact {
  display: grid;
  grid-template-columns: 7.5rem minmax(0, 1fr);
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

dt {
  color: var(--ink-2);
  font-weight: 500;
}

dd {
  margin: 0;
}

@media print {
  .case {
    padding-top: 3.5mm;
    break-inside: avoid;
  }

  .case + .case {
    margin-top: 3.5mm;
  }

  .case-head {
    margin-bottom: 1.5mm;
  }

  .case-name {
    font-size: 12pt;
  }

  .case-summary {
    margin-top: 0.5mm;
    font-size: 9.6pt;
    max-width: none;
  }

  .case-links,
  .screen {
    display: none;
  }

  .case-body {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
    gap: 6mm;
    margin-top: 1.5mm;
  }

  .case-text {
    font-size: 9.6pt;
  }

  .facts {
    border-top-width: 1px;
  }

  .fact {
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: 3mm;
    padding: 1mm 0;
    font-size: 9pt;
  }
}

@media screen and (max-width: 860px) {
  .case-body {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 480px) {
  .fact {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .case-links .sign {
    flex: 1 1 100%;
    justify-content: space-between;
  }
}
</style>
