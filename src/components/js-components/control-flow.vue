<template>
  
          <div class="blog-post">
            <h2 class="blog-post-title">Control Flow</h2>

            
<p>In this lesson, we'll explore how we can use the building blocks of JavaScript to write programs that make decisions.</p>

<p>Control flow statements enable JavaScript programs to make decisions by executing code based on a condition. If a given condition is true, we execute one block of code. If the statement is false, we execute another block of code. For instance, if we were making a game in which the user had to choose which door to enter, we'd need a way for the program to know what to do once the user was in the next room.</p>

<p>In this lesson, we'll learn how to make decisions with JavaScript and how it can control the program's flow.</p>



<h3>if/else Statements</h3>

<p>The core task of programming is writing lists of instructions for computers, or translating our ideas from human-speak to computer-speak.

Let's learn how we can ask JavaScript to think like us and make decisions the way we do.

We'll start with human-speak. Many decisions we make everyday boil down to this sentence in some form:

"If something is true, let's do option 1, or else, if it is false, let's do option 2."

This sentence looks fairly similar when we write it with JavaScript. See for yourself:</p>

<pre><code>let needsCoffee = true;
if (needsCoffee === true) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}
</code></pre>

    <p>Lines of code between curly braces are called blocks. if/else statements have two code blocks. If the variable needsCoffee is true, the program will run the first block of code. Otherwise, it will run the other block of code.</p>

    <p>needsCoffee is the condition we are checking inside the if's parentheses. Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace } (line 4). It will ignore the else { ... } part. In this case, we'd see Finding coffee log to the console.</p>

    <p>If needsCoffee were false, only the console.log() statement in the else block would be executed.</p>

<p>if/else statements are how programs can process yes/no questions programmatically.</p>



<h3>True and False Values</h3>

<p>In the previous exercise, we wrote if/else statements. If a given condition were true, one block of code would run. If that condition were false, a different block of code would run. However, there are data types that are not booleans. Let's explore the concepts of true and false in variables that contain other data types, including strings and numbers.</p>

<p>In JavaScript, all variables and conditions have a truthy or falsy value.</p>

<pre><code>let variableOne = 'I Exist!';
if (variableOne) {
// This code will run because variableOne contains a truthy value.
} else {
// This code will not run because the first block ran.
}</code></pre>

<p>In the first line of the program above, a variable is created and set. The value of this variable is a string rather than a boolean. How does this program determine which code block to run?

The second line of this program checks a condition if (variableOne). In the previous exercise, we checked if a variable was equal to true or false. By only writing the name of the variable as the condition, we are checking the truthiness of the variableOne. In this case, variableOne contains a truthy value.

If we changed if (variableOne) to say if (variableTwo), that condition would evaluate to falsy because we have not created a variable called variableTwo in this program. In other words, variableOne is truthy and variableTwo is falsy.

All variables that have been created and set are truthy (and will evaluate to true if they are the condition of a control flow statement) unless they contain one of the seven values listed below:</p>

    <pre><code>false
    0 and -0
    "" and '' (empty strings)
    null
    undefined
    NaN (Not a Number)
    document.all (something you will rarely encounter)</code></pre>

<p>There is an important distinction between a variable's value and its truthiness: variableOne's value is 'I exist' because that is the data saved to the variable. variableOne is truthy because it exists and does not contain any of the seven falsy values listed above.</p>

<h3>True and False Values II</h3>

<p>In programming, we often evaluate whether or not an expression is true or truthy. Conveniently, JavaScript provides a shorthand notation for this.</p>

<pre><code>let isRaining = true;
if (isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}</code></pre>

<p>In the example above, the condition is simply if (isRaining). In JavaScript, this is evaluating whether isRaining is truthy. If you read the code out loud to yourself, it sounds like a simple sentence: "If it's raining, carry an umbrella. Else, enjoy the sun!"

JavaScript provides an operator for swapping the truthiness and falsiness of values - the exclamation point (!). We can use this in conditional statements as shorthand to check if the value of a variable evaluates to false rather than true.</p>

<pre><code>let isPhoneCharged = true; 
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}</code></pre>

<p>In the example above, the program checks if isPhoneCharged evaluates to false. Because isPhoneCharged is true, the second block of code will execute.</p>

<h3>Comparison Operators</h3>

<p>In addition to checking whether a variable evaluates to true or false, sometimes we need to compare variables to other values. We can achieve this with comparison operators.

There are two comparisons you might be familiar with:</p>

    <pre><code>Less than: <
    Greater than: ></code></pre>

<p>You may also recognize these:</p>

    <pre><code>Less than or equal to: <=
    Greater than or equal to: >=
</code></pre>
<p>These comparisons evaluate to true or false.</p>

<h3>Comparison Operators II</h3>

<p>There are two more useful comparisons we can make. Often, we might want to check if two things are equal to each other or if they are not.</p>

    <pre><code>To check if two things equal each other, we write === (three = signs in a row).
    To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).</code></pre>

