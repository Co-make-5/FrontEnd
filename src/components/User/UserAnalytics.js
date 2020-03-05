import React from "react";
// Redux Connect
import { connect } from "react-redux";
// Ant Design
import { Row, Col } from "antd";
// Components
import PieChart from "../Accents/PieChart";
import LineChart from "../Accents/LineChart";

const UserAnalytics = props => {
  const data = props.issues;
  console.log(data);

  const id = window.localStorage.getItem("userID");

  const results = data.filter(issue => issue.user_id == id);

  return (
    <>
      <Row>
        <Col span={12} style={{ height: "40vh" }}>
          <PieChart issues={results}/>
        </Col>
        <Col span={12} style={{ height: "40vh" }}>
          <LineChart />
        </Col>
      </Row>
    </>
  );
};

const mapPropsToState = state => {
  return {
    issues: state.issues
  };
};

export default connect(mapPropsToState, {})(UserAnalytics);
