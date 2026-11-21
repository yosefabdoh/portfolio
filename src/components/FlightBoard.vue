<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import FlapText from './FlapText.vue'
import SignIcon from './SignIcon.vue'

const { t } = storeToRefs(useAppStore())

// Local time in Cairo, so a recruiter in another time zone knows when he is at his desk.
const clock = ref('')
const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Africa/Cairo',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})
let timer: number | undefined

function tick() {
  clock.value = fmt.format(new Date())
}

onMounted(() => {
  tick()
  timer = window.setInterval(tick, 15000)
})

onBeforeUnmount(() => window.clearInterval(timer))

const delay = (row: number, col: number) => row * 55 + col * 30
</script>

<template>
  <section class="board" aria-labelledby="board-title">
    <div class="board-top">
      <h2 id="board-title" class="board-title">
        <FlapText :text="t.board.title" />
      </h2>
      <p class="clock tabular">
        <span class="clock-place">{{ t.board.clock }}</span>
        <span class="clock-time" lang="en">{{ clock }}</span>
      </p>
    </div>

    <div class="cols" aria-hidden="true">
      <span>{{ t.board.columns.year }}</span>
      <span>{{ t.board.columns.project }}</span>
      <span class="c-stack">{{ t.board.columns.stack }}</span>
      <span class="c-role">{{ t.board.columns.role }}</span>
      <span>{{ t.board.columns.status }}</span>
    </div>

    <ol class="rows">
      <li v-for="(row, i) in t.board.rows" :key="i">
        <a class="row" :href="row.href">
          <span class="year tabular" lang="en">{{ row.year }}</span>
          <span class="project">
            <FlapText :text="row.project" :delay="delay(i, 1)" />
            <span class="role-inline"><FlapText :text="row.role" :delay="delay(i, 3)" /></span>
          </span>
          <span class="c-stack stack"><FlapText :text="row.stack" :delay="delay(i, 2)" /></span>
          <span class="c-role role"><FlapText :text="row.role" :delay="delay(i, 3)" /></span>
          <span class="status" :class="`tone-${row.tone}`">
            <span class="lamp" aria-hidden="true" />
            <FlapText :text="row.status" :delay="delay(i, 4)" />
          </span>
          <span class="go" aria-hidden="true"><SignIcon name="arrow" /></span>
        </a>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.board {
  --cols: 5.25rem minmax(0, 1.45fr) minmax(0, 1.25fr) minmax(0, 1.25fr) 10.5rem 28px;
  background: var(--board);
  color: var(--board-ink);
  border-radius: 4px;
  padding: clamp(14px, 1.8vw, 22px);
  box-shadow:
    0 1px 0 rgb(255 255 255 / 0.04) inset,
    0 18px 40px -24px rgb(16 24 31 / 0.55);
}

.board-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 10px;
}

.board-title {
  margin: 0;
  color: var(--signal);
  font-size: clamp(1.125rem, 0.95rem + 0.6vw, 1.375rem);
  font-weight: 600;
}

.clock {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0;
  color: var(--board-ink-2);
  white-space: nowrap;
}

.clock-time {
  color: var(--board-ink);
  font-family: var(--font-latin);
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.cols,
.row {
  display: grid;
  grid-template-columns: var(--cols);
  gap: 16px;
  align-items: center;
}

.cols {
  padding: 10px 14px;
  border-top: 1px solid var(--board-line);
  color: var(--board-ink-2);
  font-size: 0.875rem;
}

.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 3px;
}

.row {
  min-height: 52px;
  padding: 6px 14px;
  background: var(--board-row);
  border-radius: 2px;
  text-decoration: none;
  transition: background-color 160ms var(--ease-out);
}

.row:hover {
  background: var(--board-hover);
}

.row:focus-visible {
  outline-offset: 2px;
}

/* Year digits sit on a split-flap tile: dark card, hairline across the middle. */
.year {
  justify-self: start;
  padding: 4px 8px;
  border-radius: 2px;
  background:
    linear-gradient(
      to bottom,
      transparent calc(50% - 0.5px),
      rgb(0 0 0 / 0.55) calc(50% - 0.5px),
      rgb(0 0 0 / 0.55) calc(50% + 0.5px),
      transparent calc(50% + 0.5px)
    ),
    #0b1014;
  color: var(--board-ink);
  font-family: var(--font-latin);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.project {
  font-size: 1.1875rem;
  font-weight: 600;
  line-height: 1.3;
}

.role-inline {
  display: none;
  margin-top: 2px;
  color: var(--board-ink-2);
  font-size: 0.9375rem;
  font-weight: 400;
}

.stack,
.role {
  color: var(--board-ink-2);
  font-size: 0.9688rem;
  line-height: 1.4;
}

.role {
  color: var(--board-ink);
}

.status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.9688rem;
}

.lamp {
  width: 10px;
  height: 10px;
  flex: none;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 0 3px rgb(255 255 255 / 0.06);
}

.tone-go {
  color: var(--lamp-go);
}

.tone-wait {
  color: var(--lamp-wait);
}

.tone-done {
  color: var(--lamp-done);
}

.go {
  width: 22px;
  height: 22px;
  color: var(--signal);
  opacity: 0;
  transform: translateX(calc(-6px * var(--dirx, 1)));
  transition:
    opacity 160ms var(--ease-out),
    transform 220ms var(--ease-out);
}

[dir='rtl'] .go {
  --dirx: -1;
}

.row:hover .go,
.row:focus-visible .go {
  opacity: 1;
  transform: none;
}

@media screen and (max-width: 980px) {
  .board {
    --cols: 4.5rem minmax(0, 1.4fr) minmax(0, 1fr) 9.5rem 24px;
  }

  .c-stack {
    display: none;
  }
}

@media screen and (max-width: 680px) {
  .board {
    --cols: 4.25rem minmax(0, 1fr);
  }

  .c-role,
  .go,
  .cols span:last-child {
    display: none;
  }

  .role-inline {
    display: block;
  }

  .row {
    grid-template-areas:
      'year project'
      'year status';
    row-gap: 6px;
    align-items: start;
    padding: 12px;
  }

  .year {
    grid-area: year;
  }

  .project {
    grid-area: project;
    font-size: 1.0625rem;
  }

  .status {
    grid-area: status;
    font-size: 0.875rem;
  }
}
</style>
