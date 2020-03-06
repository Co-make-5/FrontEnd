import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
// Actions
import { fetchIssues } from "../../actions/actions";
// Ant Design
import { Row, Col } from "antd";
// Components
import LineChart from "../Accents/LineChart";
import PieChart from "../Accents/PieChart";
import AnalyticsCard from "../Accents/AnalyticsCard";

const Analytics = props => {
  const results = props.issues;
  console.log(results)

  const open = results.filter(issue => issue.solved == 0);

  const solved = results.filter(issue => issue.solved == 1);

  useEffect(() => {
    props.fetchIssues();
  }, []);

  return (
    <>
      <Row style={{ textAlign: "center", height: "30vh", marginLeft: "200px" }}>
        <Col span={6}>
          <AnalyticsCard text={"Total"} number={results.length} />
        </Col>
        <Col span={6}>
          <AnalyticsCard text={"Open"} number={open.length} />
        </Col>
        <Col span={6}>
          <AnalyticsCard text={"Solved"} number={solved.length} />
        </Col>
      </Row>
      <Row>
        <Col span={10} style={{ height: "40vh" }}>
          <PieChart issues={results} />
        </Col>
        <Col span={10} style={{ height: "40vh" }}>
          <LineChart />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = state => {
  return {
    issues: state.issues
  };
};

export default connect(mapStateToProps, { fetchIssues })(Analytics);
