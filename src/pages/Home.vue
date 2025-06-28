<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <Navbar />
    <section class="max-w-6xl mx-auto pt-28 px-6">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <!-- Left: Text -->
        <div class="w-full md:w-[48%]">
          <h2 class="text-xl mb-2 text-white">Hello It's Me</h2>
          <h1 class="text-5xl font-extrabold mb-2 text-white">Fitsum Teshome</h1>
          <h3 class="text-2xl mb-4 text-white">And I'm a <span class="text-cyan-400 font-bold">Web Developer</span></h3>
          <p class="mb-6 text-gray-300">
            I'm a passionate web developer with experience in building modern, responsive websites and web apps. I love working with Vue, Tailwind CSS, and other modern tools to create beautiful user experiences.
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <!-- Facebook -->
            <a href="https://facebook.com/yourprofile" target="_blank" aria-label="Facebook">
              <svg class="w-7 h-7 text-white hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0"/></svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
              <svg class="w-7 h-7 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <!-- Instagram -->
            <a href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram">
              <svg class="w-7 h-7 text-white hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <!-- Roboflow -->
            <a href="https://roboflow.com/yourprofile" target="_blank" aria-label="Roboflow">
              <svg class="w-7 h-7 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#0A0A23"/><path d="M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18.182A8.182 8.182 0 1 1 16 7.818a8.182 8.182 0 0 1 0 16.364z" fill="#00BFFF"/></svg>
            </a>
            <!-- Kaggle -->
            <a href="https://kaggle.com/yourprofile" target="_blank" aria-label="Kaggle">
              <svg class="w-7 h-7 text-white hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M21.548 20.469h-2.229l-5.548-7.469 5.548-7.469h2.229l-5.548 7.469zm-7.548-7.469l-5.548 7.469h-2.229l5.548-7.469-5.548-7.469h2.229z"/></svg>
            </a>
            <!-- Unstop -->
            <a href="https://unstop.com/yourprofile" target="_blank" aria-label="Unstop">
              <svg class="w-7 h-7 text-white hover:text-green-400" fill="currentColor" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#0A0A23"/><path d="M16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14.545A6.545 6.545 0 1 1 16 9.455a6.545 6.545 0 0 1 0 13.09z" fill="#00FF99"/></svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
              <svg class="w-7 h-7 text-white hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.354c.417-.646 1.184-1.354 2.25-1.354 1.657 0 3 1.343 3 3v7z"/></svg>
            </a>
          </div>
        </div>
        <!-- Right: Profile Image -->
        <div class="w-full md:w-[48%] flex justify-center md:justify-end">
          <div class="relative flex justify-center items-center">
            <div class="absolute inset-0 rounded-full bg-cyan-500 opacity-60 blur-2xl w-72 h-72"></div>
            <img :src="profileImg" alt="Profile" class="relative w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl z-10" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-3xl mx-auto py-12 px-4" id="about">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-2">
        I'm a passionate web developer with experience in building modern, responsive websites and web apps. I love working with Vue, Tailwind CSS, and other modern tools to create beautiful user experiences.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="max-w-3xl mx-auto py-12 px-4" id="skills">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h2>
      <div class="grid grid-cols-3 gap-6">
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">Vue.js</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">React</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">Node.js</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2 bg-white rounded" />
          <span class="text-gray-700 dark:text-gray-300">Express</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">MongoDB</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">MySQL</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">JavaScript</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-6 h-6 max-w-[24px] max-h-[24px] mb-2" />
          <span class="text-gray-700 dark:text-gray-300">TypeScript</span>
        </div>
      </div>
    </section>
    <!-- End Skills Section -->

    <!-- Projects Section -->
    <section class="max-w-5xl mx-auto py-12 px-4" id="projects">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
      <div class="grid grid-cols-2 gap-8">
        <!-- Project 1: Music Manager -->
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col items-start">
          <img :src="project2Img" alt="Music Manager" class="w-auto h-28 max-w-[220px] mx-auto object-contain rounded mb-2" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Music Manager</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A MERN stack project to manage personal music collections with four classes and storage features.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/FisumTeshome/MusicManager" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
            <a href="https://music-manager-drab.vercel.app/" target="_blank" class="text-green-600 hover:underline">Live Site</a>
          </div>
        </div>
        <!-- Project 2: Student Data Management -->
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col items-start">
          <img :src="project1Img" alt="Student Data Management" class="w-auto h-28 max-w-[220px] mx-auto object-contain rounded mb-2" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Student Data Management</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A full stack web application for managing student data, built with React frontend and Node.js + MySQL backend.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/FisumTeshome/StudentInfo" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
            <a href="#" target="_blank" class="text-green-600 hover:underline">Live Site</a>
          </div>
        </div>
        <!-- Project 3: Assistive Navigation Mobile App -->
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col items-start">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Assistive Navigation App" class="w-auto h-28 max-w-[220px] mx-auto object-contain rounded mb-2" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Assistive Navigation Mobile App</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A mobile app that uses the camera to detect obstacles and provides audio feedback to help visually impaired users navigate to their destination.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/FisumTeshome/StudentInfo" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
            <a href="#" target="_blank" class="text-green-600 hover:underline">Live Site</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="max-w-3xl mx-auto py-12 px-4" id="contact">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact</h2>
      <form class="flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" class="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
        <input type="email" placeholder="Your Email" class="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
        <textarea placeholder="Your Message" rows="4" class="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
        <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import profileImg from '../assets/fish.jpg'
import project1Img from '../assets/image2.jpg'
import project2Img from '../assets/musics.jpg'
</script> 