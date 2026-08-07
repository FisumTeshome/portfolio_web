<template>
  <section id="projects" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-14 flex items-end justify-between gap-6">
      <div>
        <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Featured Projects</p>
        <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Products that solve real problems.</h2>
      </div>
      <div class="hidden h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent md:block"></div>
    </div>

    <div class="grid gap-8">
      <article v-for="project in projects" :key="project.title" data-aos="fade-up" class="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-slate-950/40">
        <div class="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="relative min-h-[260px] overflow-hidden">
            <img :src="project.image" :alt="project.title" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/30 to-transparent"></div>
            <div class="absolute bottom-5 left-5 flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="rounded-full border border-white/20 bg-slate-900/75 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">{{ tag }}</span>
            </div>
          </div>

          <div class="p-6 sm:p-8">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
              <span class="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">{{ project.type }}</span>
            </div>

            <p class="mt-4 text-base leading-7 text-slate-300">{{ project.description }}</p>

            <div class="mt-6 space-y-3">
              <div v-for="item in project.highlights" :key="item" class="flex gap-3 text-sm text-slate-200">
                <span class="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
                <span>{{ item }}</span>
              </div>
            </div>

            <div v-if="project.contributions && project.contributions.length" class="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div class="mb-3 text-xs uppercase tracking-[0.22em] text-cyan-300">My Contributions</div>
              <ul class="space-y-2 text-sm text-slate-300">
                <li v-for="contribution in project.contributions" :key="contribution" class="flex gap-3">
                  <span class="mt-1.5 h-2 w-2 rounded-full bg-violet-400"></span>
                  <span>{{ contribution }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a :href="project.github" target="_blank" class="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">GitHub</a>
              <a :href="project.demo" target="_blank" class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]">Live Demo</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import assistiveImage from '../assets/image2.jpg'
import musicImage from '../assets/musics.jpg'

const projects = [
  {
    title: 'Assistive Mobile App (Thesis)',
    type: 'AI + Mobile',
    image: assistiveImage,
    tags: ['Flutter', 'YOLOv8', 'Computer Vision', 'Accessibility'],
    description: 'A smart navigation assistive application for visually impaired users that detects obstacles, identifies scenes, and provides voice-guided navigation support in real time.',
    highlights: [
      'Object and obstacle detection using computer vision models.',
      'Voice-guided instruction system for navigation assistance.',
      'Real-time environmental awareness for safer movement.',
      'Built with a practical human-centered design and model deployment workflow.'
    ],
    github: 'https://github.com/FisumTeshome/StudentInfo',
    demo: '#',
    contributions: []
  },
  {
    title: 'ERP Inventory Management Mobile Application',
    type: 'React Native / Enterprise',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'SQLite', 'REST API', 'Offline Sync'],
    description: 'A production enterprise mobile application developed at Dexel Software Development PLC for inventory and pharmacy management, designed to support business operations efficiently and reliably.',
    highlights: [
      'Pharmacy inventory management, product management, and stock tracking.',
      'Barcode scanning, purchase management, sales workflows, and dashboard analytics.',
      'Offline-first functionality with local SQLite storage and synchronization.',
      'Role-based access, employee management, branch management, and reporting tools.'
    ],
    github: 'https://github.com/FisumTeshome/StudentInfo',
    demo: '#',
    contributions: [
      'Developed new mobile application features for real business operations.',
      'Improved UI/UX for responsive and user-friendly mobile interfaces.',
      'Integrated REST APIs and maintained backend connectivity for production workflows.',
      'Enhanced offline-first behavior and SQLite-based local data handling.',
      'Fixed production issues and optimized application performance.',
      'Maintained production releases and collaborated with backend developers to deliver reliable updates.'
    ]
  },
  {
    title: 'Music Manager',
    type: 'MERN Stack',
    image: musicImage,
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: 'A personal music management platform with authentication, recommendations, CRUD functionality, album handling, and a responsive UI for organized music management.',
    highlights: [
      'Built with the MERN stack and responsive design principles.',
      'Supports recommendation logic and structured music catalog management.',
      'Improves personal library organization and user experience.',
      'Shows end-to-end web application development skills.'
    ],
    github: 'https://github.com/FisumTeshome/MusicManager',
    demo: 'https://music-manager-drab.vercel.app/',
    contributions: []
  },
  {
    title: 'Student Management System',
    type: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'MySQL', 'Dashboard'],
    description: 'A student information system focusing on data management and operational workflows for academic institutions.',
    highlights: [
      'Built for robust data handling and institutional record management.',
      'Developed with a modern UI and secure backend interactions.',
      'Improved understanding of application architecture and product thinking.'
    ],
    github: 'https://github.com/FisumTeshome/StudentInfo',
    demo: '#',
    contributions: []
  }
]
</script>
