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
    let job = this.state
    
    $.ajax({
      url: `/api/jobs/${this.props.params.id}`,
      type: 'PUT',
      data: { job: { active: false } }
    }).done( job => {
      console.log(job.active);
    });
  }

  render() {
    let {job} = this.state


    return (
      <div>
        <nav className="grey darken-4">
          <div className="nav-wrapper container">
            <div className="col s12">
              <a href="/" className="breadcrumb">Home</a>
              <a href="/find-a-job" className="breadcrumb">Jobs</a>
              <a href="#" className="breadcrumb">{job.title}</a>
            </div>
          </div>
        </nav>
        <br/>
        <div className="container">

          <div className="row z-depth-2">
            <div className="col s12">
              <h1>{job.title} <small className="grey-text">posted in {job.category}</small></h1>
              <hr/>
              <p className="grey-text text-darken-2">{job.description}</p>
              <p className="grey-text">The job starts on <strong className="teal-text">{moment(job.startDate).format("dddd, MMMM Do YYYY")}</strong> and ends on <strong className="teal-text">{moment(job.endDate).format("dddd, MMMM Do YYYY")}</strong></p>
              <p className="green-text flow-text right">${job.budget}</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col s12">
              <QuoteForm jobid={job._id} />
            </div>
          </div>

        </div>

      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(JobListing);
