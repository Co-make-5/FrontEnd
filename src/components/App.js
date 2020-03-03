import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {testing, userSignUp, userSignIn} from '../actions/actions';
// Components
import Landing from './Landing';

const App = props => 
{

  useEffect(() => 
  {
    console.log('useEffect Fired!');
  }, [])

  const testUser = {
    username: 'user1',
    password: 'abc123'
  }

  const testSignupUser = {
    username: 'testing2',
    password: 'testing1'
  }

  return (
    <div className="App">
      <h1>Testing!</h1>
      <button onClick={ e => props.userSignIn(testSignupUser)}>Redux Testing</button>
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
    testing: state.testing
  };
};

export default withRouter(connect(mapStateToProps, {testing, userSignUp, userSignIn})(App))