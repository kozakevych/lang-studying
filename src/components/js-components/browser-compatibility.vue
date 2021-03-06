<template>

  <div class="blog-post text-left">
    <nav class="breadcrumbs-content" aria-label="breadcrumb" role="navigation">
      <ol class="breadcrumb">
        <router-link to="/js-course/" class="breadcrumb-item">Повернутися до змісту</router-link>
        <router-link to="/js-course/introduction-js" class="breadcrumb-item active" aria-current="page">Функції</router-link>
      </ol>
    </nav>

	
	<h2>Introduction</h2>

<p>You're probably prompted to update your web browser every few months. Do you know why? A few reasons include addressing security vulnerabilities, adding features, and supporting new HTML, CSS, and JavaScript syntax.</p>

<p>The reasons above imply there is a period before a software update is released when there are security vulnerabilities and unsupported language syntax.</p>

<p>This lesson focuses on the latter. Specifically, how developers address the gap between the new JavaScript syntax that they use, and the JavaScript syntax that web browsers recognize.</p>

<p>This has become a widespread concern for web developers since Ecma International, the organization responsible for standardizing JavaScript, released a new version of it in 2015, called ECMAScript2015, commonly referred to as ES6. Note, the 6 refers to the version of JavaScript and is not related to the year it was released (the previous version was ES5).</p>

<p>Upon release, web developers quickly adopted the new ES6 syntax, as it improved readability and efficiency. However, ES6 was not supported by most web browsers, so developers ran into browser compatibility issues.</p>

<p>In this lesson, you will learn about two important tools for addressing browser compatibility issues.</p>

  <p>caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support.<br />
  Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers.</p>

<p>Let's get started by running ES6 JavaScript on a fake old web browser version.</p>

<h3>caniuse.com I</h3>

<p>Since Ecma's release of ECMAScript2015 (ES6), software companies have slowly added support for ES6 features and syntax. While most new browser versions support the majority of the ES6 library, there are still a couple sources of compatibility issues:</p>

  <p>Some users have not updated to the latest, ES6 supported web browser version.
  A few ES6 features, like modules, are still not supported by most web browsers.</p>

<p>Because companies add support for ES6 features gradually, it's important for you to know how to look up browser support on a feature-by-feature basis. The website caniuse.com is the best resource for finding browser compatibility information.</p>

<p>In caniuse, you can enter an ES6 feature, like let, and see the percentage of browsers that recognize it. You can also see when each major web browser (Chrome, Safari, Edge, etc.) added support for the keyword.</p>

<p>The video to the right shows you how to get started with caniuse.com.</p>

<h3>caniuse.com II</h3>

<p>Now, it's your turn to get some practice with caniuse.com. In a new tab, open caniuse.com and complete the tasks below.</p>

<p>Why ES6?</p>

<p>Before we learn how to set up a JavaScript project that converts ES6 to an older version, it's worth understanding a few of the reasons Ecma made such substantial updates.</p>

<p>The version of JavaScript that preceded ES6 is called JavaScript ES5. Three reasons for the ES5 to ES6 updates are listed below:</p>

  <p>A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.
  Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
  Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls.</p>

<p>Because ES6 addressed the above issues, Ecma knew that adoption by web developers would occur quickly, while web browser support lagged behind.</p>

<p>To limit the impact of ES6 browser compatibility issues, Ecma made the new syntax backwards compatible, which means you can map JavaScript ES6 code to ES5.</p>

<h3>Transpilation With Babel</h3>

<p>In the last exercise, you manually converted ES6 code to ES5. Although manual conversion only took you a few minutes, it is unsustainable as the size of the JavaScript file increases.</p>

<p>Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript library called Babel that transpiles ES6 JavaScript to ES5.</p>

<p>Transpilation is the process of converting one programming language to another.</p>

<p>In the remaining exercises of this lesson, you will learn how to use Babel to transpile the new, easy-to-write version of JavaScript (ES6) to the old, browser-compatible version of JavaScript (ES5).</p>

<p>In the instructions below, you will pass JavaScript ES6 code to Babel, which will transpile it to ES5 and write it to a file in the lib directory.</p>

<h3>npm init</h3>

<p>In the last exercise, you wrote one command in your terminal to transpile ES6 code to ES5. In the next five exercises you will learn how to setup a JavaScript project that transpiles code when you run npm run build from the root directory of a JavaScript project.</p>

<p>The first step is to place your ES6 JavaScript file in a directory called src. From your root directory, the path to the ES6 file is ./src/main.js</p>

<p>The initial JavaScript project file structure is:</p>

