<script setup lang="ts">
import Navvar from './parts/Navvar.vue'
</script>

<template>
	<header id="home" class="f-flex justify-content-center align-items-center">
		<div id="title">Y.E Portfolio App</div>
    <Navvar position="justify-content-end"/>
    
	</header>

  
</template>

<style scoped>
#home {
	/* height: 100px; */
  padding: 0.5rem;
  background-color: #F97111;
}

#title {
  font-size: 3rem;
  font-family: 'Anton';
  text-align: left;
  margin-left: 1rem;
}

</style>
