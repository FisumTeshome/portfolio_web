<template>
  <section id="certificates" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Certificates</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Verified learning and professional certificates.</h2>
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <a
        v-for="cert in certificates"
        :key="cert.title"
        :href="cert.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
        class="group block rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
      >
        <div class="flex items-center justify-between gap-3">
          <span class="text-xl">🏅</span>
          <span class="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">{{ cert.year }}</span>
        </div>

        <h3 class="mt-4 text-xl font-bold text-white">{{ cert.title }}</h3>
        <p class="mt-2 text-sm text-slate-300">{{ cert.provider }}</p>

        <div class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
          View certificate
          <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const certificates = [
  {
    title: 'AI Programming',
    provider: 'Udacity',
    year: '2024',
    pdf: new URL('../cirtificates/Learn_the_Latest_Tech_Skills_AI_Advance_Your_Career_Udacity (2).pdf', import.meta.url).href
  },
  {
    title: 'Data Analysis',
    provider: 'Udacity',
    year: '2024',
    pdf: new URL('../cirtificates/Learn_the_Latest_Tech_Skills_of_DataAnalisis_Advance_Your_Career (2).pdf', import.meta.url).href
  },
  {
    title: 'Android Development',
    provider: 'Udacity',
    year: '2024',
    pdf: new URL('../cirtificates/Learn_the_Latest_Tech_Skills;_Advance_Your_Career_Udacity_for_android (2).pdf', import.meta.url).href
  },
  {
    title: 'Machine Learning Foundations',
    provider: 'Udacity',
    year: '2023',
    pdf: new URL('../cirtificates/Learn the Latest Tech Skills; Advance Your Career _ Udacity (2).pdf', import.meta.url).href
  },
  {
    title: 'Programming in Python',
    provider: 'Coursera',
    year: '2023',
    pdf: new URL('../cirtificates/Coursera DJCNCQGAKXME (2).pdf', import.meta.url).href
  },
  {
    title: 'Python Data Structures',
    provider: 'Coursera',
    year: '2023',
    pdf: new URL('../cirtificates/Coursera Z2F573HCCTEG (2).pdf', import.meta.url).href
  },
  {
    title: 'Python for Everybody',
    provider: 'Coursera',
    year: '2023',
    pdf: new URL('../cirtificates/Coursera CUP52PPV8Y3F (2).pdf', import.meta.url).href
  }
]
</script>
