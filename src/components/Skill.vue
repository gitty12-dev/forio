<script setup lang="ts">
import { ref } from 'vue';
import json from '../assets/my_data.json'
import Level from './parts/Level.vue'
const skillss = json.skill;

const isCategory = ref(false);

const showCategory = () => {
	isCategory.value = isCategory.value ? false : true;
} 
</script>

<template>
	<div id="skill" class="d-flex flex-column justify-content-center align-items-center">
		<h1><img class="icon-title" src="../assets/icon_skill.svg"/>Skill</h1>
		<div class="skill-contents">
			<div v-for="skills in skillss" class="skill-table border rounded">
				<a class="btn" @click="showCategory"><h2>{{ skills.category }}</h2></a>
				<div v-if="isCategory">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th>No</th>
								<th>language</th>
								<th>level</th>
							</tr>
						</thead>
						<tbody v-for="(skill, index) in skills.list">
							<tr>
								<th> {{ index + 1 }}</th>
								<th> {{ skill.name }}</th>
								<Level :level="skill.level" />
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
  
</template>

<style scoped>
#skill {
	/* height: 30rem; */
	padding-top: 3rem;
}
.skill-contents {
	display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
}
.skill-table {
  width: calc(100% / 2 - 0.5rem);
	border: 1px;

	margin-bottom: 1rem;
	padding: 0.2rem;
}

@media screen and (max-width:480px) {
	.skill-table {
		width: calc(100% - 1.5rem);
	}
}

</style>
