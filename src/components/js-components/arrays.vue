<template>
	<div class="container">
		<h3>Arrays</h3>

<p>A foundational concept of programming is how to organize and store data.</p>

<p>One way we organize data in real life is to make lists. Let's make one here:</p>

<p>New Year's Resolutions:
1. Rappel into a cave
2. Take a falconry class
3. Learn to juggle</p>

<p>Let's now write this list in JavaScript, as an array:</p>

<pre><code>let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];</code></pre>

<p>Arrays are JavaScript's way of making lists. These lists can store any data types (including strings, numbers, and booleans) and they are ordered, meaning each item has a numbered position.</p>


<h3>Create an array</h3>

<p>Let's start by making an array and then seeing what it can do throughout the rest of this lesson.</p>


<h3>Property Access</h3>

<p>Each item in an array has a numbered position. We can access individual items using their numbers, just like we would in an ordinary list.</p>

<p>Something important to note is that JavaScript starts counting from 0 rather than 1, so the first item in an array will be at position 0. This is because JavaScript is zero-indexed.

We can select the first item in an array like this:</p>

<pre><code>let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions[0]);
// Output: 'Rappel into a cave'</code></pre>

<p>You can also access individual characters in a string. For instance, you can write:</p>

<pre><code>let hello = 'Hello World';
console.log(hello[6]);
// Output: W</code></pre>

<p>W will be the output since it's the character in the 6th position. This works because JavaScript stores strings in a similar way that it stores arrays.</p>


<h3>Update Elements</h3>

<p>In the previous exercise, you learned how to access elements of an array or a string using their index number. You can also change elements of an array using their indices.</p>

<pre><code>let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons) 
//Output: 
//Winter 
//Spring
//Summer
//Autumn</code></pre>

<p>In the example above, the seasons array contained the names of the four seasons.</p>

<p>However, we decided that we preferred to say "Autumn" instead of "Fall".</p>

<p>seasons[3] = "Autumn"; tells our program to change the item at index 3 of the seasons array to be "Autumn" instead of what is already there.</p>

<h3>length property</h3>

<p>We may wish to know how many items are stored inside of an array.</p>

<p>We can find this out by using one of an array's built-in properties, called length. We can attach this to any variable holding an array and it will return the number of items inside.</p>

<pre><code>let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2</code></pre>

<p>In the example above, we log newYearsResolutions.length to the console. This code retrieves the length property of the newYearsResolutions array and logs it to the console. This array has two items, so 2 would be logged to the console.</p>

<h3>push Method</h3>

<p>JavaScript has built in methods for arrays that help us do common tasks. Let's learn some of them.</p>

<p>First, .push() allows us to add items to the end of an array. Here is an example of how this is used:</p>

<pre><code>let newYearsResolutions = ['item 0', 'item 1', 'item 2'];

newYearsResolutions.push('item 3', 'item 4');
</code></pre>
<p>The method .push() would make the newYearsResolutions array look like:</p>

<pre><code>['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];</code></pre>

<p>How does .push() work?</p>

    <p>It connects to newYearsResolutions with a period.</p>

    <p>Then we call it like a function. That's because .push() is a function and one that JavaScript allows us to use right on an array.</p>

<p>Another array method, .pop(), is similar to .push(). This method removes the last item of an array.</p>

<pre><code>let newYearsResolutions = ['item 0', 'item 1', 'item 2'];

newYearsResolutions.pop();

console.log(newYearsResolutions); 
// Output: [ 'item 0', 'item 1' ]</code></pre>

<p>In the example above, calling .pop() on the newYearsResolutions array removed item 2 from the end.</p>


<h3>More Array Methods</h3>

<p>There are many more array methods than just .push() and .pop(). You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) documentation.</p>

<p>.pop() and .push() modify the array on which they're called. However, there are some array methods that don't modify the array. Be sure to check MDN to understand the behavior of the method you are using.</p>

<p>Some methods that JavaScript developers use frequently are .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.</p>

<p>Below, we will explore some methods that we have not learned yet. We will use these methods to edit a grocery list. As you complete the steps, you can consult the MDN documentation to learn what each method does!</p>

<h3>Arrays with let and const</h3>

<p>You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.</p>

<p>Variables that are assigned with const cannot be reassigned. However, arrays that are declared with const remain mutable, or changeable.</p>

<p>This means that we can change the contents of an array, but cannot reassign the variable name to a new array or other data type.</p>

<p>The instructions below will illustrate this more clearly. Pay close attention to the similiarities and differences between the condiments array and the utensils array as you complete the steps.</p>

<h3>Review Arrays</h3>

<p>Nice work! In this lesson, we learned these concepts regarding arrays:</p>

    <p>Arrays are lists and are a way to store data in JavaScript.
    Arrays are created with brackets [].
    Each item inside of an array is at a numbered position, starting at 0.
    We can access one item in an array using its numbered position, with syntax like: myArray[0].
    We can also change an item in an array using its numbered position, with syntax like myArray[0] = "new string";
    Arrays have a length property, which allows you to see how many items are in an array.
    Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
    Arrays have many other methods that perform different functions, such as .slice() and .shift(). You can read the documentation for any array method on the Mozilla Developer Network website.
    Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable; they can be changed. However, a variable declared with const cannot be reassigned.</p>

 <nav class="page-navigation" aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <router-link to="/js-course/scope" class="page-link">Попередній розділ</router-link>
    </li>
    <li class="page-item">
      <router-link to="/js-course/loops" class="page-link">Наступний розділ</router-link>
    </li>
  </ul>
  </nav>

	</div>
</template>

<script>
  export default {
    name: 'arrays'
  }
</script>