import React from 'react';
import JobPostForm from './JobPostForm';

class PostAJob extends React.Component {


  render() {
    return (
      <div className="container">
        <h1>Post Your Job</h1>
        <p className="grey-text flow-text">
          Do you have a job that needs to be done? Fill out the form below and get started.
        </p>
        <br/>
        <hr/>
        <JobPostForm />
      </div>
    )
  }

}

export default PostAJob;