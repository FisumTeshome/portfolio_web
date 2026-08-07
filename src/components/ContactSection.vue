<template>
  <section id="contact" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mb-12">
      <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Contact</p>
      <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Let’s build something meaningful.</h2>
    </div>

    <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div data-aos="fade-right" class="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
        <div class="space-y-5 text-slate-200">
          <div class="flex items-center gap-3">
            <span class="text-xl">📧</span>
            <a href="mailto:teshomefitsum616@gmail.com" class="hover:text-cyan-300">teshomefitsum616@gmail.com</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xl">📍</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xl">📞</span>
            <a href="tel:+251961637152" class="hover:text-cyan-300">+251 961637152</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xl">💼</span>
            <a href="https://www.linkedin.com/in/fits-chuna-b006b837b" target="_blank" class="hover:text-cyan-300">LinkedIn</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xl">🐙</span>
            <a href="https://github.com/FisumTeshome" target="_blank" class="hover:text-cyan-300">GitHub</a>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" class="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl shadow-slate-950/40">
        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <input v-model="form.name" type="text" placeholder="Your name" required class="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
            <input v-model="form.email" type="email" placeholder="Your email" required class="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
          </div>
          <input v-model="form.subject" type="text" placeholder="Subject" required class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
          <textarea v-model="form.message" rows="5" placeholder="Your message" required class="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"></textarea>
          <button type="submit" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry')
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  )

  window.location.href = `mailto:teshomefitsum616@gmail.com?subject=${subject}&body=${body}`

  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>
