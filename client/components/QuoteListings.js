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

    $('.collapsible').collapsible();
  }


  render() {
    let quotes = this.state.quotes.map( quote => {
        if (quote.jobid == this.props.jobid) {
            return (
                <li key={quote._id}>
                  <div className="collapsible-header">{`${quote.user} quoted the job for $ ${quote.quote}`}</div>
                  <div className="collapsible-body"><p>I can complete this in {quote.estimate}. <br/> {quote.message}</p></div>
                </li>
            )
        }
    })

    return(
      <div>
        <h1>Quote Listings</h1>

        <ul className="collapsible" data-collapsible="accordion">
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

