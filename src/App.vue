<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE ?? 'Practic Blocks'
</script>

<template>
  <main class="min-h-screen bg-stone-100 text-stone-800">
    <section class="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 class="text-4xl font-bold tracking-tight">{{ title }}</h1>
      <p class="text-lg text-stone-600">Precast concrete blocks. Website coming soon.</p>
    </section>
  </main>
</template>
