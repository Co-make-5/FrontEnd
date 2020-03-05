import React, { useEffect } from "react";
// Redux Connect
import { connect } from "react-redux";
// Actions
import { fetchIssues, deleteIssue, editIssue } from "../../actions/actions";
// Ant Design
import { Row, Col } from "antd";
// Components
import UserIssues from "./UserIssues";
import PieChart from "../Accents/PieChart";
import LineChart from "../Accents/LineChart";

const User = props => {
  useEffect(() => {
    props.fetchIssues();
  }, []);

  return (
    <>
      <h5 style={{ textAlign: "center" }}>Your Issue's</h5>
      <UserIssues />
      <Row>
        <Col span={12} style={{height: '40vh'}}><PieChart/></Col>
        <Col span={12} style={{height: '40vh'}}><LineChart/></Col>
      </Row>
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
