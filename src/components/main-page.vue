<template>

  <div class="main">


           <div class="jumbotron">
        <h3 class="display-5">Вивчайте програмування вже сьогодні</h3>
        <p class="lead">Цікавитеся програмуванням ? Спробуйте один із наших курсів, зробіть перший крок, для того щоб стати крутим розробником.</p>
        <p><a class="btn btn-lg btn-success" href="#" role="button">Увійти</a></p>
      </div>



 <div class="row">
        <div class="col-lg-4">
          <img class="rounded-circle" src="../assets/js-logo.jpg" alt="Generic placeholder image" width="140" height="140">
          <h2>JavaScript</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a class="btn btn-secondary" href="/js-content" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="rounded-circle" src="../assets/python-logo.jpg" alt="Generic placeholder image" width="140" height="140">
          <h2>Python</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="rounded-circle" src="../assets/ts-logo.png" alt="Generic placeholder image" width="140" height="140">
          <h2>TypeScript</h2>
          <p>Donec sed odio dui. </p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->

    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

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

li {
  display: inline-block;
  margin: 0 10px;
}

.jumbotron {
  color: white;
  background: url(../assets/jumbotron-background.jpg);
}


</style>
