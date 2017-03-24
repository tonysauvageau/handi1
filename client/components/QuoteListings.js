import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
                <li key={quote._id} className="collection-item"><Link to={`/quotes/${quote._id}`}>{`${quote.user} quoted the job for ${quote.quote}`}</Link></li>
            )
        }
    })

    return(
      <div>
        <h1>Quote Listing</h1>

        <ul className="collection">
          { quotes }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(QuoteListings);
