<template>
  <section id="home" class="relative isolate overflow-hidden pt-28 sm:pt-32">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.20),transparent_30%),linear-gradient(180deg,#020817_0%,#020817_35%,#0f172a_100%)]"></div>
    <div class="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"></div>
    <div class="absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"></div>

    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
      <div data-aos="fade-right" data-aos-duration="1000">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
          <span class="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
          Available for opportunities
        </div>

        <h1 class="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
          Fitsum Teshome
        </h1>

        <div class="mt-4 flex flex-wrap items-center gap-3 text-lg font-medium text-slate-200 sm:text-xl">
          <span>Software Engineer</span>
          <span class="text-cyan-400">•</span>
          <span>Flutter Developer</span>
          <span class="text-cyan-400">•</span>
          <span>React Native Developer</span>
          <span class="text-cyan-400">•</span>
          <span>Full Stack Developer</span>
          <span class="text-cyan-400">•</span>
          <span>AI & Computer Vision</span>
        </div>

        <p class="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          I specialize in building production-ready cross-platform mobile applications with Flutter and React Native, along with full-stack web systems and AI-powered solutions that solve real-world problems.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#projects" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px]">
            View Projects
          </a>
          <a :href="cvUrl" download="Fitsum-Teshome-CV.pdf" class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300">
            Download CV
          </a>
          <a href="#contact" class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-500 hover:text-violet-300">
            Contact Me
          </a>
        </div>

        <div class="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div class="text-2xl font-black text-white">{{ stat.value }}</div>
            <div class="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="relative" data-aos="fade-left" data-aos-duration="1000">
        <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-violet-500/20 blur-2xl"></div>

        <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
          <div class="absolute -top-10 left-10 h-24 w-24 rounded-full bg-cyan-500/25 blur-2xl"></div>
          <div class="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl"></div>

          <div class="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6">
            <div class="absolute inset-x-6 top-4 flex items-center justify-between text-[10px] text-slate-400">
              <span>software-engineer.dev</span>
              <span>LIVE</span>
            </div>

            <div class="mt-10 flex items-center justify-center">
              <div class="relative rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/30 p-3 shadow-[0_0_50px_rgba(34,211,238,0.26)]">
                <img :src="profilePhoto" alt="Fitsum Teshome" class="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80" />
              </div>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-200">
              <div class="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-3">
                <div class="text-xs uppercase tracking-[0.18em] text-cyan-300">Focus</div>
                <div class="mt-2 font-semibold">AI + Mobile</div>
              </div>
              <div class="rounded-2xl border border-violet-400/20 bg-violet-500/5 p-3">
                <div class="text-xs uppercase tracking-[0.18em] text-violet-300">Stack</div>
                <div class="mt-2 font-semibold">Flutter + Vue</div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -left-7 top-14 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
          <span class="text-xl">⚡</span>
          Flutter
        </div>
        <div class="absolute -right-8 bottom-12 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
          <span class="text-xl">🤖</span>
          CV / AI
        </div>
        <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-300">
          Full Stack
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profilePhoto from '../assets/fish.jpg'
import cvUrl from '../assets/fitsumresume.pdf'

const stats = [
  { value: '4+', label: 'Years' },
  { value: '18+', label: 'Projects' },
  { value: '12+', label: 'Techs' },
  { value: '6+', label: 'Certs' }
]
</script>