<p>It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.</p>

<h3>else if Statements</h3>

<p>We've explored if/else statements that answer questions that are either yes or no. What can we do if we have a question that has multiple yes conditions, or multiple no conditions?</p>

<p>
We can add more conditions to our if/else statement with else if. Check out how this fits into our current knowledge of if/else statements:</p>

<pre><code>let stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}</code></pre>

<p>1. We created a variable named stopLight that is assigned to the string green.

2. Then, there's an if/else statement with multiple conditions, using else if. else if allows us to check multiple values of the stopLight variable and output different things based on its color.

3. The block ends with the singular else we have seen before. The else is a catch-all for any other situation. For instance, if the stopLight was blinking blue, the last else would catch it and return a default message.</p>

<h3>Logical Operators</h3>

<p>We can translate certain thoughts into JavaScript code such as, "Are these things equal?" with ===, or, "Is one thing greater than another thing?" with >.</p>

<p>In English, sometimes we say "both of these things" or "either one of these things." Let's translate those phrases into JavaScript with special operators called logical operators.</p>

    <pre><code>To say "both must be true," we use &&.
    To say "either can be true," we use ||.</code></pre>

<p>For example:</p>

<pre><code>if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}</code></pre>

    <p>In the example above, we make sure that the stopLight is 'green' and (&&) there are no pedestrians before we log Go!.
    If either of those conditions is false, we log Stop.

Just like the operators we learned previously, these logical operators will return either true or false.

These logical operators are helpful when writing if/else statements since they let us make sure multiple variables are true or false. We can combine these operators with all of the ones we have learned throughout this lesson.
</p>

<h3>switch Statements</h3>

<p>Before we move on, let's circle back to else if statements.</p>

<p>Using else if is a great tool for when we have a few different conditions we'd like to consider.

else if is limited, however. If we want to write a program with 25 different conditions, like a JavaScript cash register, we'd have to write a lot of code, and it can be difficult to read and understand.

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. Part of being a good developer is writing code that both computers and other humans can read.

switch statements look like this:</p>

<pre><code>let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}</code></pre>

    <p>The switch keyword initiates the statement and is followed by ( ... ), which contains the condition that each case will compare to. In the example, the condition is groceryItem.
    Inside the block, { ... }, there are cases. case is like the else if part of an if/else if/else statement. The word following the first case is 'tomato'. If groceryItem equalled 'tomato', that case's console.log() would run.
    groceryItem equals 'papaya', so the first and second case statements are skipped. The third case runs since the case is 'papaya', which matches groceryItem's value. This particular program will log Papayas are $1.29.
    Then the program stops with the break keyword. This keyword will prevent the switch statement from executing any more of its code. Without adding break at the end of each case, the program will execute the code for all matching cases and the default code as well. This behavior is different from if/else conditional statements which execute only one block of code.
    At the end of each switch statement, there is a default condition. If none of the cases are true, then this code will run.
</p>
<h3>Ternary Operator</h3>

<p>In the previous exercise, we learned shorthand for writing multiple if/else if/else statements to make them easier to read. JavaScript also provides a way to shorten simple if/else statements called the ternary operator.</p>

<pre><code>let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}</code></pre>

<p>In the example above, we see a very familiar pattern. See the example below for an equivalent way to express this.

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

The code in the example above will operate exactly as the code from the previous example. Let's break this example into its parts:</p>

    <pre><code>isNightTime ? — the conditional statement followed by a question mark. This checks if isNightTime is truthy.
    console.log ('Turn on the lights!') — this code will be executed if the condition is truthy.
    : — a colon separates the two different blocks of code that can be executed.
    console.log('Turn off the lights!'); — this code will be executed if the condition is falsy</code></pre>

<p>In this example, we checked if the value of a variable was true or false. The ternary operator can be used for any condition that can be evaluated to true or false, such as those with comparison operators.</p>

<pre><code>age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');</code></pre>

<p>In the example above, the conditional statement is checking whether the value of the variable age is greater than or equal to 16. If so, a message that states the user is old enough to drive will be logged to the console. Otherwise, a message that states the user is not old enough to drive will be logged.
</p>
<h3>Review: Control Flow</h3>

<p>Way to go! We just learned a lot of control flow concepts:

    if/else statements make binary decisions and execute different code based on conditions.
    All conditions are evaluated to be truthy or falsy.
    We can add more conditional statements to if/else statements with else if.
    switch statements make complicated if/else statements easier to read and achieve the same result.
    The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
    Comparison operators, including <, >, <=, and >= can compare two variables or values.
    After two values are compared, the conditional statement evaluates to true or false.
    The logical operator && checks if both sides of a condition are truthy.
    The logical operator || checks if either side is truthy.
    The logical operator !== checks if the two sides are not equal.
    An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
    One equals symbol (=) is used to assign a value to a variable.
    Three equals symbols (===) are used to check if two variables are equal to each other.
</p>
</div>

</template>

<script>
export default {
  name: 'ControlFlow'
}
</script>