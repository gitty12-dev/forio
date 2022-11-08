<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ job: string }>()

const count = ref(0)
</script>

<template>
	<div id="title" class="d-flex justify-content-center align-items-center">
		<img class="my-image" src="../assets/my_image.png" alt="My logo" />
		<div class="d-flex flex-column">
			<span class="fs-2"> title </span>
			<span class="fs-5"> {{ job }} </span>
		</div>
	</div>

  
</template>

<style scoped>
#title {
  height: 5px;  /* TODO:çÇÇ≥ïœÇÌÇÒÇ»Ç¢ */
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
