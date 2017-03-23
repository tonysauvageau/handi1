import React from 'react';
import { Link } from 'react-router';

class JobListing extends React.Component {
  
  state = { jobs: [] }

  componentDidMount() {

    $('select').material_select();

    $.ajax({
      url: '/api/jobs',
      type: 'GET'
    }).done( jobs => {
      this.setState({ jobs });
    });
  }

  render() {

      
      let jobs = this.state.jobs.map( job => {    
      return ( 
        <li key={job._id} className="joblisting">
          <Link to={`/jobs/${job._id}`}>
          <div className="row joblisting">
              <div className="col s2 m2">
                {job.startDate}
              </div>
              <div className="col s2 m2">
                {job.endDate}
              </div>
              <div className="col s6 m6">
                {job.title}
              </div>
              <div className="col s2 m2">
                {job.budget}
              </div>
            </div>
          </Link>
        </li>
      )
    })
    
    return(
      <div className="container">
        <div className="row">
          <h1>Find a job</h1>
          <p>Use the filter options to find all the jobs you're capable of doing and start placing your bids today!</p>
        </div>

        <form ref="form filter">
          <div className="row">
            <div className="col s12 m6">
              <label>Category</label>   
              <div className="input-field filterDrop ">
                <select className="initialized" ref="category" defaultValue="landscaping">
                  <option>What type of service do you need?</option>
                  <option value="1">Landscaping</option>
                  <option value="2">Painting</option>
                  <option value="3">Plumbing</option>
                  <option value="3">Meow Meow</option>
                  </select>
              </div>
              </div>

              <div className="col s4 m2">
                <label>Time Left</label>   
                  <div className="filterBtn"><button>>1</button></div>
              </div>
              <div className="col s4 m2">
                <label> &nbsp;</label>   
                  <div className="filterBtn"><button>5-10</button> </div>
              </div>
              <div className="col s4 m2">
                <label>&nbsp;</label>   
                  <div className="filterBtn"><button>10></button></div>
              </div>
            </div>

            <div className="row">
                <div className="col s6 m3">            
                  <input ref="min" placeholder="$ Min" id="min" type="number" />
                </div>
                <div className="col s6 m3">      
                  <input ref="max" placeholder="$ Max" id="max" type="number" />
                </div>

                <div className="col s4 m2">
                    <div className="filterBtn"><button>Open</button></div>
                </div>
                <div className="col s4 m2">
                    <div className="filterBtn"><button>Finished</button></div>
                </div>
                <div className="col s4 m2">
                    <div className="filterStart"><button>Filter</button></div>
                </div>
            </div>
        </form>

          <div className="row">
            <hr />
            <div className="col s2 m2">
              <label>Start</label>   
            </div>
            <div className="col s2 m2">
              <label>End</label>   
            </div>
            <div className="col s6 m6">
              <label>Description</label>   
            </div>
            <div className="col s2 m2">
              <label>Budget</label>   
            </div>
        </div>
        <hr />

        
        <div className="row">
          <ul className="joblist">
          { jobs }
        </ul>
        </div>

      </div>
    )
  }

}

export default JobListing;