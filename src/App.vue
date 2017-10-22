<template>
  <div id="app">

<div class="container">

<nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <a class="navbar-brand" href="/">PC Genius</a>
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
                <a class="dropdown-item disabled" href="#">Python</a>
                <a class="dropdown-item disabled" href="#">TypeScript</a>
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
        <ul class="contact-info">
          <li><a href="https://github.com/kozakevych" target="_blank"><img class="logo" src="./assets/git.svg" alt="GitHub Logo"></a></li>
          <li><a href="https://facebook.com/andrii.kozakevych" target="_blank"><img class="logo" src="./assets/fb.png" alt="Facebook Logo"></a></li>
          <li><a href="https://linkedin.com/in/kozakevych" target="_blank"><img class="logo" src="./assets/linkedin.png" height="240" width="240" alt="LinkedIn Logo"></a></li>
        </ul>

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
  margin: 10px 0px;
  padding: 20px;
  color: white;
}


.logo {
  height: 30px;
  width: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


</style>
