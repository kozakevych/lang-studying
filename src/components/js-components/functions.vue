<template>

  <div class="blog-post text-left">
    <nav class="breadcrumbs-content" aria-label="breadcrumb" role="navigation">
      <ol class="breadcrumb">
        <router-link to="/js-course/" class="breadcrumb-item">Повернутися до змісту</router-link>
        <router-link to="/js-course/introduction-js" class="breadcrumb-item active" aria-current="page">Функції</router-link>
      </ol>
    </nav>
    <h3>Функції</h3>
    <hr />

    <p>Функція - це блок коду створений для того, щоб виконувати певне завдання.
    A function is a block of code designed to perform a task.</p>

    <p>
      Functions are like recipes. They accept data, perform actions on that data, and return a result. The beauty of functions is that they allow us to write a block of code once, then we can reuse it over and over without rewriting the same code.
    </p>

    <p>
      Take a look at the code in this exercise. This code turns the calculator on if it is currently off, and turns it off if the calculator is currently on.
    </p>

    <p>
      See if you can figure out how this code works. In the next exercise, we'll walk through it line by line.
    </p>

    <p>How does this code work?</p>

    <pre><code>let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.</code></pre>

    <p>Let's explore each part in detail.</p>

    <p>1. We created a function named pressPowerButton.</p>

    <p>
      const pressPowerButton creates a variable with a given name written in camelCase.
    </p>

    <p>
      The variable is then set equal = to a set of parentheses followed by an arrow token () =>, indicating the variable stores a function. This syntax is known as arrow function syntax.

    Finally, between the curly braces {} is the function body, or the JavaScript statements that define the function. This is followed by a semi-colon ;. In JavaScript, any code between curly braces is also known as a block.
    </p>

    <p>2. Inside the function body is an if/else statement.</p>

    <p>
      3. On the last few lines, we call the function by writing its name followed by a semi-colon pressPowerButton();. This executes the function, running all code within the function body.
    </p>

    <p>
      4. We executed the code in the function body twice without having to write the same set of instructions twice. Functions can make code reusable!
    </p>

    <h3>Parameters</h3>
    <hr />

    <p>
      So far our function has not required any input. We can also write functions that accept data. We do this with parameters. Parameters are variables in a function definition that represent data we can input into the function.
    </p>

    <pre><code>const multiplyByThirteen = (inputNumber) => {
  console.log(inputNumber * 13);
};

multiplyByThirteen(9);
// Output: 117
</code></pre>
    <p>Let's explore how this function works:</p>

    <p>
      We add inputNumber within the parentheses () => of the multiplyByThirteen function. inputNumber is a parameter.
    Inside the multiplyByThirteen() function, we use console.log to print the inputNumber multiplied by 13.
    When we call the multiplyByThirteen() function on the last line, we set the inputNumber parameter. Here, we set it to 9. Then, inside the function block, 9 is multiplied by 13, resulting in 117 printing to the console.
    Note on terminology: inputNumber is a parameter, but when we call multiplyByThirteen(9), the 9 is called an argument. In other words, arguments are provided when you call a function, and parameters receive arguments as their value. When we set the value 9 as the argument, we pass a value to the function.
    </p>

    <p>
      Parameters let us write logic inside functions that are modified when we call the function. This makes functions more flexible.
    </p>

    <h3>Parameters II</h3>
    <hr />

    <p>If we can set one parameter, can we set two?</p>

    <p>
      We can set as many parameters as we'd like by adding them when we declare the function, separated by commas, like this:
    </p>

    <pre><code>const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2 ;
  console.log(average);
};

getAverage(365, 27);
// Output: 196</code></pre>

    <p>
      The getAverage() function has two parameters: numberOne and numberTwo, both entered in the parentheses ().
    </p>

    <p>
      When we call the getAverage() function on the last line, we include two numbers as the parameters, also separated by commas.
    </p>

    <p>
      In this case, we are telling the function to assign numberOne the value of 365 and numberTwo the value of 27. We are passing in 365 and 27 to the getAverage() function.
    </p>

    <p>
      When getAverage() runs, the function knows what numberOne and numberTwo equal since we passed in two parameters when we called the function. Therefore it evaluates (365 + 27) / 2 and stores the result in the average variable. When logged to the console, the value of the average is 196.
    </p>

    <p>
      By adding multiple parameters, we can build functions that are more flexible. Now the function has two variables that we can define when we call the function.
    </p>

    <h3>Return</h3>
    <hr />

    <p>
      Using console.log() as the result of a function isn't the best use of a function. The purpose of a function is to take some input, perform some task on that input, then return a result.
    </p>

    <p>
      To return a result, we can use the return keyword. Take a look at our function from the last exercise, now re-written slightly:
    </p>

    <pre><code>const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2;
  return average;
}

