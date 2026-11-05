<template>
  <section id="skills" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-14">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Skills</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Machine learning, AI systems, and full-stack product engineering.</h2>
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
    title: 'Machine Learning',
    icon: '🧠',
    skills: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Model Training', 'Feature Engineering', 'Evaluation', 'Inference']
  },
  {
    title: 'AI & Computer Vision',
    icon: '🤖',
    skills: ['Computer Vision', 'Deep Learning', 'CNN', 'YOLO', 'Image Processing', 'Object Detection', 'NLP', 'AI Solutions']
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Visualization', 'EDA', 'SQL', 'Statistics', 'A/B Testing']
  },
  {
    title: 'Mobile & Product',
    icon: '📱',
    skills: ['Flutter', 'React Native', 'Vue', 'JavaScript', 'TypeScript', 'Firebase', 'REST APIs', 'UI/UX']
  },
  {
    title: 'Backend & Systems',
    icon: '⚙️',
    skills: ['Node.js', 'Python', 'Go', 'APIs', 'Architecture', 'Auth', 'Database Design', 'Cloud Services']
  },
  {
    title: 'MLOps & Deployment',
    icon: '🚀',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Model Deployment', 'Linux', 'Cloud', 'Monitoring', 'Automation']
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    skills: ['VS Code', 'Git', 'Jupyter', 'Postman', 'Figma', 'Linux', 'Notebooks', 'Testing']
  },
  {
    title: 'Professional Strengths',
    icon: '🤝',
    skills: ['Problem Solving', 'Teamwork', 'Communication', 'Research', 'Documentation', 'Mentoring', 'Leadership']
  }
]
</script>
