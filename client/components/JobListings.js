import React from 'react';
import { Link } from 'react-router';

class JobListing extends React.Component {
  
  state = { jobs: [] }

  componentDidMount() {
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
        <li key={job._id} className="collection-item"><Link to={`/jobs/${job._id}`}>{job.title}</Link></li>
      )
    })
    
    return(
      <div className="container">
        <h1>Find a job</h1>
        <p className="flow-text grey-text">Use the filter options to find all the jobs you're capable of doing and start placing your bids today!</p>
        <ul className="collection">
          { jobs }
        </ul>
      </div>
    )
  }

}

export default JobListing;