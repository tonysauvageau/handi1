import React from 'react';
import QuoteForm from './QuoteForm';
import { connect } from 'react-redux';

const moment = require('moment');

class JobListing extends React.Component {
  state = {job:[], status: ''}



  componentDidMount() {
      $.ajax({
        url: `/api/jobs/${this.props.params.id}`,
        type: 'GET'
      }).done ( job => {
        this.setState({ job });
      });
  }

  toggleActive = () => {
    this.state.job.active = !this.state.job.active
    let job = this.state
    $.ajax({
      url: `/api/jobs/${this.props.params.id}`,
      type: 'PUT',
      data: { job }
    }).done( job => {
      console.log('job updated');
    });
  }

  jobStatus = () => {
    if(this.state.job.user === this.props.user._id)
    {
      if(this.state.job.active)
      {
        return (
          <a href="#!" onClick={this.toggleActive}>Deactivate</a>
        )  
      }
    }
    else {
      return (
        <div>almost there</div>
      )
    }
  }

  render() {
    let {job} = this.state


    return (
      <div className="container">
        {this.jobStatus()}
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

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(JobListing);
