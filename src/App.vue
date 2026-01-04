<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Proficiencies from '@/components/Proficiencies.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import Education from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'
import References from '@/components/References.vue'
import Awards from '@/components/Awards.vue'
import Volunteering from '@/components/Volunteering.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

const appStore = useAppStore()
const { isRTL } = storeToRefs(appStore)

const { initializeTheme, initializeScrollListener } = appStore

// Initialize app state
onMounted(() => {
  initializeTheme()
  initializeScrollListener()
})
</script>

<template>
  <div
    :dir="isRTL ? 'rtl' : 'ltr'"
    class="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 relative overflow-hidden"
  >
    <!-- Animated Background Gradients -->
    <div
      class="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-background"
    ></div>
    <div class="animated-gradient fixed inset-0 -z-10 opacity-10 dark:opacity-30"></div>

    <!-- Floating Geometric Shapes -->
    <div class="geometric-shapes fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="grid-pattern fixed inset-0 -z-10 opacity-[0.01] dark:opacity-[0.02]"></div>

    <!-- Components -->
    <Navbar />

    <main class="container px-4 sm:px-8 py-24 sm:py-32">
      <Hero />
      <Proficiencies />
      <WorkExperience />
      <Education />
      <Projects />
      <References />
      <Awards />
      <Volunteering />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Arabic Typography and RTL Support */
[dir='rtl'] {
  font-family: 'Cairo', sans-serif;
}

[dir='rtl'] * {
  font-family: 'Cairo', sans-serif;
}

/* Smooth Direction Transition */
[dir] {
  transition: all 0.3s ease;
}

/* Gradient Text Effect */
html.dark .gradient-text {
  background-image: linear-gradient(to right, hsl(var(--primary)), #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* Animated Background Gradient */
.animated-gradient {
  background: linear-gradient(
    135deg,
    rgba(20, 184, 166, 0.1) 0%,
    rgba(59, 130, 246, 0.15) 25%,
    rgba(139, 92, 246, 0.1) 50%,
    rgba(236, 72, 153, 0.15) 75%,
    rgba(20, 184, 166, 0.1) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Floating Geometric Shapes */
.geometric-shapes {
  perspective: 1000px;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
  top: 10%;
  left: 10%;
  animation: float1 20s infinite;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.25), rgba(59, 130, 246, 0.25));
  bottom: 15%;
  right: 10%;
  animation: float2 25s infinite;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2));
  top: 50%;
  right: 20%;
  animation: float3 18s infinite;
}

.shape-4 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
  bottom: 30%;
  left: 15%;
  animation: float4 22s infinite;
}

.shape-5 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(20, 184, 166, 0.25));
  top: 70%;
  left: 50%;
  animation: float5 16s infinite;
}

@keyframes float1 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-40px, -25px) rotate(-120deg);
  }
  66% {
    transform: translate(25px, 30px) rotate(-240deg);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, 40px) scale(1.1);
  }
}

@keyframes float4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  50% {
    transform: translate(35px, -35px) scale(0.9) rotate(180deg);
  }
}

@keyframes float5 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(-25px, -40px);
  }
  66% {
    transform: translate(40px, 25px);
  }
}

/* Grid Pattern */
.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Enhanced Card Styling with Glass Morphism */
.bg-card {
  background: rgba(var(--card-rgb, 24, 24, 27), 0.6) !important;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Enhanced Navbar */
nav {
  background: rgba(var(--background-rgb, 9, 9, 11), 0.8) !important;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

/* Enhanced Button Hover Effects */
button,
a[class*='inline-flex'] {
  position: relative;
  overflow: hidden;
}

button::before,
a[class*='inline-flex']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

button:hover::before,
a[class*='inline-flex']:hover::before {
  width: 300px;
  height: 300px;
}

/* Enhanced Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.02em;
  line-height: 1.2;
}

/* Improved Link Hover Effects */
a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover {
  transform: translateY(-1px);
}

/* Enhanced Section Spacing */
section {
  position: relative;
}

/* Card Hover Glow Effect */
.rounded-xl:hover {
  box-shadow: 0 0 30px rgba(var(--primary-rgb, 59, 130, 246), 0.15);
}

/* Smooth Transitions */
* {
  transition-property:
    background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Performance Optimizations */
.animated-gradient,
.shape {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Enhanced Focus States */
*:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
  border-radius: 4px;
}

/* Improved Text Selection */
::selection {
  background: hsl(var(--primary) / 0.3);
  color: hsl(var(--foreground));
}

/* Enhanced Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.3);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .shape {
    filter: blur(40px);
    opacity: 0.3;
  }

  .shape-1,
  .shape-4 {
    width: 200px;
    height: 200px;
  }

  .shape-2 {
    width: 250px;
    height: 250px;
  }

  .shape-3,
  .shape-5 {
    width: 150px;
    height: 150px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .animated-gradient,
  .shape {
    animation: none !important;
  }

  html {
    scroll-behavior: auto;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .bg-card {
    border: 2px solid hsl(var(--foreground));
  }

  button,
  a[class*='inline-flex'] {
    border: 2px solid currentColor;
  }
}
</style>
