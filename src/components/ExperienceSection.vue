<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import SignIcon from './SignIcon.vue'

const { t } = storeToRefs(useAppStore())
</script>

<template>
  <section id="experience" class="section exp" aria-labelledby="experience-title">
    <div class="wrap">
      <h2 id="experience-title" class="section-head">
        <span class="tile" aria-hidden="true"><SignIcon name="arrow-down" /></span>
        {{ t.experience.title }}
      </h2>

      <div class="exp-grid">
        <ol class="jobs">
          <li v-for="job in t.experience.jobs" :key="job.company + job.years" class="job">
            <p class="job-years tabular">{{ job.years }}</p>
            <div>
              <h3 class="job-role">{{ job.role }}</h3>
              <p class="job-org">{{ job.company }}, {{ job.place }}</p>
              <ul class="job-points">
                <li v-for="point in job.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </li>
        </ol>

        <aside class="more">
          <section class="block">
            <h3 class="block-title">{{ t.experience.educationTitle }}</h3>
            <div v-for="d in t.experience.degrees" :key="d.title" class="degree">
              <p class="degree-title">{{ d.title }}</p>
              <p class="muted">{{ d.school }}</p>
              <p class="muted tabular">{{ d.years }}, {{ d.grade }}</p>
            </div>
          </section>

          <section class="block">
            <h3 class="block-title">{{ t.experience.certificationsTitle }}</h3>
            <p class="bidi-plain">{{ t.experience.certifications }}</p>
          </section>

          <section class="block">
            <h3 class="block-title">{{ t.experience.awardTitle }}</h3>
            <p>{{ t.experience.award.text }}</p>
            <a
              class="inline-link"
              :href="t.experience.award.link.href"
              target="_blank"
              rel="noopener"
            >
              {{ t.experience.award.link.label }}
              <SignIcon name="external" />
            </a>
          </section>

          <section class="block">
            <h3 class="block-title">{{ t.experience.volunteeringTitle }}</h3>
            <p>{{ t.experience.volunteering.text }}</p>
            <a
              class="inline-link"
              :href="t.experience.volunteering.link.href"
              target="_blank"
              rel="noopener"
            >
              {{ t.experience.volunteering.link.label }}
              <SignIcon name="external" />
            </a>
          </section>

          <section class="block">
            <h3 class="block-title">{{ t.experience.referencesTitle }}</h3>
            <div v-for="r in t.experience.references" :key="r.name" class="ref">
              <p class="ref-name">{{ r.name }}</p>
              <p class="muted">{{ r.title }}</p>
            </div>
            <p class="muted note">{{ t.experience.referencesNote }}</p>
          </section>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp {
  background: var(--panel);
  border-block: 1px solid var(--line);
}

.exp-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 88px);
  margin-top: clamp(28px, 4vw, 44px);
}

.jobs {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 2px solid var(--ink);
}

.job {
  display: grid;
  grid-template-columns: 8.5rem minmax(0, 1fr);
  gap: 8px 24px;
  padding: 24px 0 26px;
  border-bottom: 1px solid var(--line);
}

.job-years {
  margin: 0;
  padding-top: 3px;
  color: var(--ink-2);
  font-weight: 600;
}

.job-role {
  margin: 0;
  font-size: 1.3125rem;
  font-weight: 600;
  line-height: 1.3;
}

.job-org {
  margin: 4px 0 0;
  color: var(--ink-2);
}

.job-points {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  max-width: 62ch;
}

.job-points li {
  position: relative;
  padding-inline-start: 20px;
}

.job-points li + li {
  margin-top: 6px;
}

.job-points li::before {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  top: 0.68em;
  width: 7px;
  height: 7px;
  border-radius: 1px;
  background: var(--line-strong);
}

.more {
  border-top: 2px solid var(--ink);
}

.block {
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}

.block-title {
  margin: 0 0 10px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink-2);
}

.block p {
  margin: 0;
}

.degree + .degree,
.ref + .ref {
  margin-top: 14px;
}

.degree-title,
.ref-name {
  font-weight: 600;
}

.muted {
  color: var(--ink-2);
}

.note {
  margin-top: 12px !important;
  font-size: 0.9375rem;
}

.inline-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: var(--signal);
  text-decoration-thickness: 2px;
}

.inline-link svg {
  width: 16px;
  height: 16px;
}

.inline-link:hover {
  text-decoration-color: currentColor;
}

@media print {
  .exp {
    background: none;
    border: 0;
  }

  .exp-grid {
    grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
    gap: 7mm;
    margin-top: 2mm;
  }

  .jobs,
  .more {
    border-top-width: 1px;
  }

  .job {
    grid-template-columns: 5.6rem minmax(0, 1fr);
    gap: 0 4mm;
    padding: 2.5mm 0;
    break-inside: avoid;
  }

  .job-role {
    font-size: 10.5pt;
  }

  .job-points {
    margin-top: 1mm;
    font-size: 9pt;
  }

  .job-points li + li {
    margin-top: 0.5mm;
  }

  .block {
    padding: 2.2mm 0;
    font-size: 9pt;
    break-inside: avoid;
  }

  .block-title {
    margin-bottom: 1mm;
    font-size: 9pt;
  }

  .inline-link {
    display: none;
  }

  .degree + .degree,
  .ref + .ref {
    margin-top: 1.5mm;
  }
}

@media screen and (max-width: 960px) {
  .exp-grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 560px) {
  .job {
    grid-template-columns: 1fr;
  }
}
</style>
