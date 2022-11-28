<script setup lang="ts">
import Top from './components/Top.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <Top />
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
  margin: 0.2rem;
}
</style>
