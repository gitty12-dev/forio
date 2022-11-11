<script setup lang="ts">

</script>

<template>
	<header id="home" class="bg-warning">
		<div class="title">Y.E Portfolio App</div>

		<ul id="page-link">
			<li><a href="#Skill">Slill</a></li>
		</ul>
	</header>

  
</template>

<style scoped>
#home {
	height: 10rem;
}

#page-link{
  display: flex;
  justify-content: center;
  padding: 20px;
}

#page-link li{
  list-style: none;
}

#page-link li a{
  color: #333;
  padding:0 20px;
  text-decoration: none;
}

#page-link li a::before{
  content: 'O';
  font-size: 0.8rem;
  padding: 0 10px 0 0;
  color: #ccc;
}
</style>
