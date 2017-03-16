import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

const AuthenticatedRoutes = ({ user, remember, children, router }) => (
  <div>
   { (user._id || remember) ? children : router.push('/signin') }
  </div>
)

const mapStateToProps = (state) => {
  return { user: state.user, remember: state.remember }
}

export default connect(mapStateToProps)(AuthenticatedRoutes);
