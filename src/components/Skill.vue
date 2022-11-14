<script setup lang="ts">
import json from '../assets/skill.json'

const skillss = json.skill;

</script>

<template>
	<div id="skill" class="d-flex flex-column justify-content-center align-items-center border">
		<h1>~ Skill ~</h1>
		<!-- TODO:選択したら表示/非表示 切替できるようにする -->
		<div v-for='skills in skillss' v-if='true' class="skill-table">
			<h2> {{ skills.category }} </h2>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>No</th>
						<th>language</th>
						<th>level</th>
					</tr>
				</thead>
				<tbody v-for='skill in skills.list'>
					<tr>
						<th> {{ skill.id }}</th>
						<th> {{ skill.name }}</th>
						<th> {{ skill.level }}</th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
  
</template>

<style scoped>
#skill {
	height: 30rem;
}
.skill-table{
	border: 1px;
	width:-moz-fit-content; /* Firefox */
  width:fit-content; /* other browsers */
}
</style>
