<template>
	<div class="js-content">
		
      <div class="row">
  		<div class="col-4">
    	<div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-introducion-list" data-toggle="list" href="#list-introducion" role="tab" aria-controls="introducion">1. Introducion</a>
      <a class="list-group-item list-group-item-action" id="list-flow-list" data-toggle="list" href="#list-flow" role="tab" aria-controls="flow">2. Control Flow</a>
      <a class="list-group-item list-group-item-action" id="list-functions-list" data-toggle="list" href="#list-functions" role="tab" aria-controls="functions">3. Functions</a>
      <a class="list-group-item list-group-item-action" id="list-scope-list" data-toggle="list" href="#list-scope" role="tab" aria-controls="scope">4. Scope</a>
      <a class="list-group-item list-group-item-action" id="list-arrays-list" data-toggle="list" href="#list-arrays" role="tab" aria-controls="arrays">5. Arrays</a>
      <a class="list-group-item list-group-item-action" id="list-loops-list" data-toggle="list" href="#list-loops" role="tab" aria-controls="loops">6. Loops</a>
      <a class="list-group-item list-group-item-action" id="list-iterators-list" data-toggle="list" href="#list-iterators" role="tab" aria-controls="iterators">7. Iterators</a>
      <a class="list-group-item list-group-item-action" id="list-objects-list" data-toggle="list" href="#list-objects" role="tab" aria-controls="objects">8. Objects</a>
      <a class="list-group-item list-group-item-action" id="list-classes-list" data-toggle="list" href="#list-classes" role="tab" aria-controls="classes">9. Classes</a>
      <a class="list-group-item list-group-item-action" id="list-compatibility-list" data-toggle="list" href="#list-compatibility" role="tab" aria-controls="compatibility">10. Browser Compatibility</a>
      <a class="list-group-item list-group-item-action" id="list-modules-list" data-toggle="list" href="#list-modules" role="tab" aria-controls="modules">11. Modules</a>
      <a class="list-group-item list-group-item-action" id="list-requests-list" data-toggle="list" href="#list-requests" role="tab" aria-controls="requests">12. Requests</a>
    </div>
  </div>


  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-introducion" role="tabpanel" aria-labelledby="list-introducion-list">
        <h3>Introduction</h3>

            JavaScript is a widely used web-based programming language that powers the dynamic behavior on most websites, including this one.
            In this lesson, you will learn about data types and built-in methods, essential knowledge for all aspiring JavaScript developers. When you finish, you'll know how to write programs that solve mathematical expressions, compute the length of a word, and generate random numbers.
            This lesson covers the building blocks of JavaScript. Make sure to take notes and pace yourself. This foundation will set you up for  understanding more complex concepts later.

            <h6>
              <a href="introducion.html">Click here to start studying </a>
            </h6>
      </div>
      <div class="tab-pane fade" id="list-flow" role="tabpanel" aria-labelledby="list-flow-list">flow</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"></div>
      <div class="tab-pane fade" id="list-functions" role="tabpanel" aria-labelledby="list-functions-list">functions</div>
      <div class="tab-pane fade" id="list-scope" role="tabpanel" aria-labelledby="list-scope-list">scope...</div>
      <div class="tab-pane fade" id="list-arrays" role="tabpanel" aria-labelledby="list-arrays-list">arrays...</div>
      <div class="tab-pane fade" id="list-loops" role="tabpanel" aria-labelledby="list-loops-list">loops...</div>
      <div class="tab-pane fade" id="list-iterators" role="tabpanel" aria-labelledby="list-iterators-list">iterators...</div>
      <div class="tab-pane fade" id="list-objects" role="tabpanel" aria-labelledby="list-objects-list">objects...</div>
      <div class="tab-pane fade" id="list-classes" role="tabpanel" aria-labelledby="list-classes-list">classes...</div>
      <div class="tab-pane fade" id="list-compatibility" role="tabpanel" aria-labelledby="list-compatibility-list">compatibility...</div>
      <div class="tab-pane fade" id="list-modules" role="tabpanel" aria-labelledby="list-modules-list">modules...</div>
      <div class="tab-pane fade" id="list-requests" role="tabpanel" aria-labelledby="list-requests-list">requests...</div>
    </div>
  </div>
</div>

<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>









	</div>

</template>



<script>
export default {
  name: 'jsContent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
