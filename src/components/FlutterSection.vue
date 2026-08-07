<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Mobile Development</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Flutter & React Native engineering for real-world products.</h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <div class="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-cyan-300">Flutter</p>
            <h3 class="mt-2 text-2xl font-bold text-white">Cross-platform mobile</h3>
          </div>
          <span class="text-2xl">⚡</span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="app in flutterApps" :key="app.title" data-aos="zoom-in" class="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-xl">{{ app.icon }}</div>
            <h4 class="text-lg font-bold text-white">{{ app.title }}</h4>
            <p class="mt-2 text-sm leading-6 text-slate-300">{{ app.description }}</p>
          </div>
        </div>

        <div class="mt-6">
          <div class="mb-3 text-xs uppercase tracking-[0.24em] text-slate-400">Flutter strengths</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in flutterSkills" :key="skill" class="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">{{ skill }}</span>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-violet-400/20 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-violet-300">React Native</p>
            <h3 class="mt-2 text-2xl font-bold text-white">Production enterprise mobile</h3>
          </div>
          <span class="text-2xl">📱</span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="app in reactNativeApps" :key="app.title" data-aos="zoom-in" class="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-xl">{{ app.icon }}</div>
            <h4 class="text-lg font-bold text-white">{{ app.title }}</h4>
            <p class="mt-2 text-sm leading-6 text-slate-300">{{ app.description }}</p>
          </div>
        </div>

        <div class="mt-6">
          <div class="mb-3 text-xs uppercase tracking-[0.24em] text-slate-400">React Native strengths</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in reactNativeSkills" :key="skill" class="rounded-full border border-violet-400/20 bg-violet-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const flutterApps = [
  { icon: '🧠', title: 'Assistive Mobile App', description: 'AI-powered accessibility app for visually impaired users using computer vision and voice guidance.' },
  { icon: '🎵', title: 'Dexel Music App', description: 'Music-focused product with responsive UI and organized media interactions.' },
  { icon: '🛍️', title: 'Product Catalog App', description: 'App for product browsing, structured presentation, and user-friendly operations.' },
  { icon: '🗺️', title: 'Maps & Vision', description: 'Applications using location and computer vision features for intelligent UX.' }
]

const reactNativeApps = [
  { icon: '🏬', title: 'ERP Inventory App', description: 'Production-ready enterprise mobile application used for inventory and pharmacy management.' },
  { icon: '📦', title: 'Inventory Management', description: 'Built for product tracking, stock management, barcode scanning, and operational workflows.' },
  { icon: '💳', title: 'Sales & POS', description: 'Supports sales, purchase operations, employee roles, and transaction workflows.' },
  { icon: '🔄', title: 'Offline First', description: 'Reliable local storage and synchronization for business continuity in low-connectivity environments.' }
]

const flutterSkills = ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Maps', 'Computer Vision', 'UI/UX', 'App Deployment']
const reactNativeSkills = ['React Native', 'JavaScript', 'TypeScript', 'Expo', 'REST APIs', 'SQLite', 'Offline Sync', 'State Management', 'Native Modules', 'Navigation', 'Android Builds', 'Performance Optimization']
</script>
