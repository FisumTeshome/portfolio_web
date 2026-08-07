<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">GitHub Projects</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Open-source and product-driven work.</h2>
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <a v-for="repo in repos" :key="repo.name" :href="repo.link" target="_blank" data-aos="fade-up" class="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-400/50 hover:bg-slate-900">
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center gap-3 text-white">
            <span class="text-xl">📁</span>
            <span class="font-semibold">{{ repo.name }}</span>
          </div>
          <span class="text-xs uppercase tracking-[0.16em] text-slate-400">{{ repo.language }}</span>
        </div>

        <p class="text-slate-300">{{ repo.description }}</p>

        <div class="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
          <span>⭐ {{ repo.stars }}</span>
          <span>Updated {{ repo.updated }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const repos = [
  {
    name: 'MusicManager',
    language: 'MERN',
    description: 'Personal music management web app with recommendations, CRUD workflows, and a responsive user experience.',
    stars: '24',
    updated: '2w',
    link: 'https://github.com/FisumTeshome/MusicManager'
  },
  {
    name: 'StudentInfo',
    language: 'React',
    description: 'Student data management system with dashboard and collaboration-focused data workflows.',
    stars: '18',
    updated: '1m',
    link: 'https://github.com/FisumTeshome/StudentInfo'
  },
  {
    name: 'Assistive App',
    language: 'Flutter',
    description: 'Accessibility-focused mobile app for navigation assistance with computer vision and voice guidance.',
    stars: '31',
    updated: '3w',
    link: 'https://github.com/FisumTeshome/StudentInfo'
  }
]
</script>