console.log(getAverage(365, 27));
// Output: 14</code></pre>

    <p>
      1. Instead of using console.log() inside the getAverage() function, we used the return keyword. return will take the value of the variable and return it.
    </p>

    <p>
      2. On the last line, we called the getAverage() function inside of a console.log() statement, which outputted the result of 196.
    </p>

    <p>
      3. This code achieved the same output as before, however now our code is better. Why? If we wanted to use the getAverage() function in another place in our program, we could without printing the result to the console. Using return is generally a best practice when writing functions, as it makes your code more maintainable and flexible.
    </p>
    
    <h3>Return II</h3>
    <hr />

<p>In the last exercise, we pointed out that using return makes programs more maintainable and flexible, but how exactly?</p>

<p>When functions return their value, we can use them together and inside one another. If our calculator needed to have a Celsius to Fahrenheit operation, we could write it with two functions like so:</p>

<pre><code>const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F</code></pre>

<p>Take a look at the getFahrenheit() function. Inside of its block, we called multiplyByNineFifths() and passed it the degrees in celsius. The multiplyByNineFifths() function multiplied the celsius by (9/5). Then it returned its value so the getFahrenheit() function could continue on to add 32 to it.</p>

<p>Finally, on the last line, we interpolated the function call within a console.log() statement. This works because getFahrenheit() returns its value.</p>

<p>We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing functions can help take large and difficult problems and break them into small and manageable problems.</p>

<h3>Function Declarations</h3>
    <hr />

<p>Now that we have an understanding of functions in JavaScript, let's take a broader look at the type of functions we'll see. Functions in JavaScript are generally declared as either a function declaration or a function expression.</p>

<p>A function declaration is a function that is bound to an identifier or name.</p>

<pre><code>function square (number) {
  return number * number; 
}

console.log(square(5));
// Output: 25.</code></pre>

<p>Function declarations require the keyword function, a name, and a function body. You can identify this by the use of function square() and the {} below. Function declarations do not end in a semi-colon.</p>

<p>Let's create a basic function declaration.</p>

<h3>Function Expressions</h3>
    <hr />

<p>A function expression is similar to function declaration, with the exception that identifier can be omitted, creating an anonymous function. Function expressions are often stored in a variable. You can identify a function expression by the absence of a function name immediately trailing the function keyword.</p>

<pre><code>const square = function (number) {
  return number * number;
};

console.log(square(5));
// Output: 25.
</code></pre>
<p>Also note function expressions end with a semi-colon since they are stored in a variable.</p>

<p>In this lesson, we have primarily been using a type of function expression known as an arrow function. Arrow function syntax is a shorter syntax for a function expression. You can identify arrow functions through the use of parentheses and the arrow token () =>.</p>

<pre><code>const square = (number) => {
  return number * number;
};

console.log(square(5));
// Output: 25.</code></pre>

<p>It's important to be familiar with the multiple ways of writing functions, since you will come across these in JavaScript code.</p>

<h3>Arrow Functions</h3>
    <hr />

<p>JavaScript also provides several ways to refactor arrow function syntax. We'll explore a few of these techniques here, using an example function from a previous exercise.</p>

<pre><code>const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');</code></pre>

<p>We can refactor this function in three ways. The most condensed form of the function is known as concise body.</p>

    <p>Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.
    A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
    A function composed of a sole single-line block does not need brackets.</p>

<p>In other words, the previous code can be refactored like this:</p>

<pre><code>const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');</code></pre>

<p>You'll notice:</p>

    <p>The parentheses around celsius have been removed, since it is a single parameter.
    The return keyword has been removed since the function consists of a single-line block.
    The {} have been removed, again, since the function consists of a single-line block.</p>

<h3>Review Functions</h3>
    <hr />

<p>This unit introduced you to functions.</p>

    <p>Functions are written to perform a task.
    Functions take data, perform a set of tasks on the data, and then return the result.
    We can define parameters to be used when calling the function.
    When calling a function, we can pass in arguments, which will set the function's parameters.
    We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.</p>
  <nav class="page-navigation" aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <router-link to="/js-course/control-flow" class="page-link">Попередній розділ</router-link>
    </li>
    <li class="page-item">
      <router-link to="/js-course/scope" class="page-link">Наступний розділ</router-link>
    </li>
  </ul>
  </nav>
  </div>

</template>

<script>
export default {
  name: 'FunctionsJS'
}
</script>