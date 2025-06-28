<template>
  <nav class="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between pr-[50px]">
      <div class="text-2xl font-extrabold text-black dark:text-white">Portfolio.</div>
      <div class="flex-1 flex justify-end items-center">
        <ul class="flex items-center space-x-[32px] text-lg font-semibold list-none m-0 p-0">
          <li>
            <a href="#" class="px-2 py-1 rounded transition text-black dark:text-white hover:text-cyan-400">Home</a>
          </li>
          <li>
            <a href="#about" class="px-2 py-1 rounded transition text-black dark:text-white hover:text-cyan-400">About</a>
          </li>
          <li>
            <a href="#services" class="px-2 py-1 rounded transition text-black dark:text-white hover:text-cyan-400">Services</a>
          </li>
          <li>
            <a href="#portfolio" class="px-2 py-1 rounded transition text-black dark:text-white hover:text-cyan-400">Portfolio</a>
          </li>
          <li>
            <a href="#contact" class="px-2 py-1 rounded transition text-black dark:text-white hover:text-cyan-400">Contact</a>
          </li>
        </ul>
        <!-- Dark/Light Mode Toggle Placeholder -->
        <button class="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-lg">
          <span class="hidden dark:inline">🌙</span>
          <span class="inline dark:hidden">☀️</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Add dark/light mode logic here later
</script> 