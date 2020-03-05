import {
  // Testing
  TESTING,
  // User Login
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGGING_IN,
  // Setting of UserID
  SET_USER_ID,
  // Editing issue fix
  CURRENT_ISSUE,
  // Signup User
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNING_UP,
  // Fetch Issues
  FETCH_ISSUES,
  FETCH_ISSUES_ERROR,
  FETCHING_ISSUES,
  // Fetch Issues
  USER_ISSUES,
  // Adding Issue
  ADD_ISSUE,
  ADD_ISSUE_ERROR,
  ADDING_ISSUE,
  // Upvote Issue
  UPVOTE_ISSUE,
  UPVOTE_ISSUE_ERROR,
  UPVOTING_ISSUE,
  // Editing Issue
  EDIT_ISSUE,
  EDIT_ISSUE_ERROR,
  EDITING_ISSUE,
  // Deleting of Issue
  DELETE_ISSUE,
  DELETE_ISSUE_ERROR,
  DELETING_ISSUE
} from "../actions/actions";

const initialState = {
  testing: "",
  user: "",
  userID: "",
  loginError: "",
  fetchError: "",
  addError: "",
  upvoteError: "",
  editError: "",
  deleteError: "",
  logginIn: false,
  signingUp: false,
  fetchingIssues: false,
  addingIssue: false,
  upvotingIssue: false,
  editingIssue: false,
  deletingIssue: false,
  issues: [],
  userIssues: [],
  currentIssue: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TESTING:
      return {
        ...state,
        testing: action.payload
      };
    case CURRENT_ISSUE:
      return {
        ...state, 
        currentIssue: action.payload
      }
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case LOGGING_IN:
      return {
        ...state,
        logginIn: !state.logginIn
      };
    case SET_USER_ID:
      return {
        ...state,
        userID: action.payload
      }
    case SIGNUP_USER:
      return {
        ...state,
        userID: action.payload[0]
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case SIGNING_UP:
      return {
        ...state,
        signingUp: !state.signingUp
      };
    case FETCH_ISSUES:
      return {
        ...state,
        issues: action.payload
      };
    case FETCH_ISSUES_ERROR:
      return {
        ...state,
        fetchError: action.payload
      };
    case FETCHING_ISSUES:
      return {
        ...state,
        fetchingData: !state.fetchingData
      };
    case USER_ISSUES:
      return {
        ...state,
        userIssues: action.payload
      };
    case ADD_ISSUE:
      return {
        ...state
      };
    case ADD_ISSUE_ERROR:
      return {
        ...state,
        addError: action.payload
      };
    case ADDING_ISSUE:
      return {
        ...state,
        fetchingData: !state.fetchingData
      };
    case UPVOTE_ISSUE:
      return {
        ...state
      };
    case UPVOTE_ISSUE_ERROR:
      return {
        ...state,
        upvoteError: action.payload
      };
    case UPVOTING_ISSUE:
      return {
        ...state,
        upvotingIssue: !state.upvotingIssue
      };
    case EDIT_ISSUE:
      return {
        ...state
      };
    case EDIT_ISSUE_ERROR:
      return {
        ...state,
        editingIssue: action.payload
      };
    case EDITING_ISSUE:
      return {
        ...state,
        editingIssue: !state.editingIssue
      };

    case DELETE_ISSUE:
      return {
        ...state
      };
    case DELETE_ISSUE_ERROR:
      return {
        ...state,
        deleteError: action.payload
      };
    case DELETING_ISSUE:
      return {
        ...state,
        deletingIssue: !state.deletingIssue
      };
    default:
      return state;
  }
};
