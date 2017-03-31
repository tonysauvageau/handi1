import React from 'react';
import QuoteForm from './QuoteForm';
import { connect } from 'react-redux';

const moment = require('moment');

class JobListing extends React.Component {
  state = {job:[], status: '', edit: false }



  componentDidMount() {
      $.ajax({
        url: `/api/jobs/${this.props.params.id}`,
        type: 'GET'
      }).done ( job => {
        this.setState({ job });
      });

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  }

  updateJob = (e) => {
    let { title, description, startDate, endDate, location, budget } = this.refs;
    e.preventDefault();
    console.log( title.value );

    $.ajax({
      url: `/api/jobs/${this.props.params.id}`,
      type: 'PUT',
      dataType:'JSON',
      data: { title: title.value, description: description.value, startDate: startDate.value, endDate: endDate.value, location: location.value, budget: budget.value }
    }).done( job => {
      this.setState({ job });
      this.toggleEdit();
    }).fail( job => {
      console.log(job);
    }); 

  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  showEdit = () => {
    let {job} = this.state
    if(this.state.edit){
      return (
        <form ref="form" onSubmit={this.updateJob}>
              <div className="row">
                <div className="col s12 m6">
                  <input ref="title" placeholder="Enter job title" defaultValue={job.title}/>
                </div>
                <div className="col s12 m6">
                  <input ref="location" placeholder="Zip Code" defaultValue={job.location} />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 input-field">
                  <label className="active">Date Start</label>
                  <input type="date" className="datepicker" ref="startDate" defaultValue={job.startDate} />
                </div>
                <div className="col s12 m6 input-field">
                  <label className="active">Date End</label>
                  <input type="date" className="datepicker" ref="endDate" defaultValue={job.endDate}   />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <label>Description</label>
                  <textarea ref="description" id="textarea" className="materialize-textarea" defaultValue={job.description}></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <label>Budget</label>
                  <input ref="budget" placeholder="Enter your budget" id="budget" type="number" defaultValue={job.budget} />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <input type="submit" className="btn orange darken-4"/>
                </div>
              </div>
          </form>
      )}
      else
      {
        let {job} = this.state
        return(
        <div className="row z-depth-2">
            <div className="col s12">
              <h1>{job.title} <small className="grey-text">posted in {job.category}</small></h1>
              <hr/>
              <p className="grey-text text-darken-2">{job.description}</p>
              <p className="grey-text">The job starts on <strong className="teal-text">{moment(job.startDate).format("dddd, MMMM Do YYYY")}</strong> and ends on <strong className="teal-text">{moment(job.endDate).format("dddd, MMMM Do YYYY")}</strong></p>
              <p className="green-text flow-text right">${job.budget}</p>
            </div>
          </div>
        )
      }
  }

  deleteJob = () => {
    console.log('delete clicked');
    $.ajax({
      url: `/api/jobs/${this.props.params.id}`,
      type: 'DELETE'
    }).done( () => {
      window.location = '/find-a-job';
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

        <div>
          { this.showEdit() }
          <button className="btn cyan darken-4" onClick={this.toggleEdit}>Edit</button>
          <button className="btn cyan darken-4" onClick={this.deleteJob}>Delete</button>
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
