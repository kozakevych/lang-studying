<template>
	<div class="container">
		Loops

One of a computer's greatest abilities is to repeat a task multiple times. Loops let us tell the computer to loop over a block of code so that we don't have to write out the same process over and over.

Loops are especially useful when we have an array where we'd like to do something to each of its items, like logging each item to the console.

There are two kinds of loops we will learn in this lesson:

    for loops, which let us loop a block of code a known amount of times.

    while loops, which let us loop a block of code an unknown amount of times.

Looping Manually

Before we jump into writing a loop, let's write the output of a loop, so that we can better understand the benefits of writing them.

for Loops

Instead of writing out the same code over and over, let’s make the computer loop through our array for us. We can do this with for loops.

The syntax looks like this:

let animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
  console.log(animals[animalIndex]);
}

The output would be the following:

Grizzly Bear
Sloth
Sea Lion

Since this syntax is a little complicated, let's break it into four parts:

    Within the for loop's parentheses, the start condition is let animalIndex = 0, which means the loop will start counting at 0. animalIndex is called an iterator variable and it is a good practice to give this variable a descriptive name.

    The stop condition is animalIndex < animals.length, which means the loop will run as long as animalIndex is less than the length of the animals array. When animalIndex is equal to the length of the animals array, the loop will stop executing.

    The iterator is animalIndex++. This means that after each loop, animalIndex will increase by 1.

    Finally, the code block is inside of the { and } curly braces. The block will execute each loop until the program reaches the stop condition.

The secret to loops is that animalIndex, the variable we created inside the for loop's parentheses, is equal to a number. To be more clear, the first loop, animalIndex will equal 0, the second loop, animalIndex will equal 1, and the third loop, animalIndex will equal 2.

Loops make it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. We can write a for loop and replace the hard-coded number with the variable animalIndex, like this: animals[animalIndex].


for Loops, Backwards

If we can make a for loop run forwards through an array, can we make it run backward through one? Of course!

We can make our loop run backward by modifying the start, stop, and iterator conditions.

To do this, we'll need to edit the code between the for loop's parentheses:

    The start condition should set vacationSpotIndex to the length of the array.

    The loop should stop running when vacationSpotIndex is less than 0.

    The iterator should subtract 1 each time, which is the purpose of vacationSpotIndex--.

Nested for Loops

Let's say that you and a friend would like to go on vacation together. You've both made arrays of your favorite places and you want to compare to see if any of them match. This is a job for loops!

The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.

Every time the outer for loop runs once, the inner for loop will run completely.

These are called nested for loops and we can use them to check to see if any of your vacation spots match your friend's spots.

See the example below for proper formatting of nested for loops.


for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    //Code To Run
   }
 }

Note that in the example above, we used i and j as the iterator variables to make the structure of the code easier to see, but it is a better practice to use descriptive variable names.

while Loops

Awesome job! for loops are great, but they have a limitation: you have to know how many times you want the loop to run. What if you want a loop to execute an unknown or variable number of times instead?

For example, if we have a deck of cards and we want to flip cards (loop a card flipping function) until we get a Spade, how could we write that in JavaScript?

That's the purpose of the while loop. It looks similar to a for loop. See the example below.

while (condition) {
  // code block that loops until condition is false
}

    The loop begins with the keyword while.

    Inside the parentheses, we write a condition. As long as the condition evaluates to true, the block of code will loop.

    Inside the code block, we can write any code we'd like to loop.


Infinite Loops

Loops are a useful tool for improving the functionality of our programs. However, loops can also cause us problems if we aren't careful.

Both for loops and while loops need explicit instructions on when to terminate. Infinite loops are more common in while loops because they don't have an iterator built into their syntax. When writing a while loop, be sure to write the code that will guarantee the condition will eventually be met.

for loops require a start condition, a stop condition, and an iterator. The iterator should bring the loop from the start condition to the stop condition.

for (let i = 0; i < array.length; i--) {
   //some code
}

    The loop begins with i = 0.
    After one iteration through the loop, i is equal to -1. This is because i begins at 0 and 1 is subtracted from i each loop.

Do you see the problem? i is decreasing each time. It will never equal the length of the array. This code will execute forever.

for (let i = 0; i < array.length; i++) {
   //some code
}

We changed the iterator to i++ which means i will eventually equal the length of the array. We have eliminated the infinite loop!

Note: While completing this exercise, you may run into an infinite loop if you do not find the correct answer. If that happens, you may need to refresh the page.

Review: Loops

Great job! In this lesson, we learned how to write less repetitive code with loops.

    for loops allow us to repeat a block of code a known amount of times.
    We can use a for loop inside another for loop to compare two lists.
    while loops are for looping over a code block an unknown amount of times.
    Infinite loops occur when stop conditions are never met.


	</div>
</template>