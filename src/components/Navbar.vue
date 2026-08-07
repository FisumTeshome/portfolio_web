<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="#home" class="flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-sm font-black text-white shadow-lg shadow-cyan-500/30">
          <span class="font-mono text-[0.7rem]">&lt;FT/&gt;</span>
        </div>
      </a>

      <nav class="hidden items-center gap-8 md:flex">
        <a v-for="item in menuItems" :key="item.label" :href="item.href" class="text-sm text-slate-300 transition hover:text-white">{{ item.label }}</a>
      </nav>

      <div class="hidden md:block">
        <a href="#contact" class="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/20">
          Let’s Talk
        </a>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span v-if="!isMenuOpen" class="text-xl">☰</span>
        <span v-else class="text-xl">✕</span>
      </button>
    </div>

    <transition name="fade-overlay">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-black/50 md:hidden"
        @click="closeMenu"
      ></div>
    </transition>

    <transition name="drawer-slide">
      <aside
        v-if="isMenuOpen"
        class="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-[#020817]/95 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur-xl md:hidden"
      >
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-[0.68rem] font-black text-white shadow-lg shadow-cyan-500/30">
              &lt;FT/&gt;
            </div>
          </div>
          <button type="button" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-200" @click="closeMenu" aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav class="mt-6 flex flex-col gap-2">
          <a
            v-for="item in menuItems"
            :key="item.label"
            :href="item.href"
            class="group flex items-center justify-between gap-3 rounded-2xl border border-transparent px-3 py-3 text-left text-base font-medium text-slate-200 transition hover:border-cyan-400/20 hover:bg-cyan-500/5"
            @click.prevent="handleNavClick(item.href)"
          >
            <span class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-sm text-cyan-300">{{ item.icon }}</span>
              {{ item.label }}
            </span>
            <span class="text-slate-500 transition group-hover:text-cyan-300">→</span>
          </a>
        </nav>

        <div class="mt-auto space-y-3 border-t border-white/10 pt-5">
          <a href="#contact" class="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20" @click="closeMenu">
            Contact Me
          </a>
          <a :href="cvUrl" download="Fitsum-Teshome-CV.pdf" class="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100">
            Download CV
          </a>
        </div>
      </aside>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import cvUrl from '../assets/fitsumresume.pdf'

const menuItems = [
  { label: 'Experience', href: '#experience', icon: '💼' },
  { label: 'About Me', href: '#about', icon: '👤' },
  { label: 'Skills', href: '#skills', icon: '🧠' },
  { label: 'Projects', href: '#projects', icon: '📁' },
  { label: 'Contact', href: '#contact', icon: '✉️' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleNavClick = (href) => {
  closeMenu()
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.25s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

.fade-overlay-enter-to,
.fade-overlay-leave-from {
  opacity: 1;
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.28s ease;
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}

.drawer-slide-enter-to,
.drawer-slide-leave-from {
  transform: translateX(0);
}
</style>