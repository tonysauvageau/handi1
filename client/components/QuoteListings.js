import React from 'react';
import { Link } from 'react-router';

class QuoteListings extends React.Component {
  
  state = { quotes: [] }

  componentDidMount() {
    $.ajax({
      url: '/api/quote',
      type: 'GET'
    }).done( quotes => {
      this.setState({ quotes });
    });
  }

  render() {
    let quotes = this.state.quotes.map( quote => {
        if (quote.jobid == this.props.jobid) {
            return ( 
                <li key={quote._id} className="collection-item"><Link to={`/quotes/${quote._id}`}>{`userName quoted the job for ${quote.quote}`}</Link></li>
            )
        }
    })
    
    return(
      <div className="container">
        <h1>Find a quote</h1>
        <p className="flow-text grey-text">Use the filter options to find all the quotes you're capable of doing and start placing your bids today!</p>
        <ul className="collection">
          { quotes }
        </ul>
      </div>
    )
  }

}

export default QuoteListings;