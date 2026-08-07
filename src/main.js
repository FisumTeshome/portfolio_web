import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './style.css'

AOS.init({
  duration: 900,
  once: true,
  offset: 40,
  easing: 'ease-out-cubic'
})

createApp(App).mount('#app')
