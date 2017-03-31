import React from 'react';
import { Link } from 'react-router';
import { logout, refreshLogin } from '../actions/auth';
import { connect } from 'react-redux';
import Flash from '../components/Flash';


class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav({ closeOnClick: true });
    this.props.dispatch(refreshLogin());
  }

  links = () => {
    return [
      { name: 'Home', path: '/' },
      { name: 'Post a Job', path: '/post-a-job' },
      { name: 'Find a Job', path: '/find-a-job' },
    ].map( (link, i) => {
      return this.link(i, link.name, link.path)
    })
  }

  link = (i, name, path) => {
    let activeClass = this.props.location.pathname === path ? 'active' : '';
    return (
      <li key={i} className={activeClass}>
        <Link to={path}>{name}</Link>
      </li>
    )
  }

  authLinks = () => {
    if (Object.keys(this.props.user).length) {
       let links = [
        ].map( (link, i) => {
          return this.link(i, link.name, link.path)
        });
        links.push(
          <li key="logout">
            <a
              href="#"
              onClick={ e => {
                this.props.dispatch(logout(this.props.router))
              }}
            >
              Logout
            </a>
          </li>
        )
      return links;
    } else {
      return [
        { name: 'Sign In', path: '/signin' },
        { name: 'Sign Up', path: '/signup' },
      ].map( (link, i) => {
        let active = this.props.location.pathname === link.path ? 'active' : '';
        return this.link(i, link.name, link.path)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="cyan darken-2">
            <div className="nav-wrapper container">
              <a href="/" className="brand-logo"><img src="img/handilogo.png"/></a>
              <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                { this.links() }
                { this.authLinks() }
              </ul>
              <ul className="side-nav" id="mobile">
                { this.links() }
                { this.authLinks() }
              </ul>
            </div>
          </nav>
        </div>
        <Flash />
        <div>
          {this.props.children}
        </div>
        <br/>
        <br/>
        <footer className="cyan darken-4">
          <div className="container">
            <br/>
            <div className="row">
              <div className="col s12 m6">
                <ul>
                  <li><Link to="/" className="white-text">Home</Link></li>
                  <li><Link to="/post-a-job" className="white-text">Post a Job</Link></li>
                  <li><Link to="/find-a-job" className="white-text">Find a Job</Link></li>
                  <li><Link to="/signin" className="white-text">Sign In</Link></li>
                  <li><Link to="/signup" className="white-text">Sign Up</Link></li>
                </ul>
              </div>
              <div className="col s12 m6">
                <a href="/" className="brand-logo"><img src="img/handilogo.png"/></a>              
                <p className="white-text">Handi app helps you connect quickly with available contractors, laborers and handyman in you area and get the best deal for your budget. </p>
              </div>
            </div>
            <br/>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
