<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const { t } = storeToRefs(useAppStore())
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="wrap">
      <h2 id="skills-title" class="section-head">
        {{ t.skills.title }}
      </h2>
      <dl class="skills">
        <div v-for="g in t.skills.groups" :key="g.name" class="skill">
          <dt>{{ g.name }}</dt>
          <dd class="bidi-plain">{{ g.items }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(32px, 6vw, 88px);
  margin: clamp(28px, 4vw, 44px) 0 0;
  border-top: 2px solid var(--ink);
}

.skill {
  padding: 18px 0 20px;
  border-bottom: 1px solid var(--line);
}

dt {
  font-weight: 600;
  font-size: 1.125rem;
}

dd {
  margin: 6px 0 0;
  color: var(--ink-2);
  max-width: 52ch;
}

@media print {
  .skills {
    column-gap: 7mm;
    margin-top: 2mm;
    border-top-width: 1px;
  }

  .skill {
    padding: 1.6mm 0;
    break-inside: avoid;
  }

  dt {
    font-size: 9.6pt;
  }

  dd {
    margin-top: 0.5mm;
    font-size: 9pt;
    max-width: none;
  }
}

@media screen and (max-width: 760px) {
  .skills {
    grid-template-columns: 1fr;
  }
}
</style>
