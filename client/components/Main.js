import React from 'react';
import JobPostForm from './JobPostForm';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Main extends React.Component {
  state = { quotes: [] }
  componentDidMount(){
    $(document).ready(function(){
      $('.slider').slider({indicators: false});
    });    

  }

  render(){
    
    return(
    
        <div id="main" className="LandingPageContainer">
          <div className="row">
          <div className="slider">
            <ul className="slides">
              <li>
                <img src="img/slide1.jpg"/>
                <div className="caption center-align">
                  <h3>Your Job Has Met Its Match!</h3>
                  <h5 className="light grey-text text-lighten-3">Choose from hundreds of contractors, handymen and laborers.</h5>
                </div>
              </li>
              <li>
                <img src="img/slide2.jpg"/>
                <div className="caption center-align">
                  <h3>Customers Connect With Businesses</h3>
                  <h5 className="light grey-text text-lighten-3">Customers can stay within their budget.</h5>
                </div>
              </li>
              <li>
                <img src="img/slide3.jpg"/>
                <div className="caption center-align">
                  <h3>Businesses Connect With Customers</h3>
                  <h5 className="light grey-text text-lighten-3">Contractors, handymen and laborers find people who need work now!</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
          
            <div className="section">
              <div className="row">
                <div className="col s12 m12">
                  <h1>Welcome to Handi.</h1>
                  <p>Handi app helps you connect quickly with available contractors, laborers and handyman in you area and get the best deal for your budget. Handi allows customers to bypass the long process of finding contractors, workers and laborers in their area, contacting them, and having to explain the project, the time frame, and the budget over and over again. </p>
                  <p>For contractors, workers and laborers Handi gives you a list of customers needing work in your area right now, avoids the problems of having to do your own website and then having that website get buried under several pages of search on Google, or posting and paying for an ad and having it lost among several others in your local service listings or on sites like Craigslist or KSL. Handi will get your companies name directly in front of the people needing work right now and allow you to choose what budget you’re willing to work for.</p>            </div>
              </div>
            </div>
          <div className="section2Wrap">
            <div className="section">
            <div className="row">
            <div className="col s12 m6 center">
              <img src="img/girlpainter.jpg"/>
            </div>
            <div className="col s12 m6">
              <h1>For customers:</h1>
              <ul className="bullets">
                <li>Post your job, the description, the time-frame and your budget.</li>
                <li>Contractors, laborers and handyman interested in your project quote you on your job.</li>
                <li>Select from multiple offers to find the specific quote and worker that is the best fit for your project.</li>
              </ul>
            </div>
            </div>
          </div>
          </div>
          <div className="section">
          <div className="row">
            <div className="col s12 m6">
              <h1>For Contractors:</h1>
              <ul className="bullets">
                <li>Find customers who need work in your area of specialty.</li>
                <li>Review their project and budget.</li>
                <li>Quote your price or rate for doing their job, along with the time frame it may take to do the job and add a description.</li>
              </ul>
            </div>
            <div className="col s12 m6 center">
              <img src="img/girlpainter2.jpg"/>
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

export default connect(mapStateToProps)(Main);

