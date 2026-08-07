<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Hobbies & Interests</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Beyond the code.</h2>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="hobby in hobbies" :key="hobby.label" data-aos="zoom-in" class="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 text-center">
        <div class="text-3xl">{{ hobby.icon }}</div>
        <div class="mt-4 text-lg font-semibold text-white">{{ hobby.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const hobbies = [
  { icon: '🏃', label: 'Sports' },
  { icon: '📚', label: 'Reading' },
  { icon: '🧠', label: 'Brainstorming' },
  { icon: '🤝', label: 'Community Service' },
  { icon: '📖', label: 'History' },
  { icon: '🗳️', label: 'Politics' },
  { icon: '💡', label: 'Technology' },
  { icon: '🎓', label: 'Teaching' }
]
</script>
