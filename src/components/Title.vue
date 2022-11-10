<script setup lang="ts">

defineProps<{ job: string }>()

</script>

<template>
	<div id="title" class="d-flex justify-content-center align-items-center bg-warning">
		<div>
			<img class="my-image" src="../assets/svg_icon.svg" alt="My logo" />
		</div>
		<div class="d-flex flex-column">
			<span class="fs-2"> title </span>
			<span class="fs-5"> {{ job }} </span>
		</div>
	</div>

  
</template>

<style scoped>
#title {
	height: 10rem;
}
.my-image {
	height: 100px;
	width: 100px;
}
</style>
