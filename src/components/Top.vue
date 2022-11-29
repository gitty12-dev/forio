<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap'

const isTop = ref(true);
const lines = ref([{ phrase: "Y.E" },{ phrase: "Portforio" },{ phrase: "App" }]);
// テキストの初期状態
const textBeforeEnter = (el:any) => {
  gsap.set(el, {
    y: "-100%",
    opacity: 0
  })
};

// テキストが上から下へ移動するアニメーション
const textEnter = (el:any) => {
  gsap.to(el, {
    opacity: 1,
    duration: 0.3,
    y: "0",
    ease: "bounce.out",
    // テキストを0.4秒ずつずらして上から下へ移動
    delay: 1 + 0.4 * (lines.value.length - el.dataset.index),
  });
  gsap.to(".top-back", {
    opacity: 0,
    duration: 1,
    y: "0",
    ease: "ease",
    delay: 3,
    onComplete: afterTextEnter,
  });
}

const afterTextEnter = (el:any) => {
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
	background: rgba(255,255,255,0.9);
	position: fixed;
	inset: 0;
  margin: auto;
	height: 100%;
	width: 100%;
	z-index: 9000;

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
