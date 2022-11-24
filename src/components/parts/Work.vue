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
	<div id="work" class="d-flex flex-column justify-content-center align-items-center">
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
</style>
