<template>

	<div class="viever-js">
		
    <div class="blog-post text-left">
  <nav aria-label="breadcrumb" role="navigation">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="../js-content">Зміст курсу JavaScript</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ 1 }}</li>
    </ol>
  </nav>

  <router-view />
  
   <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item disabled">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
	</div>
</div>
</template>


<script>
  export default {
    name: 'js-course'
  }
</script>

