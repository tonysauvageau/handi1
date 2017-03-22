import React from 'react';
import QuoteForm from './QuoteForm';

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
        {job.title}<br />
        {job.category}<br />
        {job.description}<br />
        {job.startDate}<br />
        {job.endDate}<br />
        {job.location}<br />
        {job.budget}<br />
        {job.active}

      <QuoteForm jobid={job._id}/>
      </div>
    )

  }

}

export default JobListing;