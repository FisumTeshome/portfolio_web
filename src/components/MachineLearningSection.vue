<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Artificial Intelligence & Computer Vision</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">From data to deployment.</h2>
    </div>

    <div class="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div data-aos="fade-up" class="space-y-6">
        <p class="text-lg leading-8 text-slate-300">
          My AI work focuses on practical computer vision and deep learning systems that support accessibility, automation, and smart decision-making. I enjoy working across the full lifecycle: dataset preparation, preprocessing, annotation, training, fine-tuning, evaluation, and deployment.
        </p>

        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="step in workflow" :key="step.label" class="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div class="text-xs uppercase tracking-[0.18em] text-cyan-300">{{ step.label }}</div>
            <div class="mt-3 text-lg font-semibold text-white">{{ step.value }}</div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="120" class="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
        <div class="mb-5 text-sm uppercase tracking-[0.28em] text-slate-400">Core Expertise</div>
        <div class="space-y-5">
          <div v-for="skill in skills" :key="skill.name">
            <div class="mb-2 flex items-center justify-between text-sm text-slate-300">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="h-2.5 rounded-full bg-slate-800">
              <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workflow = [
  { label: 'Dataset', value: 'Collection & cleaning' },
  { label: 'Annotation', value: 'Labeling & structure' },
  { label: 'Training', value: 'CNN / YOLO workflows' },
  { label: 'Fine-tuning', value: 'Optimization & tuning' },
  { label: 'Evaluation', value: 'Metrics & testing' },
  { label: 'Deployment', value: 'Inference & optimization' }
]

const skills = [
  { name: 'Computer Vision', level: 92 },
  { name: 'Deep Learning', level: 88 },
  { name: 'YOLO & CNNs', level: 90 },
  { name: 'PyTorch / TensorFlow', level: 84 }
]
</script>
