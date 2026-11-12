<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'

const DEFAULT_TITLE = 'Practice Blocks'

// Fall back to the default when the variable is unset, empty or only whitespace
const title = import.meta.env.VITE_APP_TITLE?.trim() || DEFAULT_TITLE
const tagline = 'Greener precast blocks for lower-carbon buildings.'
</script>

<template>
  <main class="min-h-screen bg-stone-100 text-stone-800">
    <HeroSection :title="title" :tagline="tagline" />
  </main>
</template>
