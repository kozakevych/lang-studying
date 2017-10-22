<template>
  <div id="app">

<div class="container">

<nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <a class="navbar-brand" href="/">Навчальна платформа</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Головна<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Курси</a>
              <div class="dropdown-menu" aria-labelledby="dropdown09">
                <a class="dropdown-item" href="/js-content">JavaScript</a>
                <a class="dropdown-item" href="#">Python</a>
                <a class="dropdown-item" href="#">TypeScript</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="templates/sign-in.html">Увійти</a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="templates/sign-in.html">English</a>
            </li>
          </ul>
        </div>
      </nav>

 
    <router-view/>


    <footer class="footer bg-dark rounded navbar-fixed-bottom">
      <div class="container">
        <span>Львів 2017</span>
      </div>
    </footer>


</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body, #app, .container {

  height: 100%;
}

body {
  background: url(assets/main-background.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin: 10px 0px;
}

.footer {
  padding: 20px;
  color: white;
}
</style>
