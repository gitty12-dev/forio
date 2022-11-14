<script setup lang="ts">

</script>

<template>
	<header id="home" class="f-flex justify-content-center align-items-center bg-warning">
		<div id="title">Y.E Portfolio App</div>

    <!-- TODO:ナビゲーション形式で表示する -->
		<ul id="page-link">
			<li><a href="#skill">Skill</a></li>
			<li><a href="#works">Works</a></li>
			<li><a href="#hobby">Hobby</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</header>

  
</template>

<style scoped>
#home {
	/* height: 100px; */
  padding: 0.5rem;
}

#title {
  font-size: 2rem;
  font-family: 'Anton';
  text-align: left;
}

#page-link{
  display: flex;
  justify-content: right;
  padding: 1rem 0;
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
  color: #333;
}
</style>
