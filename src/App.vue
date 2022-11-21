<script setup lang="ts">
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <Home />
    <Profile job="System Engineer" />
    <Skill />
    <Works />
    <Contact />
    <Footer />
  </main>
</template>

<style scoped>
main {
  background-color: #FEF2E8;
  margin: 0.2rem;
}
</style>
