<template>

  <div class="main">


           <div class="jumbotron">
        <h3 class="display-5">Вивчайте програмування вже сьогодні</h3>
        <p class="lead">Цікавитеся програмуванням ?</p>
        <p><a class="btn btn-lg btn-success" href="#" role="button">Увійти</a></p>
      </div>



     <div class="row">
        <div class="col-lg-4">
          <img class="rounded-circle" src="../assets/js-logo.jpg" alt="Generic placeholder image" width="140" height="140">
          <h2>JavaScript</h2>
          <p>Широко розповсюджена мова веб програмування, яка забезпечує динамічну поведінку елементів на більшості веб-сайтів.</p>
          <p><a class="btn btn-secondary" href="/js-course/" role="button">Перейти до курсу &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="rounded-circle" src="../assets/python-logo.jpg" alt="Generic placeholder image" width="140" height="140">
          <h2>Python</h2>
          <p>Python - інтерпретована об'єктно-орієнтована мова програмування високого рівня з строгою динамічною типізацією.</p>
          <p><a class="btn btn-secondary" href="#" role="button">Перейти до курсу &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="rounded-circle" src="../assets/ts-logo.png" alt="Generic placeholder image" width="140" height="140">
          <h2>TypeScript</h2>
          <p>Мова програмування, представлена Microsoft восени 2012, позиціонується як засіб розробки веб-застосунків, що розширює можливості JavaScript.</p>
          <p><a class="btn btn-secondary" href="#" role="button">Перейти до курсу &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->


  </div>
</template>

<script>
export default {
  name: 'main-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


.jumbotron {
  color: white;
  background: url(../assets/preview-background.jpg);
}


</style>
