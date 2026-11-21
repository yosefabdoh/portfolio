<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import SignIcon from './SignIcon.vue'

const { t, lang } = storeToRefs(useAppStore())
const cvHref = computed(() =>
  lang.value === 'ar' ? '/Yousef-Abdo-CV-ar.pdf' : '/Yousef-Abdo-CV.pdf',
)
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="wrap">
      <div class="panel">
        <h2 id="contact-title" class="contact-title">{{ t.contact.title }}</h2>
        <p class="contact-text">{{ t.contact.text }}</p>
        <a class="email" :href="`mailto:${t.contact.email}`" lang="en">
          <span>{{ t.contact.email }}</span>
          <SignIcon name="arrow" />
        </a>
        <ul class="routes">
          <li>
            <a href="https://github.com/yosefabdoh" target="_blank" rel="me noopener">
              <SignIcon name="github" />
              <span>{{ t.contact.github }}</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yosefabdoh" target="_blank" rel="me noopener">
              <SignIcon name="linkedin" />
              <span>{{ t.contact.linkedin }}</span>
            </a>
          </li>
          <li>
            <a :href="cvHref" download>
              <SignIcon name="download" />
              <span>{{ t.contact.cv }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-block: 0 clamp(40px, 5vw, 64px);
}

.panel {
  background: var(--signal);
  color: var(--signal-ink);
  border-radius: 4px;
  padding: clamp(28px, 5vw, 64px);
}

.contact-title {
  margin: 0;
  font-size: clamp(2rem, 1.4rem + 2.2vw, 3rem);
  font-weight: 600;
  line-height: 1.1;
}

.contact-text {
  margin: 12px 0 0;
  max-width: 52ch;
  font-size: 1.125rem;
}

.email {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  margin-top: clamp(28px, 4vw, 44px);
  font-family: var(--font-latin);
  font-size: clamp(1.5rem, 0.7rem + 3.6vw, 3.5rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.email span {
  background: linear-gradient(currentColor, currentColor) no-repeat 0 100% / 100% 3px;
  padding-bottom: 4px;
}

.email svg {
  width: 0.8em;
  height: 0.8em;
  flex: none;
  transition: translate 220ms var(--ease-out);
}

.email:hover svg {
  translate: calc(6px * var(--dirx, 1)) 0;
}

[dir='rtl'] .email svg {
  --dirx: -1;
}

.routes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 28px;
  margin: clamp(28px, 4vw, 40px) 0 0;
  padding: 20px 0 0;
  list-style: none;
  border-top: 1.5px solid rgb(29 37 44 / 0.35);
}

.routes a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  font-weight: 600;
  font-size: 1.0625rem;
  text-decoration: none;
}

.routes svg {
  width: 20px;
  height: 20px;
}

.routes a span {
  background: linear-gradient(currentColor, currentColor) no-repeat 0 100% / 0 1.5px;
  transition: background-size 220ms var(--ease-out);
}

[dir='rtl'] .routes a span {
  background-position: 100% 100%;
}

.routes a:hover span {
  background-size: 100% 1.5px;
}

@media print {
  .contact {
    display: none;
  }
}

.panel :focus-visible {
  outline-color: var(--signal-ink);
}
</style>
