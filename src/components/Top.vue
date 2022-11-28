<script setup lang="ts">
import { ref } from 'vue';

const topBackShow = ref(true);
const topLogoShow = ref(false);

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openPage() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  topLogoShow.value = true // タイトル文字表示
  await new Promise((resolve) => setTimeout(resolve, 2000));
  topLogoShow.value = false // タイトル文字表示
  topBackShow.value = false // タイトル文字表示
}

openPage();

</script>

<template>
  <transition>
    <div v-if="topBackShow" class="start">
      <!-- <p><img src="../assets/svg_icon.svg" alt=""></p> -->
      <transition>
        <p v-if="topLogoShow">test aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.start {
	background: rgba(255,255,255,0.8);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 9000;
}
.start p {
  color: black;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	/* display: none; */
	z-index: 9999;
	width: 280px;
}

.v-enter-active{
  transition: opacity 2s ease;
}
.v-leave-active {
  transition: opacity 4s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
