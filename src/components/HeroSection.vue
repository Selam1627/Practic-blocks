<script setup lang="ts">
defineProps<{
  title: string
  tagline: string
}>()
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="bg-stone-800 px-4 py-24 text-stone-50 sm:py-32 lg:py-40"
  >
    <div class="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
      <h1 id="hero-title" class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {{ title }}
      </h1>
      <p data-testid="hero-tagline" class="text-lg text-stone-300 sm:text-xl">
        {{ tagline }}
      </p>
    </div>
  </section>
</template>
