import React from 'react';
import JobPostForm from './JobPostForm';

class PostAJob extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Post Your Job</h1>
        <p className="grey-text">
          Do you have a job that needs to be done? Do you not know how to do it? Maybe you just don't want to. We won't judge you.  Use the form below to submit a job you are needing completed.  Once submitted, one of the many available handymen will post a bid.  Then you get to select the best bid. 
        </p>
        <br/>
        <hr/>
        <JobPostForm />
      </div>
    )
  }

}

export default PostAJob;