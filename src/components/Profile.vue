﻿<script setup lang="ts">
import json from '../assets/my_data.json'
const techs = json.tech;
defineProps<{ job: string }>()

</script>

<template>
	<div id="profile" class="d-flex flex-column">
		<h1><img class="icon-title" src="../assets/icon/icon_profile.svg"/>Profile</h1>
		<div class="profile-contents">
			<div class="my-image-div">
				<img src="../assets/img/profile_image.png" alt="My logo" />
			</div>
			<div class="my-detail-div d-flex flex-column">
				<span class="fs-5 pb-1"> 職業：{{ job }} </span>
				<p>はじめまして、システムエンジニアの"Gitty"と申します。IT業界での社会人歴は6年目です。<br>
					新卒では中小企業の受託開発企業に入社し、現在は準委任契約で案件をいただき、
					設計～開発・運用保守など幅広いITスキルを基に、フルスタックエンジニアを目指して日々精進しております。
				</p>
				<div class="my-tech-list">
					<div v-for='tech in techs' class="my-tech">
						<img :src="tech"/>
					</div>
				</div>
			</div>
		</div>
	</div>
  
</template>

<style scoped>
#profile {
	/* height: 12rem; */
	padding: 3rem 3rem 0 3rem;
}
.profile-contents {
	display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
	align-items: center;
  width: 100%;
}
.my-image-div {
	width: 35%;
}
.my-image-div img {
	height: 100%;
	width: 100%;
	max-height: 250px;
	max-width: 250px;
	object-fit: cover;
}
.my-detail-div {
	width: 60%;
	text-align: left;
}
.my-tech-list {
	display: flex;
  flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
.my-tech img {
	height: 50px;
	width: auto;
	padding: 0.1rem 0.2rem;
}
@media screen and (max-width:740px) {
	.my-image-div {
		width: 100%;
		padding-bottom: 1.5rem;
	}
	.my-detail-div {
		width: 100%;
	}
	.my-image-div img {
		max-height: 150px;
		max-width: 150px;
	}
}
</style>
