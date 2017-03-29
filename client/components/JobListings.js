import React from 'react';
import { Link } from 'react-router';
const moment = require('moment');

class JobListings extends React.Component {
  constructor(props) {
    super(props)
    this.state = { jobs: [], category: 'all' , sortOrder : false};
    this.handleChange = this.handleChange.bind(this);


}
  componentDidMount() {

    //$('select').material_select();

    $.ajax({
      url: '/api/jobs',
      type: 'GET'
    }).done( jobs => {
      this.setState({ jobs });
    });
  }

  handleChange = (event) => {
    this.setState({category: event.target.value});
  }


  filteredJobs = () => {
    if ( this.state.category === "all" ) {
        return this.state.jobs
      } else {
      return this.state.jobs.filter( job => job.category === this.state.category )
    }
  }

  sorted = () => {
     if(this.state.sortOrder === true){
      return this.filteredJobs().sort( (a,b) => {
        if (a.budget > b.budget ) return 1;
        if (a.budget < b.budget ) return -1;
        return 0;
      })
     }
     else{
       return this.filteredJobs().sort( (a,b) => {
        if (a.budget > b.budget ) return -1;
        if (a.budget < b.budget ) return 1;
        return 0;
      })
     }

  }

  descending = () =>{
    this.setState({ sortOrder : !this.state.sortOrder})
  }

  render() {

      let jobs = this.sorted().map( job => {
        return (
          <li key={job._id} className="joblisting">
            <Link to={`/jobs/${job._id}`}>
            <div className="row joblisting">
                <div className="col s2 m2">
                  {moment(job.startDate).format("L")}
                </div>
                <div className="col s2 m2">
                  {moment(job.endDate).format("L")}
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
          <p>Use the filter options to find all the jobs youre capable of doing and start placing your bids today!</p>
        </div>

        <form ref="form" className="filter">
          <div className="row">
            <div className="col s12">
              <label>Category</label>

              <div className="input-field filterDrop ">
                <select value={this.state.category} onChange={this.handleChange} className="initialized browser-default" ref="category" defaultValue="landscaping">
                  <option value="" disabled>What type of service do you need?</option>
                  <option value="all">All</option>
                  <option value="1">Landscaping</option>
                  <option value="2">Painting</option>
                  <option value="3">Plumbing</option>
                  <option value="4">Meow Meow</option>
                  </select>
              </div>
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
              <label>Job Name</label>
            </div>
            <div className="col s2 m2">
              <label><a href="#!" onClick={this.descending}>Budget <i className="material-icons right">swap_vert</i></a></label>
            </div>
        </div>
        <hr />


        <div className="row">
          <ul className="joblist">
            {jobs}
          </ul>
        </div>

      </div>
    )
  }

}

export default JobListings;
