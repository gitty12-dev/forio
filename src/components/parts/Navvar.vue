<script setup lang="ts">

interface Props {
  position: string
}
defineProps<Props>();

</script>

<template>
	<nav class="navbar navbar-expand">
    <div class="d-flex collapse navbar-collapse" :class="position">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#profile'">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#skill'">Skill</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#works'">Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
ul li a {
  color: #285943;
}
</style>
