<template>
	<div class="js-content">
		
<div class="jumbotron-js rounded">
        <div>
          <h1 class="display-5 course-name">JavaScript</h1>
        </div>
      </div>

<div id="accordion" role="tablist">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          1. Вступ
        </a>
      </h5>
    </div>

    <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      	У цьому розділі, ми розглянемо типи даних і вбудовані методи. Це базові поняття для будь-якого JS розробника. В кінці розділу, ви знатимете як писати код, який обраховує математичні вирази, рахує довжину слова і генерує випадкові числа. 
        <router-link to="/js-course/introduction-js">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         2. Потік керування
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
         <router-link to="/js-course/control-flow">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          3. Функції
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/functions">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingFour">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          4. Область видимості
        </a>
      </h5>
    </div>

    <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/scope">Читати</router-link>
      </div>
    </div>

  </div><div class="card">
    <div class="card-header" role="tab" id="headingFive">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          5. Масиви
        </a>
      </h5>
    </div>

    <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/arrays">Читати</router-link>
      </div>
    </div>
  </div><div class="card">
    <div class="card-header" role="tab" id="headingSix">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          6. Цикли
        </a>
      </h5>
    </div>

    <div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/loops">Читати</router-link>
      </div>
    </div>
  </div><div class="card">
    <div class="card-header" role="tab" id="headingSeven">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
          7. Ітератори
        </a>
      </h5>
    </div>

    <div id="collapseSeven" class="collapse" role="tabpanel" aria-labelledby="headingSeven" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/iterators">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingEight">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          8. Об'єкти
        </a>
      </h5>
    </div>

    <div id="collapseEight" class="collapse" role="tabpanel" aria-labelledby="headingEight" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/objects">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingNine">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
          9. Класи
        </a>
      </h5>
    </div>

    <div id="collapseNine" class="collapse" role="tabpanel" aria-labelledby="headingNine" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/classes">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTen">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
          10. Сумісність з браузерами
        </a>
      </h5>
    </div>

    <div id="collapseTen" class="collapse" role="tabpanel" aria-labelledby="headingTen" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/browser-compatibility">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingEleven">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
          11. Модулі
        </a>
      </h5>

    </div>

    <div id="collapseEleven" class="collapse" role="tabpanel" aria-labelledby="headingEleven" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/modules">Читати</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwelve">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
          12. Запити
        </a>
      </h5>
    </div>

    <div id="collapseTwelve" class="collapse" role="tabpanel" aria-labelledby="headingTwelve" data-parent="#accordion">
      <div class="card-body">
        <router-link to="/js-course/requests">Читати</router-link>
      </div>
    </div>
  </div>
</div>



	</div>

</template>



<script>
export default {
  name: 'jsContent'
}
</script>


<style>
	.jumbotron-js {
		background: url(../../assets/coding-screen.jpg);
		margin-bottom: 10px;
		padding: 30px 0px;
		color: white;
	}
	.jumbotron-js h1 {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		user-select: none;
	}

</style>