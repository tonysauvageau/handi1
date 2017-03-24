import React from 'react';
import QuoteListings from './QuoteListings';
import { connect } from 'react-redux';
class QuoteForm extends React.Component {

addQuote = (e) => {
    e.preventDefault();

    $.ajax({
      url: '/api/quote',
      type: 'POST',
      data: {
        estimate: this.refs.estimate.value,
        quote: this.refs.quote.value,
        message: this.refs.message.value,
        jobid: this.refs.jobid.value,
        userid: this.refs.userid.value
      }
    }).done ( job => {
      this.refs.form.reset();
      this.refs.estimate.focus();
    }).fail ( job => {
      console.log('err '+job)
    });
  }

render() {

    return (
        <div>
          <h1>Submit a Quote</h1>
            <form ref="form" onSubmit={this.addQuote}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Time Estimate" ref="estimate" id="time" type="text" className="validate"/>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Quote" ref="quote" id="quote" type="number" className="validate"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" placeholder="Add a Message" ref="message"/>
                    </div>

                </div>
                <div className="row">
                    <div>
                        <input type="hidden" ref="jobid" value={this.props.jobid} />
                        <input type="hidden" ref="userid" value="1" />
                    </div>
                    <div className="input-field">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </div>

            </form>
            <div className="row">
                <QuoteListings jobid={this.props.jobid}/>
            </div>
        </div>
    )
}


}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(QuoteForm);
