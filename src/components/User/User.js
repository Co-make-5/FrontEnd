import React, { useEffect } from "react";
// Redux Connect
import { connect } from "react-redux";
// Actions
import { fetchIssues, deleteIssue, editIssue } from "../../actions/actions";
// Ant Design
import { Row, Col } from "antd";
// Components
import UserIssues from "./UserIssues";
import UserAnalytics from "./UserAnalytics";

const User = props => {
  useEffect(() => {
    props.fetchIssues();
  }, []);

  return (
    <>
      <h5 style={{ textAlign: "center" }}>Your Issue's</h5>
      <UserIssues/>
      <UserAnalytics/>
    </>
  );
};

const mapPropsToState = state => {
  return {
    issues: state.issues
  };
};

export default connect(mapPropsToState, {
  fetchIssues,
  deleteIssue,
  editIssue
})(User);
