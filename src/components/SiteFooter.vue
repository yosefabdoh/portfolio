<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const { t } = storeToRefs(useAppStore())
const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <div class="wrap foot-inner">
      <p>
        © <span class="tabular" lang="en">{{ year }}</span> {{ t.footer.rights }}
      </p>
      <a href="https://github.com/yosefabdoh/portfolio" target="_blank" rel="noopener">{{
        t.footer.source
      }}</a>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding-block: 28px 40px;
  color: var(--ink-2);
  font-size: 0.9375rem;
}

.foot-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
}

@media print {
  .foot {
    display: none;
  }
}

.foot p {
  margin: 0;
}

.foot a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  text-decoration-color: var(--line-strong);
}

.foot a:hover {
  color: var(--ink);
  text-decoration-color: currentColor;
}
</style>