<pre><code>project
|_ src
|___ main.js</code></pre>

<p>Before we install Babel, we need to setup our project to use the node package manager (npm). Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.</p>

<p>Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.</p>

<p>A package.json file contains information about the current JavaScript project. Some of this information includes:</p>

  <p>Metadata — This includes a project title, description, authors, and more.
  A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
  Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.</p>

<p>If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.</p>

<p>The terminal prompts you to fill in fields for the project's metadata (name, description, etc.)</p>

<p>You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. If you don't want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave them empty when it creates the package.json file.</p>

<p>After you run npm init your directory structure will contain the following files and folders:</p>

<pre><code>project
|_ src
|___ main.js
|_ package.json</code></pre>

<p>npm adds the package.json file to the same level as the src directory.</p>

<h3>Install Node Packages</h3>

<p>We use the npm install command to install new Node packages locally. The install command creates a folder called node_modules and copies the package files to it. The install command also installs all of the dependencies for the given package.</p>

<p>To install Babel, we need to npm install two packages, babel-cli and babel-preset-env. However, npm installs over one hundred other packages that are dependencies for Babel to run properly.</p>

<p>We install Babel with the following two commands:</p>

<pre><code>$ npm install babel-cli -D
$ npm install babel-preset-env -D</code></pre>

<p>The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.</p>

<p>The -D flag instructs npm to add each package to a property called devDependencies in package.json. Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.</p>

<p>Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. The new directory structure contains the following:</p>

<pre><code>project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json</code></pre>

<p>The ... in the file structure above is a placeholder for 100+ packages that npm installed.</p>

<h3>.babelrc</h3>

<p>Now that you've downloaded the Babel packages, you need to specify the version of the source JavaScript code.</p>

<p>You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file.</p>

<p>Your project directory contains the following folders and files:</p>

<pre><code>project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json</code></pre>

<p>Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.</p>

<p>Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.</p>

<p>To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:</p>

<pre><code>{
"presets": ["env"]
}</code></pre>

<p>When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.</p>

<h3>Babel Source Lib</h3>

<p>There's one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.</p>

<p>Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:</p>

<pre><code>...
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
}, ...</code></pre>

<p>In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:</p>

<pre><code>...
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build": "babel src -d lib"
}</code></pre>

<p>In the "scripts" object above, we add a property called "build". The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let's consider each argument in the method call:</p>

  <p>babel — The Babel command call responsible for transpiling code.<br />
  src — Instructs Babel to transpile all JavaScript code inside the src directory.<br />
  -d — Instructs Babel to write the transpiled code to a directory.<br />
  lib — Babel writes the transpiled code to a directory called lib.</p>

<p>In the next exercise, we'll run the babel src -d lib method to transpile our ES6+ code.</p>

<h3>Build</h3>

<p>We're ready to transpile our code! In the last exercise, we wrote the following script in package.json:</p>

<pre><code>"build": "babel src -d lib"</code></pre>

<p>Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.</p>

<p>From the command line, we type:</p>

<pre><code>npm run build</code></pre>

<p>The command above runs the build script in package.json.</p>

<p>Babel writes the ES5 code to a file named main.js (it's always the same name as the original file), inside of a folder called lib. The resulting directory structure is:</p>

<pre><code>project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json</code></pre>

<p>Notice, the directory contains a new folder named lib, with one file, called main.js.</p>

<p>The npm run build command will transpile all JavaScript files inside of the src folder. This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files, you only need to run one command (npm run build) to transpile all of your code.</p>

<h3>Review</h3>

<p>In this lesson, you learned about browser compatibility and transpilation. Let's review the key concepts:</p>

  <p>ES5 — The old JavaScript version that is supported by all modern web browsers.<br />
  ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.<br />
  caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.<br />
  Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.<br />
  npm init — A terminal command that creates a package.json file.<br />
  package.json — A file that contains information about a JavaScript project.<br />
  npm install — A command that installs Node packages.<br />
  babel-cli — A Node package that contains command line tools for Babel.<br />
  babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.<br />
  .babelrc — A file that specifies the version of the JavaScript source code.<br />
  "build" script — A package.json script that you use to tranpsile ES6+ code to ES5.<br />
  npm run build — A command that runs the build script and transpiles ES6+ code to ES5.</p>

<nav class="page-navigation" aria-label="Page navigation">
<ul class="pagination justify-content-center">
  <li class="page-item">
    <router-link to="/js-course/classes" class="page-link">Попередній розділ</router-link>
  </li>
  <li class="page-item">
    <router-link to="/js-course/modules" class="page-link">Наступний розділ</router-link>
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