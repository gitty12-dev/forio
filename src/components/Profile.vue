<script setup lang="ts">

defineProps<{ job: string }>()

</script>

<template>
	<div id="profile" class="d-flex flex-column justify-content-center align-items-center border">
		<h1>~ Profile ~</h1>
		<div class="d-flex flex-row">
			<img class="my-image" src="../assets/svg_icon.svg" alt="My logo" />
			<div class="d-flex flex-column">
				<span class="fs-2"> title </span>
				<span class="fs-5"> {{ job }} </span>
			</div>
		</div>
	</div>
  
</template>

<style scoped>
#profile {
	height: 10rem;
}
.my-image {
	height: 50px;
}
</style>
