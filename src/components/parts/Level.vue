<script setup lang="ts">

interface Props {
  level: number
}
defineProps<Props>();

function getLevelImage(level: number):string {
  let strLevel:string = ""
  switch (level) {
    case 1:
      strLevel = "★☆☆☆☆";
      break;
    case 2:
      strLevel = "★★☆☆☆";
      break;
    case 3:
      strLevel = "★★★☆☆";
      break;
    case 4:
      strLevel = "★★★★☆";
      break;
    case 5:
      strLevel = "★★★★★";
      break;
    default:
      strLevel = "☆☆☆☆☆";
  }
  return strLevel;
}

</script>

<template>
	<th> {{ getLevelImage(level) }} </th>
</template>

<style scoped>
</style>
