<template>
	
  <div class="blog-post text-left">

		Introduction to Requests

There are numerous reasons why JavaScript is the preferred language of the web. Amongst the most important reasons are JavaScript's non-blocking properties, or that it is an asynchronous language.

Imagine that you navigate to a web page that has a large image file as its background. Would you want the entire page to freeze while the image is retrieved from the source, or would you want to continue interacting with other parts of the site?

Most websites have to make multiple requests to work fully. The way JavaScript handles multiple requests is called its event loop. Messages that will be sent to other websites containing code are added to a queue as certain events occur. Each message is run completely before moving on to the next one, which might cause the user to wait a long time between actions.

To prevent this, long messages are broken into smaller messages that are added to the queue when they are ready to be run. In the case of requesting information from another site, we separate the request (asking another website for information) from what we want to do with the response (the information the website returns to us). We can do this using a system of technologies called Asynchronous JavaScript and XML, or AJAX.

Before continuing with this lesson, you should visit the Google URL Shortener API documentation and follow the instructions in this article to create an API Key.

HTTP Requests

AJAX involves requesting data over the web, which is done using HTTP Requests. There are four commonly used types of HTTP requests - GET, POST, PUT, and DELETE. In this lesson, we'll only be writing GET and POST requests. GET requests receive information from other sites by sending a query. POST requests can change information on another site and will receive information or data in response.

There are several differences between the way GET and POST requests are made. A GET request is like a search. If you navigate to Google and search for something, you might notice that all of your search terms are added to the URL, like this:

https://www.google.com/#q=pizza+near+union+square

This URL is saying "Google, please retrieve a list of pizza near Union Square." It is not introducing any new information to Google.

POST requests, on the other hand, introduce new information to another website. Instead of sending this information in the URL of the request, it is sent as part of the body of the request. You will see what this looks like in later exercises.

XHR GET Requests I

When AJAX was first formalized by the World Wide Web Consortium in 2006, it required the use of an XMLHttpRequest object, a JavaScript object that is used to retrieve data. There are several steps to creating an AJAX request using an XMLHttpRequest, or XHR, object.

Let's explore the diagram to the right, which displays the boilerplate code for a making a GET request using an XHR object.

On the first line, we create an XMLHttpRequest object. We do that by typing new, then the type of object, XMLHttpRequest(). This is called the new operator.

The object is saved in a const called xhr. Throughout this request, we'll be accessing properties of this object.

On the next line, we save the URL to which we're going to make our request in a const called url.

We set the responseType of the xhr object to 'json'. There are other possible response types, which you can read about here.

onreadystatechange is an event handler that is called whenever the value of the readyState property changes. We set it equal to an anonymous function. This function will handle the response to our request.

First, we check if the readyState of our xhr object is equal to XMLHttpRequest.DONE. If that evaluates to true, the code in the block executes. It is useful while writing a new program to log the response to the console so that you can see its structure. Later, you might change this function to add parts of the response to your web page or do something else with it entirely.

Then, we call the .open() method on our xhr object and pass it two arguments - 'GET' (the type of request) and url, the URL we're querying. .open() creates and structures the request. It tells the request what method to use, GET or POST, and what URL to query.

Finally, we call the .send() method on our xhr object and pass it no arguments. This is because data sent in GET requests is sent as part of the URL. Calling the .send() method sends the xhr object with its relevant information to the API URL.

XHR GET Requests II

We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete AJAX GET request.

Feel free to refer to the diagram at any point while completing this exercise.

XHR GET Requests III

In the previous exercise, you wrote the boilerplate code for an AJAX request using an XMLHttpRequest object. In this exercise, we're going to use that boilerplate code with some modifications to expand a URL that has been shortened using the Google URL Shortener API.

Be sure that you have obtained an API Key following the steps in this article before continuing. Otherwise, this exercise won't work properly.

Make sure you have your browser's JavaScript console open as you complete this exercise. In Chrome, you can find this in View > Developer > JavaScript Console. You can learn more about Dev Tools by reading this article.

XHR POST Requests I

In the previous exercise, you successfully wrote a GET request using AJAX to expand a URL that had been shortened using the Google URL Shortener API. This is a big deal!

Now, you're going to learn how to construct POST requests and, in a few exercises, you'll shorten a URL using the Google URL Shortener API!

Recall that in a GET request, the query information (what you're asking the server to return) is generally sent as part of the URL whereas in a POST request, the information is sent to the server as part of the body of the request. This information is created and saved in the data constant and sent to the API as an argument passed to the .send() method.

The first two lines of this request are identical to the first two lines of the GET request. The third line is new. The data that we want to send to our API must be formatted properly. The particular properties and values sent will depend on the API you're using and the information you wish to send and retrieve.

The object containing this data is passed to the JSON.stringify() method, which will format the object as a string. This is saved to a const called data.

Everything else remains the same until the final two lines. When we call the .open() method on the xhr object, we pass the argument 'POST' instead of 'GET'. Finally, we pass the data string to the .send() method.
 <nav class="page-navigation" aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <router-link to="/js-course/modules" class="page-link">Попередній розділ</router-link>
    </li>
  </ul>
  </nav>
	</div>
</template>


<script>
  export default {
    name: 'requests-js'
  }
</script>