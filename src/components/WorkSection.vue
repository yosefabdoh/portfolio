<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import CaseStudy from './CaseStudy.vue'
import SignIcon from './SignIcon.vue'

const { t } = storeToRefs(useAppStore())
</script>

<template>
  <section id="work" class="section work" aria-labelledby="work-title">
    <div class="wrap">
      <h2 id="work-title" class="section-head">
        <span class="tile" aria-hidden="true"><SignIcon name="arrow-down" /></span>
        {{ t.work.title }}
      </h2>
      <p class="section-intro">{{ t.work.intro }}</p>

      <CaseStudy
        v-for="item in t.work.cases"
        :key="item.id"
        :item="item"
        :open-full="t.work.openFull"
      />

      <div class="earlier">
        <h3 class="earlier-title">{{ t.work.earlierTitle }}</h3>
        <ul class="earlier-list">
          <li v-for="p in t.work.earlier" :key="p.name" class="earlier-item">
            <span class="earlier-year tabular" lang="en">{{ p.year }}</span>
            <div>
              <p class="earlier-name" lang="en">{{ p.name }}</p>
              <p class="earlier-text">{{ p.text }}</p>
            </div>
            <a class="earlier-link" :href="p.href" target="_blank" rel="noopener">
              <SignIcon name="github" />
              <span>{{ t.work.codeLink }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding-top: clamp(48px, 6vw, 80px);
}

.earlier {
  margin-top: clamp(64px, 8vw, 104px);
}

.earlier-title {
  margin: 0 0 16px;
  font-size: 1.5rem;
  font-weight: 600;
}

.earlier-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 2px solid var(--ink);
}

.earlier-item {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr) auto;
  gap: 16px 24px;
  align-items: baseline;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.earlier-year {
  color: var(--ink-2);
  font-weight: 600;
}

.earlier-name {
  margin: 0;
  font-weight: 600;
  font-size: 1.125rem;
}

.earlier-text {
  margin: 4px 0 0;
  max-width: 64ch;
  color: var(--ink-2);
}

.earlier-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.earlier-link svg {
  width: 18px;
  height: 18px;
}

.earlier-link span {
  background: linear-gradient(currentColor, currentColor) no-repeat 0 100% / 0 1.5px;
  transition: background-size 220ms var(--ease-out);
}

[dir='rtl'] .earlier-link span {
  background-position: 100% 100%;
}

.earlier-link:hover span {
  background-size: 100% 1.5px;
}

@media print {
  .earlier {
    margin-top: 4mm;
    break-inside: avoid;
  }

  .earlier-title {
    font-size: 11pt;
    margin-bottom: 1mm;
  }

  .earlier-list {
    border-top-width: 1px;
  }

  .earlier-item {
    grid-template-columns: 3rem minmax(0, 1fr);
    padding: 1.2mm 0;
    gap: 0 4mm;
  }

  .earlier-name {
    font-size: 9.6pt;
    display: inline;
  }

  .earlier-text {
    display: inline;
    margin-inline-start: 2mm;
    font-size: 9pt;
  }

  .earlier-link {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .earlier-item {
    grid-template-columns: 3.5rem minmax(0, 1fr);
  }

  .earlier-link {
    grid-column: 2;
  }
}
</style>
