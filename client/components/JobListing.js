import React from 'react';
import QuoteForm from './QuoteForm';
const moment = require('moment');

class JobListing extends React.Component {
  state = {job:[]}



  componentDidMount() {
      $.ajax({
        url: `/api/jobs/${this.props.params.id}`,
        type: 'GET'
      }).done ( job => {
        this.setState({ job });
      });
  }

  render() {
    let {job} = this.state


    return (
      <div className="container">

          <div className="jobDisplay">
            <div className="row">
              <div className="col s6 m6">
                <label>Title</label><br />
                {job.title}
              </div>
              <div className="col s6 m6">
                <label>Category</label><br />
                {job.category}
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12">
                <label>Description</label><br />
                {job.description}
              </div>
            </div>

            <div className="row">
                <div className="col s6 m3">
                  <label>Start</label><br />
                  {moment(job.startDate).format("dddd, MMMM Do YYYY")}
                </div>
                <div className="col s6 m3">
                  <label>End</label><br />
                  {moment(job.endDate).format("dddd, MMMM Do YYYY")}
                </div>
                <div className="col s6 m3">
                <label>Location</label><br />
                {job.location}
                </div>
                <div className="col s6 m3">
                <label>Budget</label><br />
                ${job.budget}.00 
                </div>
            </div>


        </div>


      <QuoteForm jobid={job._id}/>


      </div>
    )

  }

}

export default JobListing;
