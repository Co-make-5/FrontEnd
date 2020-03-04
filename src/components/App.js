import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {userSignUp, userSignIn, fetchIssues} from '../actions/actions';
// Components
import Landing from './Landing';
import Home from './aaron/home'
import testing from './aaron/example'
import Signup from './Signup';
import Login from './Login';

const App = props => 
{

  let issues = props.issues
  console.log(issues)

  const testSignupUser = {
    username: 'testing2',
    password: 'testing1'
  }

  useEffect(() => 
  {
    props.userSignIn(testSignupUser);
    props.fetchIssues();
    console.log('useEffect Fired!');
  }, [])

  return (
    <div className="App">
      <Route exact path="/"><Landing login={true} /></Route>
      <Route path="/signup"><Landing login={false} /></Route>
      <PrivateRoute exact path="/home" component={Home} data={{...props}} page={<Signup/>}/>
      <PrivateRoute exact path="/explore" component={Home} data={{...props}} page={<Signup/>}/>
      <PrivateRoute exact path="/analytics" component={Home} data={{...props}} page={<Signup/>}/>
      <PrivateRoute exact path="/user" component={Home} data={{...props}} page={<Signup/>}/>
    </div>
  );
};

const mapStateToProps = state => 
{
  return {
    testing: state.testing,
    issues: state.issues
  };
};

export default withRouter(connect(mapStateToProps, {testing, userSignUp, userSignIn, fetchIssues})(App))