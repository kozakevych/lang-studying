<template>

	<div class="introduction-js">
		
    <div class="blog-post text-left"><nav aria-label="breadcrumb" role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
  </ol>
</nav>
    <h1 class="blog-post-title">{{ title }}</h1>

    <hr />
    
    <img src="../../assets/js-logo-square.png" class="float-right" alt="JavaScript Logo" width="200px" height="200px">

    <p>JavaScript широко розповсюджена мова веб програмування, яка забезпечує динамічну поведінку елементів на більшості веб-сайтів.</p>


    <p>У цьому розділі, ми розглянемо типи даних і вбудовані методи. Це базові поняття для будь-якого JS розробника. В кінці розділу, ви знатимете як писати код, який виконує математичні вирази, рахує довжину слова і генерує випадкові числа. </p>

    <p>This lesson covers the building blocks of JavaScript. Make sure to take notes and pace yourself. This foundation will set you up for understanding more complex concepts later.</p>


    <h3>Console</h3>
    <hr />

    <p>Before you learn about data types and methods, you need to know how to print values to the console. The console is a tool that developers use to record the output of their JavaScript programs.</p>

<p>The console.log() command is used to print, or log, text to the console. Consider the following example:</p>

<pre><code>console.log("Hello!");</code></pre>

<p>In this example, Hello! is logged to the console. Notice, we denote the end of the line with a semicolon. Although your code will usually run as intended without a semicolon, it is best practice to always include one to ensure your code works as expected in situations when it does need one.</p>

<p>You'll see in the next exercise that you can put any data type inside the parentheses to print it to the console.</p>

<h3>Data Types</h3>
    <hr />

<p>Data types are the building blocks of all languages and essential pieces of any program.</p>

<p>Below are examples of four primitive data types that lay the foundation for all JavaScript programs. Primitive data types, as their name implies, are the simplest built-in forms of data.</p>

<pre><code>
console.log('New York City');
console.log(40.7);
console.log(true);
console.log(null);
</code></pre>

<p>In the example above, the computer logs each of the four primitive data types to the console. The types include:</p>

<p>Strings — Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, 'New York City' is a string.
Numbers — Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, 40.7 is a number.
Booleans — Either true or false, with no quotations. In the example above, true is a boolean.
Null — Can only be null. It represents the absence of value.
Let's review: a string is any grouping of words, a number's a number, null is the absence of value, and a boolean is a ghostly Halloween costume. Or no, that's false! It's either true or false.</p>

<h3>Math Operators</h3>
    <hr />

<p>Don't worry! Math doesn't need to be your strong-suit to learn JavaScript. However, there are operators you'll need to know to make useful programs.</p>

<p>JavaScript supports the following math operators: </br>

Add: + </br>
Subtract: - </br>
Multiply: * </br>
Divide: / 
</p>
<p>
These all work how you might guess:
</p>

<pre><code>  
console.log(3 + 4); // Equals 7
console.log(5 - 1); // Equals 4
console.log(4 * 2); // Equals 8
console.log(9 / 3); // Equals 3
</code></pre>

<p>In the example above, each line uses a different mathematical operator to log a value to the console.</p>

<h3>Properties</h3>
    <hr />
<p>When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. An instance is an individual case (or object) of a data type.</p>

<p>JavaScript will save a new piece of data, like 'Hello', as a string instance in the computer's memory. Another example, the number 40.7, is stored as an instance of the number data type.</p>

<p>An instance, like the string 'Hello', has additional information attached to it.</p>

<p>For example, every string instance has a property called length that stores the number of characters in it. You can retrieve property information by appending the string with a period and the property name:</p>

<pre><code>console.log('Hello'.length);</code></pre>
<p>In the example above, the value saved to the length property is retrieved from the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.</p>


<h3>Built-in Methods</h3>
    <hr />
<p>While the length of a string is calculated when an instance is created, a string instance also has methods that calculate new information as needed. When these built-in methods are called on an instance, they perform actions that generate an output.</p>

<p>Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:</p>

<pre><code>console.log('Hello'.toUpperCase()); // 'HELLO'
console.log('Hey'.startsWith('H')); // true</code></pre>

<p>
Let's look at each line separately:
</p>
<p>
On the first line, the .toUpperCase() method is called on the string instance 'Hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
On the second line, the .startsWith() method is called on the string instance "Hey". This method also accepts the character 'H' as an input between the opening and closing parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.
You can find a list of built-in string methods in the JavaScript documentation. Developers use documentation as a reference tool. It describes JavaScript's keywords, methods, and syntax.
</p>


<h3>Libraries</h3>
    <hr />
<p>
Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance.
</p>
<p>
One such collection contains mathematical methods, aptly named the Math library.
</p>
<p>
Let's see how you call the .random() method from the Math library:
</p>
<pre><code>
console.log(Math.random()); // random number between 0 and 1
</code></pre>
<p>
In the example above, we called the .random() method by appending the library name with a period, the name of the method, and opening (() and closing ()) parentheses. This method returns a random number between 0 and 1. This code prints a random number between 0 and 1.
</p>
<p>
To generate a random number between 0 and 50, we could multiply this result by 50, like so:
</p>
<pre><code>Math.random() * 50;</code></pre>
<p>
The answer in the example above will most likely be a decimal. To ensure the answer is a whole number, JavaScript provides a built-in method called Math.floor(). Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round a random number like this:
</p>

<pre><code>Math.floor(Math.random() * 50);</code></pre>
<p>In this case:</p>

<p>
Math.random generates a random number between 0 and 1.
We then multiply that number by 50, so now we have a number between 0 and 50.
Then, Math.floor rounds the number down to the nearest whole number.
</p>

<h3>Comments</h3>
    <hr />
<p>As we write JavaScript, we can create comments in our code.</p>

<p>Programs do not evaluate comments when you run them. In other words, they exist just for human readers. Good comments are useful for you and other developers, because they describe what the code does.</p>

<p>There are two types of code comments in JavaScript:</p>

<p>A single line comment will comment out a single line and is denoted with two forward slashes // preceding a line of JavaScript code.</p>

<pre><code>// The first 5 decimals of pi
console.log('Pi is equal to ' + 3.14159);</code></pre>
<p>A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.</p>
<pre><code>
/*
console.log('All of this code');
console.log('Is commented out');
console.log('And will not be executed);
*/
</code></pre>

<h3>Review Types and Operators</h3>
    <hr />
<p>
Let's take one more glance at the concepts we just learned:
</p>
<p>
Four essential data types in JavaScript include strings, numbers, booleans, and null.
Data is printed, or logged, to the console with console.log().
Four built-in mathematical operators include +, -, *, and /.
JavaScript associates certain properties with different data types.
JavaScript has built-in methods for different data types.
Libraries are collections of methods that can be called without an instance.
You can write single-line comments with // and multi-line comments between /* and */.
</p>
</div><!-- /.blog-post -->

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
</template>


<script>
  export default {
    name: 'introduction-js',
    data () {
      return {
        title: 'Вступ до JavaScript'
      }
    }
  }
</script>


<style>
  img {
    margin-left: 20px;
  }
</style>
