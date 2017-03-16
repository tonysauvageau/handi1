import React from 'react';

const JobPostForm = () => (
<div class="container">  
<div class="row">
  <div class="input-field col s12 m12">
    <div class="select-wrapper"><span class="caret">▼</span>
      <select class="initialized">
        <option value="" disabled="" selected="">What type of service do you need?</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select></div>
    </div>
  </div>

  <div class="row">
    <div class="input-field col s6 m6">
      <label for="dateStart" class="active">Date Start</label>
      <input type="date" class="datepicker">
    </div>
    <div class="input-field col s6 m6">
      <label for="dateEnd" class="active">Date End</label>
      <input type="date" class="datepicker">
    </div>
  </div>

  <div class="row">
  <div class="input-field col s12 m12">
    <div class="select-wrapper"><span class="caret">▼</span>
      <select class="initialized">
        <option value="" disabled="" selected="">Location?</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select></div>
    </div>
  </div>

  <div class="row">
  <form class="col s12">
    <div class="row">
    <div class="input-field col s12">
      <textarea id="textarea1" class="materialize-textarea"></textarea>
      <label for="textarea1">Description</label>
    </div>
    </div>
  </form>
  </div>

  <div class="input-field col s12 m6">
  <div class="file-field input-field">
    <div class="btn">
    <span>File</span>
    <input type="file">
    </div>
    <div class="file-path-wrapper">
    <input class="file-path validate" type="text">
    </div>
  </div>
  </div>

  <div class="row">
  <div class="input-field col s6">
    <input placeholder="Budget" id="budget" type="number" class="validate">
    <label for="budget">Budget</label>
  </div>
  </div>
</div>
)

export default JobPostForm;