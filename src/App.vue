<script setup lang="ts">
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Works from './components/Works.vue'
import Hobby from './components/Hobby.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <main>
    <Home />
    <Profile job="System Engineer" />
    <Skill />
    <Works />
    <Hobby />
    <Contact />
  </main>
</template>

<style scoped>
main {
  background-color: rgb(207, 196, 182);
  margin: 0.2rem;
}
</style>
