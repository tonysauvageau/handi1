import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import Main from './components/Main';
import PostAJob from './components/PostAJob';
import JobListings from './components/JobListings';
import JobListing from './components/JobListing';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' },
  redirectAction: () => browserHistory.push("/signin"),
  wrapperDisplayName: 'UserIsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
 <Route>
   <Route path="/" component={App} >
     <IndexRoute component={Main} />
     <Route path="signup" component={Auth} title="Sign Up" />
     <Route path="signin" component={Auth} title="Sign In" />
     <Route path="/post-a-job" component={PostAJob} />
        <Route path="/find-a-job" component={JobListings} />
        <Route path="/jobs/:id" component={JobListing} />
        <Route component={AuthenticatedRoutes}>
        {/* PROTECTED BY AUTHENTICATION */}
        

       
       <Route component={AdminRoutes}>
           {/* PROTECTED BY ADMIN ACCESS */}
       </Route>
     </Route>
     <Route path="*" status={404} component={NotFound}/>
   </Route>
 </Route>
)
