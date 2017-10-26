<template>
  <div class="blog-post text-left">

		<h3>Introduction to Iterators</h3>

<p>One of the most common tasks a developer translates into code is looping over the contents of an array. Programmers often accomplish this with a for loop. However, as is often the case when a task occurs frequently, JavaScript now provides methods that simplify this task.</p>

<p>These methods, called iterators, are called on arrays and complete such tasks as altering each element and selecting elements that fit certain criteria. In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.</p>

<h3>.forEach()</h3>

<p>The first iterator method that we're going to learn is .forEach(). Aptly named, .forEach() will execute the same code on each element of an array.</p>

<pre><code>let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts']; 

groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});</code></pre>

<p>The code above will log a nicely formatted list of the groceries to the console. Let's explore each bit of syntax.</p>

<p>    The first line is an array of grocery items.
    groceries.forEach calls the .forEach() method on the groceries array.
    (function(groceryItem) { creates a function that takes a single parameter, groceryItem and opens the block of code for that function. Because .forEach() is an iterator method, every element in the groceries array will be passed to this function as an argument in place of groceryItem. Syntactically, the name of the parameter does not matter. However, it is a best practice to give parameters descriptive names so that other developers who read your code can easily understand what it does.
    console.log(' - ' + groceryItem); is the code we wish to execute upon each element in the array. Logging the item to the console with a - in front of it makes the elements look like a list as they're printed out.
    }); closes the function code block and .forEach() method in that order.</p>

<p>We can simplify this code using arrow function syntax.</p>

<p>groceries.forEach(groceryItem => console.log(' - ' + groceryItem));</p>

<p>Both of these examples execute precisely the same process.</p>

<p>There are three important things to know about the .forEach() method.</p>

    <p>It is an array method. It must be called upon an array.
    Any changes to the iterated array value won't be updated in the original array.
    The return value is undefined.</p>


<h3>.map()</h3>

<p>In the previous exercise, we called the .forEach() method and learned that it returns undefined. It also does not change the array it is called upon. What if we do want to change the contents of the array? We can use .map()!</p>

<pre><code>let numbers = [1, 2, 3, 4, 5];

let bigNumbers = numbers.map(function(number) {
  return number * 10;
});</code></pre>

    <p>The first line is an array of numbers.
    let bigNumbers = numbers.map creates a new array, bigNumbers, in which the returned values of the .map() method will be saved and calls the .map() method on the numbers array.
    (function(number) { creates a function that takes a single parameter, number, and opens the block of code for that function.
    return number * 10; is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to the bigNumbers array.
    }); closes the function code block and .map() method in that order.</p>

<p>The syntax for .map() is almost the same as the syntax for .forEach(), with one important change. Notice that directly before the function call, the code reads, let bigNumbers =. This is because .map() returns a new array with elements that have been modified by the code in its block. bigNumbers is the new array in which the method will save the values.</p>

<p>.map() can also be written with arrow function syntax.</p>

<pre><code>let numbers = [1, 2, 3, 4, 5]; 
let bigNumbers = numbers.map(numbers => numbers * 10);</code></pre>

<h3>.filter()</h3>

<p>Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns certain elements from the original array that evaluate to truthy based on conditions written in the block of the method.</p>

<pre><code>let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

let shortWords = words.filter(function(word) {
  return word.length < 6;
});</code></pre>

    <p>On the first line, an array is created.
    let shortWords = declares a new array that will contain the returned elements of the .filter() method.
    words.filter(function(word) { calls the .filter() method on the words array and creates a function that will take a single parameter, word. Each element in the words array will be passed to this function as an argument.
    return word.length < 6; is the condition to filter for all elements in the words array that have fewer than 6 characters will be added to the shortWords array.
    }); closes the code block and .filter() method in that order.</p>

<p>.filter() can also be written using arrow function syntax.</p>

<pre><code>let shortWords = words.filter(word => word.length < 6);</code></pre>

<h3>Iterator Documentation</h3>

<p>There are many additional built-in array methods, a complete list of which is on the Mozilla Developer Network.</p>

<p>The documentation for each method contains several sections:</p>

    <p>A short definition
    A block with the correct syntax for using the method
    A list of parameters the method accepts or requires
    The return value of the function
    An extended description
    Examples of the method's use
    Polyfill, Specifications, Browser Compatibility</p>

<p>A list of iterator methods can be found here.</p>

<p>In the instructions below, there are some errors in the code. Use the documentation for a given method to determine the error or fill in a blank to make the code run correctly.</p>

<h3>Choose the Right Iterator</h3>

<p>There are many iterator methods you can choose. In addition to learning the correct syntax for the use of iterator methods, it is also important to learn how to choose the correct method for different scenarios. The exercises below will give you the opportunity to do just that!</p>

<h3>Review: Iterators</h3>

<p>You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let's review!</p>

    <p>.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
    .map() executes the same code on every element in an array and returns a new array with the updated elements.
    .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
    All iterator methods can be written using arrow function syntax. In fact, given the succinctness and the implicit return of arrow function syntax, this is quickly becoming the preferred way to write these types of method calls.
    You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
    Additional iterator methods such as .some(), .every(), .reduce() perform different functions.</p>

 <nav class="page-navigation" aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <router-link to="/js-course/loops" class="page-link">Попередній розділ</router-link>
    </li>
    <li class="page-item">
      <router-link to="/js-course/objects" class="page-link">Наступний розділ</router-link>
    </li>
  </ul>
  </nav>
	</div>
</template>


<script>
  export default {
    name: 'browser-compatibility'
  }
</script>