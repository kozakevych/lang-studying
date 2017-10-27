<template>

	<div class="viever-js">
		
    <div class="blog-post">
  
  
    

  <router-view />
  <back-to-top text="Вгору" id="back-to-top" v-if="$route.path !== '/js-course/'"></back-to-top>


 	</div>
</div>
</template>


<script>
  export default {
    name: 'js-course'
  }
</script>

<style>
  pre {
    display: inline-block;
    padding: 20px;
    color: #afeaff;
    background: #243b60;
    width: 100%
  }

  .course-name {
    font-family: "Comic Sans MS", cursive, sans-serif;
  }

  .vue-back-to-top {
    position: fixed;
    left: 30px;
    opacity: .8;
  }
  
  #back-to-top {
    width: 60px;
  }
  
  .vue-back-to-top:hover {
    position: fixed;
    left: 30px;
    opacity: 1;
  }
</style>

