import React from 'react';
import QuoteListings from './QuoteListings';
class QuoteForm extends React.Component {

addQuote = (e) => {
    e.preventDefault();
   
    $.ajax({
      url: '/api/quote',
      type: 'POST',
      data: { 
        estimate: this.refs.estimate.value,
        quote: this.refs.quote.value,
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
        <div className="container">

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

export default QuoteForm;

 