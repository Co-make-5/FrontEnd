import React, { useEffect } from "react";
// Redux Connect
import { connect } from "react-redux";
// Actions
import { fetchIssues } from "../../actions/actions";
import { List } from "antd";
import Issue from "../Explore/Issue";

const AllIssues = props => {
  useEffect(() => {
    props.fetchIssues();
  }, []);

  const data = props.issues;

  console.log(data);

  return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Issue issue={item} />
          </List.Item>
        )}
      />
  );
};

const mapStateToProps = state => {
  return {
    issues: state.issues
  };
};

export default connect(mapStateToProps, { fetchIssues })(AllIssues);
