<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center space-y-4">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ msg }}</h1>
    <div class="card w-full flex flex-col items-center">
      <button type="button" @click="count++" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">count is {{ count }}</button>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Edit <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
    <p class="text-gray-700 dark:text-gray-400">
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="text-blue-500 hover:underline">create-vue</a>, the official Vue + Vite starter
    </p>
    <p class="text-gray-700 dark:text-gray-400">
      Learn more about IDE Support for Vue in the
      <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank" class="text-blue-500 hover:underline">Vue Docs Scaling up Guide</a>.
    </p>
    <p class="read-the-docs text-gray-500">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
