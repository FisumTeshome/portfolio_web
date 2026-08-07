<template>
  <section id="experience" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-14">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Professional Experience</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Impact through production software.</h2>
    </div>

    <div class="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-violet-500/60 before:to-transparent md:before:left-1/2">
      <div v-for="(job, index) in experiences" :key="job.company" class="relative grid gap-6 md:grid-cols-2 md:items-start" :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
        <div :class="['rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40', index % 2 === 0 ? 'md:col-start-1 md:mr-6' : 'md:col-start-2 md:ml-6']">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">{{ job.role }}</p>
              <h3 class="mt-2 text-2xl font-bold text-white">{{ job.company }}</h3>
            </div>
            <div class="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              {{ job.period }}
            </div>
          </div>

          <ul class="mt-6 space-y-3 text-slate-300">
            <li v-for="point in job.points" :key="point" class="flex gap-3">
              <span class="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>

        <div class="hidden md:block">
          <div class="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300">
            <span>•</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    company: 'Dexel Software Development PLC',
    role: 'Software Engineer',
    period: 'Current',
    points: [
      'Built Flutter mobile applications for real-world business workflows and user-facing systems.',
      'Developed React Native and desktop applications for inventory and cashier platforms.',
      'Created ERP inventory and pharmacy management systems with dashboards, APIs, and reporting features.',
      'Integrated REST APIs, handled testing, bug fixing, and production deployment for stable releases.',
      'Collaborated with teams to implement features and maintain production-ready software for commercial clients.'
    ]
  },
  {
    company: 'Commercial Bank of Ethiopia',
    role: 'IS Support Engineer',
    period: 'Support',
    points: [
      'Provided technical support, troubleshooting, and incident resolution to users and departments.',
      'Handled hardware and software maintenance, network installation, and user assistance across systems.',
      'Supported security, infrastructure, and operational continuity for internal technology services.'
    ]
  }
]
</script>
