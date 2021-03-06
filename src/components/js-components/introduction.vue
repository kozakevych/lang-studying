<template>

	<div class="introduction-js">
		<nav class="breadcrumbs-content" aria-label="breadcrumb" role="navigation">
    <ol class="breadcrumb">
        <router-link to="/js-course/" class="breadcrumb-item">Повернутися до змісту</router-link>
        <router-link to="/js-course/introduction-js" class="breadcrumb-item active" aria-current="page">Вступ до JavaScript</router-link>
    </ol>
    </nav>
  
    <div class="blog-post text-left">

    <h1 class="blog-post-title">{{ title }}</h1>

    <hr />
    
    <img id="js-logo" src="../../assets/js-logo-square.png" alt="JavaScript Logo" width="200px" height="200px">

    <p>JavaScript широко розповсюджена мова веб програмування, яка забезпечує динамічну поведінку елементів на більшості веб-сайтів.</p>


    <p>У цьому розділі, ми розглянемо типи даних і вбудовані методи. Це базові поняття для будь-якого JS розробника. В кінці розділу, ви знатимете як писати код, який виконує математичні вирази, рахує довжину слова і генерує випадкові числа. </p>
    
    <h3>Консоль</h3>
    <hr />

    <p>Перед тим як познайомитися з типами даних і методами, давайте дізнаємося як виводити інформацію у консоль. Консоль - це інструмент який розробники використовують для того, щоб записувати вивід JS програм.</p>

<p>Для виводу тексту в консоль використовується коменда console.log(). Розгляньмо наступний приклад:</p>

<pre><code>console.log("Hello!");</code></pre>

<p>Ця команда виведе текст "Hello!" в консоль. Зауважте, що ми поставили крапку з комою в кінці рядку. Хоча код виконався би і без цього, в світі JavaScript крапка з комою в кінці рядку вважається хорошою практикою.</p>

<p>У наступному прикладі ви побачите, що ви можете вивести значення будь-якого типу даних за допомогою консолі.</p>

<h3>Типи даних</h3>
    <hr />

<p>Типи даних - це дуже важлива складова будь-якої мови програмування, і важлива частина всіх програм.</p>

<p>Нижче наведено приклади чотирьох типів даних які складають основу всіх JavaScript програм. Примітивні типи даних, власне тому і так називаються, бо є найпростішими вбудованими формами даних.</p>

<pre><code>console.log(30.1);
console.log('Lviv');
console.log(true);
console.log(null);
</code></pre>

<p>У цьому прикладі, комп'ютер вивів кожен з чотирьох типів даних. Це такі типи даних:</p>

<p>String (Стрічка) — Будь-яка послідовність символів з клавіатури (букви, пробіли, цифри), які обгорнуті в одинарні ('Hello') або подвійні лапки ("World!"). Серед цих прикладів, таким типом є 'Lviv'.
Numbers (Числові значення) — Будь-які числові значення: 4, 1516, .002, 23.42.
Booleans (Булевий тип даних) — Може приймати два значення true і false (правда/неправда), без лапок..
Null (Нуль) — Може бути лише нулем. Він показує відсутність значення.</p>

<h3>Математичні оператори</h3>
    <hr />

<p>Не переймайтеся, вам не потрібно досконало знати математику, для того щоб вивчати JavaScript. Хоча, ці оператори потрібно знати, для того щоб вміти складати корисні програми.</p>

<p>У мові JavaScript є такі математичні оператори: </br>

Додавання: + </br>
Віднімання: - </br>
Множення: * </br>
Ділення: / 
</p>
<p>
Ви можете догадатися, як вони працюють:
</p>

<pre><code>console.log(3 + 4); // Дорівнює 7
console.log(5 - 1); // Дорівнює 4
console.log(4 * 2); // Дорівнює 8
console.log(9 / 3); // Дорівнює 3
</code></pre>

<h3>Властивості</h3>
    <hr />
<p>Коли ви хочете додати нові дані до вашої програми, браузер зберігає їх у певному екземплярі типів даних. Такий екземпляр є окремою одиницею або об'єктом типів даних.</p>

<p>JavaScript збереже нові дані, такі як 'Hello', як стрічковий екземпляр у комп'ютерній пам'яті. Інший приклад, це 30.1, він буде зберігатися в числовому типі даних.</p>

<p>Такий екземпляр, як стрічка 'Hello', містить ще додаткову інформацію про себе.</p>

<p>Наприклад кожен екземпляр стрічки містить властивість, яка називається 'length' (довжина) що містить інформацію про кількість знакіів у стрічці. Ми можемо отримати дані про властивість звернувшись до стрічки, поставивши крапку, і назвавши властивість:</p>

