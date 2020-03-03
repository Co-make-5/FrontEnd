import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {testing, userSignUp, userSignIn, fetchIssues} from '../actions/actions';
// Components
import Landing from './Landing';

// ANTD
import { Button } from 'antd';
import { Icon } from '@ant-design/compatible'

const App = props => 
{

  let issues = props.issues
  console.log(issues)

  const testUser = {
    username: 'user1',
    password: 'abc123'
  }

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
      <Route exact path="/">
        <Landing login={true} />
      </Route>
      <Route path="/signup">
        <Landing login={false} />
      </Route>
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