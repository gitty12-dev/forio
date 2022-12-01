<script setup lang="ts">
import { ref } from 'vue';
import json from '../assets/my_data.json'
import Level from './parts/Level.vue'
const skillss = json.skill;

const isTabletWidth = window.matchMedia('(max-width:740px)').matches;
const isCategory = isTabletWidth ?
										ref([...Array(skillss.length)].map(v => false)):
										ref([...Array(skillss.length)].map(v => true));
const showCategory = (idx: number) => {
	if (isTabletWidth) {
		isCategory.value[idx] = isCategory.value[idx] ? false : true;
	}
} 
</script>

<template>
	<div id="skill" class="d-flex flex-column justify-content-center align-items-center">
		<h1><img class="icon-title" src="../assets/icon_skill.svg"/>Skill</h1>
		<div class="skill-contents">
			<div v-for='(skills,index) in skillss' class="skill-table">
				<a class="btn skill-button" @click="showCategory(index)">
					<h2>{{ skills.category }}</h2>
				</a>
				<div v-if="isCategory[index]">
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
	border: 1px solid;
	border-color: #77AF9C;
	border-radius: 4px;
	box-shadow: 3px 3px 3px #77AF9C;
	margin-bottom: 1rem;
	padding: 0.2rem;
}
.skill-button {
	width: 100%;
	pointer-events: none;
}

@media screen and (max-width:740px) {
	.skill-table {
		font-size: 12px;
		width: calc(100% - 1.5rem);
	}
	.skill-button {
		pointer-events: all;
	}
	.skill-button h2 {
		margin: 0;
	}
}

</style>
