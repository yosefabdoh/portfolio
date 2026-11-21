<script setup lang="ts">
// A board cell: when its text changes the old flap folds away and the new one drops in.
// Whole words flip, never single letters, so Arabic keeps its joined shapes.
defineProps<{ text: string; delay?: number }>()
</script>

<template>
  <span class="flap" :style="{ '--d': `${delay ?? 0}ms` }">
    <Transition
      name="flap"
      mode="out-in"
      appear
      appear-from-class="flap-enter-from"
      appear-active-class="flap-appear-active"
    >
      <span :key="text" class="flap-face">{{ text }}</span>
    </Transition>
  </span>
</template>

<style scoped>
.flap {
  display: block;
  perspective: 400px;
}

.flap-face {
  display: block;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
}

.flap-leave-active {
  transition:
    transform 140ms cubic-bezier(0.55, 0, 1, 0.45),
    opacity 140ms linear;
  transition-delay: var(--d);
}

.flap-enter-active {
  transition:
    transform 260ms var(--ease-out),
    opacity 120ms linear;
}

.flap-appear-active {
  transition:
    transform 420ms var(--ease-out),
    opacity 160ms linear;
  transition-delay: calc(var(--d) * 2 + 120ms);
}

.flap-leave-to {
  transform: rotateX(-90deg);
  opacity: 0;
}

.flap-enter-from {
  transform: rotateX(90deg);
  opacity: 0;
}
</style>
