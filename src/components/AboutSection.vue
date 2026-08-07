<template>
  <section id="about" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-14 flex items-end justify-between gap-6">
      <div>
        <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">About Me</p>
        <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Building useful technology for real people.</h2>
      </div>
      <div class="hidden h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent md:block"></div>
    </div>

    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div data-aos="fade-up" class="space-y-6">
        <p class="text-lg leading-8 text-slate-300">
          I am a software engineer driven by the idea that technology should make life easier, smarter, and more accessible. My journey began with a strong interest in solving real-world problems through engineering and design.
        </p>
        <p class="text-lg leading-8 text-slate-300">
          I hold a Bachelor’s degree in Computer Engineering and have developed a deep passion for mobile development, full-stack engineering, AI, and computer vision. I enjoy turning ideas into scalable, production-ready products that combine technical depth with practical impact.
        </p>
        <p class="text-lg leading-8 text-slate-300">
          I am especially interested in building systems that help people, from accessibility-focused applications to data-driven business software and AI-powered experiences. I learn continuously, collaborate closely with teams, and focus on delivering value with clean, resilient engineering.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="120" class="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
        <div class="space-y-5">
          <div v-for="item in highlights" :key="item.label" class="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
            <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-xl">
              {{ item.icon }}
            </div>
            <div>
              <div class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ item.label }}</div>
              <div class="mt-1 text-lg font-semibold text-white">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  { icon: '🎓', label: 'Education', value: 'Computer Engineering' },
  { icon: '📱', label: 'Focus', value: 'Mobile & Full-Stack' },
  { icon: '🤖', label: 'Interest', value: 'AI & Computer Vision' },
  { icon: '🚀', label: 'Mindset', value: 'Continuous Learning' }
]
</script>
