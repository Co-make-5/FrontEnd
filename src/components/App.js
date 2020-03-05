import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {userSignUp, userSignIn, fetchIssues} from '../actions/actions';
// Components
import Landing from './Pages/Landing';
import User from './User/User';
import Analytics from './Pages/Analytics';
import Explore from './Pages/Explore';
import AllIssues from './Explore/AllIssues';
// Sidemenu && Dashboard
import Dashboard from './Navigation/Dashboard'
// Testing
import {axiosWithAuth} from '../utils/axiosWithAuth'

const App = props => 
{

  useEffect(() => 
  {
    axiosWithAuth().get('https://comake-backend.herokuapp.com/api/users')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    // props.userSignIn(testSignupUser)
    // .then(res => console.log(res))
    // .catch(err => console.log("ERR:", err))
    // props.fetchIssues();
  }, [])

  const historyPush = location => {
    props.history.push(location);
  }


  return (
    <div className="App">
      <Route exact path="/"><Landing login={true} push={historyPush}/></Route>
      <Route path="/signup"><Landing login={false} push={historyPush}/></Route>
      <PrivateRoute exact path="/home" component={Dashboard} data={historyPush} page={<AllIssues/>}/>
      <PrivateRoute exact path="/explore" component={Dashboard} data={historyPush} page={<Explore/>}/>
      <PrivateRoute exact path="/analytics" component={Dashboard} data={historyPush} page={<Analytics/>}/>
      <PrivateRoute exact path="/user" component={Dashboard} data={historyPush} page={<User/>}/>
    </div>
  );
};

const mapStateToProps = state => 
{
  return {
    issues: state.issues
  };
};

export default withRouter(connect(mapStateToProps, {userSignUp, userSignIn, fetchIssues})(App))