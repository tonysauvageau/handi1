import React from 'react';
import JobPostForm from './JobPostForm';

class Main extends React.Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.slider').slider({indicators: false});
    });        
  }

  render(){
    return(
      <div>
        <div className="slider fullscreen">
          <ul className="slides" data-indicators="false">
            <li>
              <img src="/slider1.jpg"/>
              <div className="caption center-align">
                <h1>Welcome to handi</h1>
                <p className="flow-text grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa quam, semper a dictum id, sodales nec ex. Donec sit amet tellus posuere, malesuada risus et, venenatis ex. Cras sed lectus convallis, gravida enim et, eleifend diam. Integer nec velit pharetra, accumsan magna quis, consequat urna. </p>
                <a href="/find-a-job" className="btn black btn-large">Find a Yob <i className="material-icons right">search</i></a>
                &nbsp;
                <a href="/post-a-job" className="btn teal white-text btn-large">Post a Yob <i className="material-icons right">work</i></a>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Main;
