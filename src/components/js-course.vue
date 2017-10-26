<template>

	<div class="viever-js">
		
    <div class="blog-post">
  
  
    

  <router-view />
 
  <vm-back-top :bottom="50" :duration="1000" :timing="'ease'" v-if="$route.path !== '/js-course/'">
    <img src="../assets/arrow-up-2.png" height="50" width="50" alt="">
  </vm-back-top>

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
</style>

