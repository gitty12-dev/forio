<script setup lang="ts">


interface Props {
  item: {
    title: string,
    img: string,
    url: string,
    detail: string;
  }
}
defineProps<Props>();


</script>

<template>
	<div id="work" class="d-flex flex-column justify-content-center align-items-center border">
    <h2 class="work-title">{{item.title}}</h2>
    <a :href="item.url"><img class="work-img" :src="item.img" /></a>
    <p class="work-detail">{{item.detail}}</p>
  </div>
</template>

<style scoped>
#work {
	height: auto;
  padding: 0.5rem;
}
.work-title {
  padding-bottom: 0.5rem;
}
.work-img {
  height: 50px;
}
.work-detail {
  padding-top: 0.5rem;
}

@media screen and (max-width:740px) {
	.work-detail {
		padding: 0.5rem 2rem 0 2rem;
	}
}
</style>
