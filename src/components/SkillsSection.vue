<template>
  <section id="skills" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-14">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Skills</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Engineering across product, data, and delivery.</h2>
    </div>

    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div v-for="category in categories" :key="category.title" data-aos="fade-up" class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-lg font-bold text-white">{{ category.title }}</h3>
          <span class="text-xl">{{ category.icon }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in category.skills" :key="skill" class="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2.5 py-1 text-xs uppercase tracking-[0.12em] text-slate-200">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Frontend',
    icon: '💻',
    skills: ['Vue', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Go', 'Python', 'Rust', 'REST', 'gRPC', 'JWT', 'APIs']
  },
  {
    title: 'Mobile',
    icon: '📱',
    skills: ['Flutter', 'React Native', 'Firebase', 'SQLite', 'State Management', 'Animations']
  },
  {
    title: 'AI',
    icon: '🤖',
    skills: ['Computer Vision', 'Deep Learning', 'CNN', 'YOLO', 'PyTorch', 'TensorFlow']
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite']
  },
  {
    title: 'DevOps',
    icon: '🧰',
    skills: ['Docker', 'Git', 'Linux', 'GitHub Actions', 'CI/CD']
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['VS Code', 'Figma', 'Postman', 'GitHub', 'Linux', 'Testing']
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: ['Teamwork', 'Mentoring', 'Communication', 'Problem Solving', 'Leadership']
  }
]
</script>
