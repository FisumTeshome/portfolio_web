<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 antialiased">
    <Navbar />

    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <FeaturedProjects />
      <MachineLearningSection />
      <FlutterSection />
      <SkillsSection />
      <GitHubProjects />
      <Certifications />
      <Education />
      <Hobbies />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import MachineLearningSection from '../components/MachineLearningSection.vue'
import FlutterSection from '../components/FlutterSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import GitHubProjects from '../components/GitHubProjects.vue'
import Certifications from '../components/Certifications.vue'
import Education from '../components/Education.vue'
import Hobbies from '../components/Hobbies.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/Footer.vue'
</script>