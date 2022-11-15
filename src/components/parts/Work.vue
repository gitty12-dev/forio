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
    <div class="work-title">{{item.title}}</div>
    <a :href="item.url"><img class="work-img" :src="item.img" /></a>
    <p class="work-detail">{{item.detail}}</p>
  </div>
</template>

<style scoped>
#work {
	height: auto;
}
.work-title {
  font-size: 1.2rem;
  padding: 1rem 0;
}
.work-img {
  height: 50px;
}
</style>
