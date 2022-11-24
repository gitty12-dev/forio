<script setup lang="ts">
import json from '../assets/my_data.json'
import Level from './parts/Level.vue'
const skillss = json.skill;

</script>

<template>
	<div id="skill" class="d-flex flex-column justify-content-center align-items-center">
		<h1><img class="icon-title" src="../assets/icon_skill.svg"/>Skill</h1>
		<!-- TODO:選択したら表示/非表示 切替できるようにする -->
		<div class="skill-contents">
			<div v-for="skills in skillss" v-if='true' class="skill-table">
				<h2> {{ skills.category }} </h2>
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
  
</template>

<style scoped>
#skill {
	/* height: 30rem; */
	padding: 3rem 0;
}
.skill-contents {
	display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
}
.skill-table {
  width: calc(100% / 2 - 0.5rem);
	margin-bottom: 1rem;
}

@media screen and (max-width:480px) {
	.skill-table {
		width: calc(100% - 1.5rem);
	}
}

</style>
