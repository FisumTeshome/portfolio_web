<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Certifications</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Continuous professional growth.</h2>
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="cert in certificates" :key="cert.title" data-aos="fade-up" class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5">
        <div class="flex items-center justify-between gap-3">
          <span class="text-xl">🏅</span>
          <span class="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">{{ cert.year }}</span>
        </div>
        <h3 class="mt-4 text-xl font-bold text-white">{{ cert.title }}</h3>
        <p class="mt-2 text-sm text-slate-300">{{ cert.provider }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const certificates = [
  { title: 'Flutter Development', provider: 'Modern app development learning path', year: '2024' },
  { title: 'Machine Learning', provider: 'AI and data-driven product workflows', year: '2024' },
  { title: 'Computer Vision', provider: 'Vision systems and model deployment', year: '2024' },
  { title: 'Web Development', provider: 'Full stack and modern frontend engineering', year: '2023' },
  { title: 'Database Systems', provider: 'Design and data application fundamentals', year: '2023' },
  { title: 'IT Support & Systems', provider: 'Technical support and infrastructure optimization', year: '2022' }
]
</script>
