<template>

	<div class="viever-js">
		
    <div class="blog-post">
  <nav class="breadcrumbs-content" aria-label="breadcrumb" role="navigation">
    <ol class="breadcrumb">
        <router-link to="/js-course/" class="breadcrumb-item">Повернутися до змісту</router-link>
        
        <!-- <breadcrumbs></breadcrumbs> -->
    </ol>
  </nav>
  
  
    

  <router-view />
 
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
  }
</style>

