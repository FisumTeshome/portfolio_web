

<template>
  <div class="bg-[#111827] min-h-screen">
    <Navbar />
    <nameSection />
  </div>
</template>

<script setup>
// import Home from './pages/Home.vue'
import { defineAsyncComponent } from 'vue';
// importing components assyncronusly
const Navbar = defineAsyncComponent(() => import('./components/Navbar.vue'));
const nameSection = defineAsyncComponent(() => import('./components/namezSection.vue'));
</script>

