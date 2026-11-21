<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import FlightBoard from './FlightBoard.vue'
import SignIcon from './SignIcon.vue'

const store = useAppStore()
const { t, lang } = storeToRefs(store)
const cvHref = computed(() =>
  lang.value === 'ar' ? '/Yousef-Abdo-CV-ar.pdf' : '/Yousef-Abdo-CV.pdf',
)
</script>

<template>
  <section id="top" class="hero">
    <div class="wrap">
      <div class="intro">
        <h1 class="title">
          <span class="name">{{ t.hero.name }}</span>
          <span class="role">{{ t.hero.role }}</span>
        </h1>
        <div class="side">
          <p class="lede">{{ t.hero.intro }}</p>
          <p class="print-only print-contact" lang="en">
            {{ t.contact.email }} &nbsp;|&nbsp; yosefabdoh.com &nbsp;|&nbsp; github.com/yosefabdoh
            &nbsp;|&nbsp; linkedin.com/in/yosefabdoh
          </p>
          <p class="available"><span class="lamp" aria-hidden="true" />{{ t.hero.available }}</p>
          <div class="actions">
            <a class="sign sign-go" :href="`mailto:${t.contact.email}`">
              <SignIcon name="mail" />
              {{ t.hero.email }}
            </a>
            <a class="sign sign-quiet" :href="cvHref" download>
              <SignIcon name="download" />
              {{ t.hero.cv }}
            </a>
          </div>
        </div>
      </div>
      <FlightBoard class="no-print" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(28px, 3.6vw, 48px) clamp(24px, 3vw, 40px);
}

.intro {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 64px);
  align-items: end;
  margin-bottom: clamp(28px, 3.2vw, 40px);
}

.title {
  margin: 0;
}

.name {
  display: block;
  font-size: clamp(3rem, 1.6rem + 5.4vw, 5.75rem);
  font-weight: 650;
  line-height: 0.98;
  letter-spacing: -0.03em;
}

.role {
  display: block;
  margin-top: 14px;
  font-size: clamp(1.375rem, 1rem + 1.4vw, 2.125rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--ink-2);
  letter-spacing: -0.01em;
}

:lang(ar) .name {
  line-height: 1.25;
  letter-spacing: 0;
  font-weight: 700;
}

:lang(ar) .role {
  letter-spacing: 0;
}

.lede {
  margin: 0;
  max-width: 54ch;
  font-size: 1.125rem;
  line-height: 1.6;
}

.available {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 0 0;
  color: var(--text-go);
  font-weight: 600;
}

.lamp {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--lamp-go);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--lamp-go) 22%, transparent);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.print-contact {
  margin: 8px 0 0;
  font-weight: 600;
  direction: ltr;
}

:lang(ar) .print-contact {
  text-align: right;
}

@media print {
  .hero {
    padding: 0;
  }

  .intro {
    grid-template-columns: 1fr;
    gap: 3mm;
    margin: 0;
  }

  .name {
    font-size: 24pt;
  }

  .role {
    margin-top: 1mm;
    font-size: 13pt;
  }

  .lede {
    max-width: none;
    font-size: 10pt;
  }

  .available,
  .actions {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .intro {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

@media screen and (max-width: 520px) {
  .hero {
    padding-top: 20px;
  }

  .intro {
    gap: 14px;
    margin-bottom: 20px;
  }

  .lede {
    font-size: 1.0625rem;
    line-height: 1.55;
  }

  .available {
    margin-top: 12px;
  }

  .actions {
    margin-top: 16px;
    gap: 8px;
  }

  .actions .sign {
    flex: 1 1 0;
    justify-content: center;
    padding: 0 12px;
    font-size: 1rem;
  }
}
</style>
