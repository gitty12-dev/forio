<script setup lang="ts">
import Title from './components/Title.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Product from './components/Product.vue'
</script>

<template>
  <main class="">
    <Title job="System Engineer" />
    <Profile />
    <Skill />
    <Product />
  </main>
</template>

<style scoped>
main {
  background-color: rgb(207, 196, 182);
  margin: 1rem;
}
</style>
