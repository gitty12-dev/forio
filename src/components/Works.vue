<script setup lang="ts">
import Work from './parts/Work.vue'
import json from '../assets/my_data.json'
const works = json.work;

</script>

<template>
	<div id="works" class="d-flex flex-column justify-content-center align-items-center">
		<h1><img class="icon-title" src="../assets/icon/icon_works.svg"/>Works</h1>
		<div class="work-contents">
			<div v-for='work in works' class="work-div">
				<Work :item=work />
			</div>
		</div>
  </div>
</template>

<style scoped>
#works {
	/* height: 20rem; */
	padding-top: 3rem;
}
.work-contents {
	display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
}
.work-div {
  width: calc(100% / 3 - 0.2rem);
	margin-bottom: 1rem;
	padding-bottom: 0.5rem;
}
@media screen and (max-width:740px) {
	.work-div {
		width: calc(100% - 1rem);
		margin: 0 1rem;
	}
}
</style>
