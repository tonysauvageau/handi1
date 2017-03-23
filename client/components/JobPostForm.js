import React from 'react';

class JobPostForm extends React.Component {
  state = { jobs: [] }

  componentDidMount(){
    
      $('select').material_select();
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });

      $.ajax({
        url: '/api/jobs',
        type: 'GET'
      }).done ( jobs => {
        this.setState({ jobs });
      });
  }

  addJob = (e) => {
    e.preventDefault();
   
    $.ajax({
      url: '/api/jobs',
      type: 'POST',
      data: { 
        title: this.refs.title.value,
        category: this.refs.category.value,
        description: this.refs.description.value,
        startDate: this.refs.startDate.value,
        endDate: this.refs.endDate.value,
        location: this.refs.location.value,
        budget: this.refs.budget.value,
        active: true
      }
    }).done ( job => {
      this.refs.form.reset();
      this.refs.title.focus();
      this.setState({ jobs: [job, ...this.state.jobs ]})
    }).fail ( job => {
      console.log('err '+job)
    });
  }

  render(){

    let jobs = this.state.jobs.map( job => {
      return (
        <li key={job._id} className="collection-item"><a href={`/jobs/${job._id}`}>{job.title}</a></li>
      )
    });

    return(
      <div className="">
        
        <div className="card">
            <div className="card-content">
              <form ref="form" onSubmit={this.addJob}>
              
                  <div className="row">
                    <div className="col s12 m6">
                      <input ref="title" placeholder="Enter job title" />
                    </div>
                    <div className="col s12 m6">
                      <input ref="location" placeholder="Zip Code" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <select className="initialized" ref="category" defaultValue="landscaping">
                      <option>What type of service do you need?</option>
                      <option value="1">Landscaping</option>
                      <option value="2">Painting</option>
                      <option value="3">Plumbing</option>
                      <option value="3">Meow Meow</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m6 input-field">
                      <label className="active">Date Start</label>
                      <input type="date" className="datepicker" ref="startDate" />
                    </div>
                    <div className="col s12 m6 input-field">
                      <label className="active">Date End</label>
                      <input type="date" className="datepicker" ref="endDate"  />
                    </div>
                  </div>
              
                  <div className="row">
                    <div className="col s12">
                      <label>Description</label>              
                      <textarea ref="description" id="textarea" className="materialize-textarea"></textarea>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col s12">
                      <label>Budget</label>              
                      <input ref="budget" placeholder="Enter your budget" id="budget" type="number" />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col s12">
                      <input type="submit" className="btn orange darken-4"/>
                    </div>
                  </div> 
            
              </form>
            </div>
        </div>
        
        <div className="row">
            <div className="col s12">
              <div><h2>Your Job Posts</h2></div>
                <ul className="collection client">
                {jobs}
                </ul>
            </div>
        </div>
        
      </div>

    )
  }
}

export default JobPostForm;