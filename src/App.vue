<template>
  <div id="app">

<div class="container">
 

      

<nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">

        <router-link :to="'/'" class="navbar-brand" href="/"><img src="./assets/pc-genius-1.png" alt="PC Genius" width="150" height="40"></router-link>
        <!-- <a class="navbar-brand" href="/"><img src="./assets/pc-genius-1.png" alt="PC Genius" width="150" height="40"></a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                         <router-link :to="'/'"
            class="btn btn-primary btn-margin">
              Головна
          </router-link>
            </li>

            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Курси</a>
              <div class="dropdown-menu" aria-labelledby="dropdown09">
                <a class="dropdown-item" href="/js-course">JavaScript</a>
                <a class="dropdown-item disabled" href="#">Python (У розробці)</a>
                <a class="dropdown-item disabled" href="#">TypeScript (У розробці)</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                  <button
            class="btn btn-primary btn-margin"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>

          <button
            class="btn btn-primary btn-margin"
            v-if="authenticated"
            @click="logout()">
              Log Out
          </button>
            </li>

          </ul>
        </div>
      </nav>

 
     
    <router-view
      :auth="auth" 
      :authenticated="authenticated"> 
    </router-view>
    
    <hr />

    <footer class="footer rounded navbar-fixed-bottom">
      <div class="container">
        <ul>

          <li>
          <ul class="contact-info">
            <li><span>Створено:</span></li>
            <li><img class="logo" src="./assets/logo.png" alt="VueJS Logo" title="VueJS"></li>
            <li><img class="logo" src="./assets/bootstrap-logo.png" alt="Bootstrap Logo" title="Bootstrap"></li>
          </ul>
          </li>
          
          <li>
          <ul class="contact-info">
            <li><span>Контакти:</span></li>
            <li><a href="https://github.com/kozakevych" target="_blank"><img class="logo black-logo" src="./assets/git.svg" alt="GitHub Logo"></a></li>
            <li><a href="https://facebook.com/andrii.kozakevych" target="_blank"><img class="logo" src="./assets/fb.png" alt="Facebook Logo"></a></li>
            <li><a href="https://linkedin.com/in/kozakevych" target="_blank"><img class="logo" src="./assets/linkedin.png" alt="LinkedIn Logo"></a></li>
          </ul>
          </li>
        </ul>
        
        <span>Львів 2017</span>
      </div>
      
    </footer>

</div>
  </div>
</template>

<script>
import AuthService from './auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
html, body {

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

.container {
  background: #f5f5f5;
  box-shadow: 0px 0px 30px 20px #f5f5f5;
}

.navbar {
  margin: 10px 0px;
}

.footer {
  margin: 20px 0px;
}

.footer ul {
  margin: 15px 0px;
}

.logo {
  height: 30px;
  width: 30px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%); 
}

.black-logo {
  -webkit-filter: contrast(30%); /* Safari 6.0 - 9.0 */
  filter: contrast(30%); 
}

.logo:hover {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
  opacity: 1;
}

ul {
  list-style-type: none;
  padding: 0;
}

footer li {
  display: inline-block;
  margin: 4px;
}

</style>
