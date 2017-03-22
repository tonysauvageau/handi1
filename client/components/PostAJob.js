import React from 'react';
import JobPostForm from './JobPostForm';

class PostAJob extends React.Component {


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
        <h1>Post Your Job</h1>
        <p className="">
          Do you have a job that needs to be done? Fill out the form below and get started.
        </p>
        </div>
        </div>
        <br/>
        <JobPostForm />
      </div>
    )
  }

}

export default PostAJob;