<pre><code>console.log('Hello'.length);</code></pre>
<p>У цьому прикладі, інформації збережена до властивості length буде отримана від стрічки, 'Hello'. Програма виведе 5 у консоль, тому що вона складається з 5 букв.</p>


<h3>Вбудовані методи</h3>
<hr />

<p>While the length of a string is calculated when an instance is created, a string instance also has methods that calculate new information as needed. When these built-in methods are called on an instance, they perform actions that generate an output.</p>

<p>Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:</p>

<pre><code>console.log('Hello'.toUpperCase()); // 'HELLO'
console.log('Hey'.startsWith('H')); // true</code></pre>

<p>
Давайте розглянемо кожен рядок:
</p>

<p>
У першому рядку, на стрічку 'Hello' викликається метод .toUpperCase(). Результат виводиться на консоль. Метод повертає стрічку з усіма великими буквами: 'HELLO'.
У другому рядку, викликається метод .startsWith() щодо стрічки 'Hey'. Цей метод також приймає 'H' як аргумент. Так як 'Hey' дійсно починається з 'H', метод повертає значення true.
Ви можете знайти вбудованих методів для стрічок у документації JavaScript. Розробники часто використовують документацію. У ній міститься інформація про ключові поняття JavaScript, про методи та синтакс.
</p>


<h3>Бібліотеки</h3>
    <hr />
<p>
Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance.
</p>
<p>
Одна така колекція містить математичні методи, тому вона називається Math (Математична) бібліотека.
</p>
<p>
Давайте розглянемо приклад використання методу .random() з бібліотеки Math:
</p>
<pre><code>console.log(Math.random()); // випадкове число між 0 і 1
</code></pre>
<p>
У цьому прикладі, ми викликаємо метод .random() 
In the example above, we called the .random() method by appending the library name with a period, the name of the method, and opening (() and closing ()) parentheses. Цей метод повертає випадкове число між 0 і 1.
</p>
<p>
Для того щоб згенерувати випадкове число між 0 і 50, ми можемо помножити наш результат на 50:
</p>
<pre><code>Math.random() * 50;</code></pre>
<p>
У прикладі скоріш за все результат покаже decimal. Для того щоб у відповіді було ціле число, є метод, який називається Math.floor(). Цей метод decimal number, і заокруглює його до найближчого цілого числа. Отож, ми можемо використати метод Math.floor() щоб отримати ціле число:
</p>

<pre><code>Math.floor(Math.random() * 50);</code></pre>
<p>У цьому випадку:</p>

<p>
Math.random генерує a випадкове число між 0 і 1.
Ми множимо це число на 50, отже ми отримаємо результат між 0 і 50.
Тоді, Math.floor заокруглить це число до найближчого цілого.
</p>

<h3>Коментарі</h3>
    <hr />
<p>У JavaScript, ми можемо також робити коментарі.</p>

<p>Програма не візьме до уваги коментарі, під час запуску. Тобто, вони існують лише для людського ока. Хороші коментарі можуть бути дуже корисними для інших розробників, тому що в них описано, як працює код.</p>

<p>Є два типи коментарів у JS:</p>

<p>Однорядковий коментар, який займає один рядок і починається двома слешами //.</p>

<pre><code>// The first 5 decimals of pi
console.log('Pi is equal to ' + 3.14159);</code></pre>
<p>Багаторядковий коментар який займає кілька рядків, починається з /*, і закривається */.</p>
<pre><code>/*
console.log('All of this code');
console.log('Is commented out');
console.log('And will not be executed);
*/
</code></pre>

<h3>Підсумок: Типи і оператори</h3>
    <hr />
<p>
  Давайте зробимо ще один погляд на те, що ми сьогодні вивчили.
</p>
<p>
Є чотири типи даних у JavaScript: стрічки, числа, булеві типи і нуль (strings, numbers, booleans, and null).
Вивести дані у консоль можна за допомогою команди console.log()
Є чотири математичні оператори +, -, * і /.
JavaScript поєднує певні властивості з певними типами даних.
JavaScript містить вбудовані методи для різних тип даних.
Бібліотеки - це колекції методів, які можуть викликатися без instance.
Можна писати як однорядкові коментарі за допомогою // так і багаторядкові коментарі між /* і */.
</p>
</div><!-- /.blog-post -->
  <nav class="page-navigation" aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <router-link to="/js-course/control-flow" class="page-link">Наступний розділ</router-link>
    </li>
  </ul>
  </nav>

	</div>
</template>


<script>
  export default {
    name: 'introduction-js',
    data () {
      return {
        title: 'Вступ'
      }
    }
  }
</script>


<style>
  #js-logo {
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
  }

</style>
