<script setup lang="ts">

defineProps<{ job: string }>()

</script>

<template>
	<div id="profile" class="d-flex flex-column">
		<h1><img class="icon-title" src="../assets/icon_profile.svg"/>Profile</h1>
		<div class="d-flex flex-row align-items-center">
			<img class="my-image" src="../assets/svg_icon.svg" alt="My logo" />
			<div class="my-detail d-flex flex-column">
				<span class="fs-5 pb-1"> Job:{{ job }} </span>
				<p>はじめまして、システムエンジニアの"Gitty"と申します。IT業界での社会人歴は5年目です。<br>
					新卒では中小企業の受託開発企業に入社し、現在はフリーランスエンジニアとして、
					設計～開発・運用保守など幅広いITスキルを基に、フルスタックエンジニアを目指して日々精進しております。
					(2022年11月24日更新)
				</p>
			</div>
		</div>
	</div>
  
</template>

<style scoped>
#profile {
	/* height: 12rem; */
	padding: 3rem 0;
}
.my-image {
	width: 30%;
	height: 50px;
}
.my-detail {
	width: 70%;
	text-align: left;
}
</style>
