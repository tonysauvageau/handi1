import React from 'react';

class JobPostForm extends React.Component {

  componentDidMount(){
    
      $('select').material_select();
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  }

  render(){
    return(
      <div className="container">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <select className="initialized">
                <option value="" disabled="" selected="">What type of service do you need?</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 input-field">
              <label for="dateStart" className="active">Date Start</label>
              <input type="date" className="datepicker"/>
            </div>
            <div className="col s12 m6 input-field">
              <label for="dateEnd" className="active">Date End</label>
              <input type="date" className="datepicker"/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <div className="select-wrapper"><span className="caret">▼</span>
                <select className="initialized">
                  <option value="" disabled="" selected="">Location?</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <label for="textarea">Description</label>              
              <textarea id="textarea" className="materialize-textarea"></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <label for="budget">Budget</label>              
              <input placeholder="Enter your budget" id="budget" type="number" />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <input type="submit" className="btn teal"/>
            </div>
          </div>

        </form>
      </div>

    )
  }
}

export default JobPostForm;