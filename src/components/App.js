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
import Home from './aaron/Home';
import Signup from './Signup';
import User from './aaron/User';
import Analytics from './aaron/Analytics';
import Explore from './aaron/Explore';

const App = props => 
{

  useEffect(() => 
  {
    // props.userSignIn(testSignupUser)
    // .then(res => console.log(res))
    // .catch(err => console.log("ERR:", err))
  }, [])

  const historyPush = location => {
    props.history.push(location);
  }


  return (
    <div className="App">
      <Route exact path="/"><Landing login={true} push={historyPush}/></Route>
      <Route path="/signup"><Landing login={false} push={historyPush}/></Route>
      <PrivateRoute exact path="/home" component={Home} page={<Signup/>}/>
      <PrivateRoute exact path="/explore" component={Home} page={<Explore/>}/>
      <PrivateRoute exact path="/analytics" component={Home} page={<Analytics/>}/>
      <PrivateRoute exact path="/user" component={Home} page={<User/>}/>
    </div>
  );
};

const mapStateToProps = state => 
{
  return {};
};

export default withRouter(connect(mapStateToProps, {userSignUp, userSignIn, fetchIssues})(App))