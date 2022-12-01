<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap'

// 【0.共通】
const moveTopPage = () => {
  window.scrollTo({top: 0, behavior:'smooth'});
}


// 【1.初期画面設定】
const isTop = ref(true);
const lines = ref([{ phrase: "Y.E" },{ phrase: "Portforio" },{ phrase: "App" }]);

// テキストの初期状態
const textBeforeEnter = (el:any) => {
  gsap.set(el, {
    y: "-100%",
    opacity: 0
  });
};

// テキストが上から下へ移動するアニメーション
const textEnter = (el:any) => {
  gsap.to(el, {
    onStart: moveTopPage
  });
  gsap.to(el, {
    opacity: 1,
    duration: 0.3,
    y: "0",
    ease: "bounce.out",
    // テキストを0.4秒ずつずらして上から下へ移動
    delay: 0.8 + 0.4 * (el.dataset.index),
  });
  gsap.to(".top-back", {
    opacity: 0,
    duration: 1,
    y: "0",
    ease: "ease",
    delay: 2.5,
    onComplete: afterTextEnter,
  });
}

const afterTextEnter = () => {
  isTop.value = false;
}
</script>

<template>
  <transition-group tag="div" appear
    @before-enter="textBeforeEnter"
    @enter="textEnter"
    class="top-back" v-show="isTop">
    <div v-for="(line, index) in lines" :key="line.phrase" class="top-phrase" :data-index="index">
      <div> 
          {{ line.phrase }}
      </div>
    </div>
  </transition-group>
</template>

<style scoped>
.top-back {
	background: rgba(255,255,255,1);
	position: fixed;
	inset: 0;
  margin: auto;
	height: 100%;
	width: 100%;
	z-index: 8000;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top-phrase {
  font-size: 4rem;
  font-family: 'Anton';
  width: 100%;
  color: black;
}
</style>
