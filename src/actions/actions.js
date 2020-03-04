// Axios import
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// Action Exports
// --THIS IS FOR TESTING--
export const TESTING = "TESTING";
// Login Actions - Login action functionality and handling possible errors
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
// Setting of UserID
export const SET_USER_ID = "SET_USER_ID";
// Signup Actions - Signup action functionality and handling possible errors
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_ERROR = "SIGNUP_USER_ERROR";
// Fetching ISSUES Actions - Used for fetching all ISSUES that are in the system and handling possible errors
export const FETCH_ISSUES = "FETCH_ISSUES";
export const FETCH_ISSUES_ERROR = "FETCH_ISSUES_ERROR";
// Fetching Current Users ISSUES Actions - Used for fetching all ISSUES that are in the system and handling possible errors
export const FETCH_USER_ISSUES = "FETCH_ISSUES";
// Create ISSUE Actions - Used for creating a new ISSUE and handling possible errors
export const ADD_ISSUE = "ADD_ISSUE";
export const ADD_ISSUE_ERROR = "ADD_ISSUE_ERROR";
// Upvoting of other users issues
export const UPVOTE_ISSUE = "UPVOTE_ISSUE";
export const UPVOTE_ISSUE_ERROR = "UPVOTE_ISSUE_ERROR";
// Editing of a  issue
export const EDIT_ISSUE = "EDIT_ISSUE";
export const EDIT_ISSUE_ERROR = "UPVOTE_ISSUE_ERROR";
// Deletion of a issue
export const DELETE_ISSUE = "DELETE_ISSUE";
export const DELETE_ISSUE_ERROR = "DELETE_ISSUE_ERROR";
// Fethching and Loading status for various actions
export const LOGGING_IN = "LOGGING_IN";
export const SIGNING_UP = "SIGNING_UP";
export const FETCHING_ISSUES = "FETCHING_ISSUES";
export const ADDING_ISSUE = "ADDING_ISSUE";
export const UPVOTING_ISSUE = "UPVOTING_ISSUE";
export const EDITING_ISSUE = "EDITING_ISSUE";
export const DELETING_ISSUE = "DELETING_ISSUE";

// Action Const's
// IMPORTANT: Check this out
const API = "https://comake-backend.herokuapp.com/api/";

// Testing Method
export const testing = () => {
  console.log("testing action fired");
  return {
    type: TESTING,
    payload: "Testing payload"
  };
};

// User Signup Method
export const userSignUp = user => dispatch => {

  console.log(user)

  return new Promise((resolve, reject) => {
    dispatch({ type: SIGNING_UP });
    axios.post(API + "auth/register", user)
    .then(res => {
      localStorage.setItem("userID", res.data);
      dispatch({ type: SIGNUP_USER, payload: res.data });
      dispatch({ type: SIGNING_UP });
      resolve();
    })
    .catch(err => {
      dispatch({ type: SIGNUP_USER_ERROR, payload: err });
      dispatch({ type: SIGNING_UP });
      reject();
    });
  })
};

// Signin Method for User's
export const userSignIn = user => dispatch => {


  return new Promise((resolve, reject) => {
    dispatch({ type: LOGGING_IN });
    axios.post(API + "auth/login", user)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_USER, payload: res.data.token });
      dispatch({ type: SET_USER_ID, payload: res.data.id });
      dispatch({ type: LOGGING_IN });
      resolve(res.data);
    })
    .catch(err => {
      dispatch({ type: LOGIN_USER_ERROR, payload: err });
      dispatch({ type: LOGGING_IN });
      reject(err);
    });
  })
};

// Signout Method for User's
export const userSignOut = () => {
  localStorage.setItem("token", "");
  return {
    type: LOGIN_USER,
    payload: ""
  };
};

// Fetching of ISSUES
export const fetchIssues = () => {
  const promise = axiosWithAuth().get(API + "issues");

  return dispatch => {
    dispatch({ type: FETCHING_ISSUES });
    promise
      .then(res => {
        dispatch({ type: FETCH_ISSUES, payload: res.data });
        dispatch({ type: FETCHING_ISSUES });
      })
      .catch(err => {
        dispatch({ type: FETCH_ISSUES_ERROR, payload: err });
        dispatch({ type: FETCHING_ISSUES });
      });
  };
};

// Fetching of Current User's ISSUES
export const fetchUserIssues = id => {
  const promise = axiosWithAuth().get(API + `users/${id}/issues`);

  return dispatch => {
    dispatch({ type: FETCHING_ISSUES });
    promise
      .then(res => {
        dispatch({ type: FETCH_USER_ISSUES, payload: res.data });
        dispatch({ type: FETCHING_ISSUES });
      })
      .catch(err => {
        dispatch({ type: FETCH_ISSUES_ERROR, payload: err });
        dispatch({ type: FETCHING_ISSUES });
      });
  };
};

// Adding of ISSUE
export const addIssue = (issue, userID) => {
  const promise = axiosWithAuth().post(API + `users/${userID}/issues`, issue);

  return dispatch => {
    dispatch({ type: ADDING_ISSUE });
    promise
      .then(res => {
        dispatch({ type: ADD_ISSUE, payload: res.data });
        dispatch({ type: ADDING_ISSUE });
      })
      .catch(err => {
        dispatch({ type: ADD_ISSUE_ERROR, payload: err });
        dispatch({ type: ADDING_ISSUE });
      });
  };
};

// Upvoting of a issue
export const upvoteIssue = (id, issue) => {
  const promise = axiosWithAuth().put(API + "issues/" + id, issue);

  return dispatch => {
    dispatch({ type: UPVOTING_ISSUE });
    promise
      .then(res => {
        // This will fire the action to upvote
        // May need to fetch tickets again to update state
        dispatch({ type: UPVOTE_ISSUE, payload: res.data });
        dispatch({ type: UPVOTING_ISSUE });
      })
      .catch(err => {
        dispatch({ type: UPVOTE_ISSUE_ERROR, payload: err });
        dispatch({ type: UPVOTING_ISSUE });
      });
  };
};

// Editing of a issue
export const editIssue = (id, issue) => {
  const promise = axiosWithAuth().put(API + "issues/" + id, issue);

  return dispatch => {
    dispatch({ type: EDITING_ISSUE });
    promise
      .then(res => {
        // This will fire the action to edit
        // May need to fetch tickets again to update state
        dispatch({ type: EDIT_ISSUE, payload: res.data });
        dispatch({ type: EDITING_ISSUE });
      })
      .catch(err => {
        dispatch({ type: EDIT_ISSUE_ERROR, payload: err });
        dispatch({ type: EDITING_ISSUE });
      });
  };
};

// Editing of a issue
export const deleteIssue = id => {
  const promise = axiosWithAuth().delete(API + "issue/" + id);

  return dispatch => {
    dispatch({ type: DELETING_ISSUE });
    promise
      .then(res => {
        // This will fire the action to delete
        // May need to fetch tickets again to update state
        dispatch({ type: DELETE_ISSUE, payload: res.data });
        dispatch({ type: DELETING_ISSUE });
      })
      .catch(err => {
        dispatch({ type: DELETE_ISSUE_ERROR, payload: err });
        dispatch({ type: DELETING_ISSUE });
      });
  };
};
