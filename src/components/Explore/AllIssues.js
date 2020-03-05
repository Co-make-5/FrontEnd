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
      grid={{ gutter: 0, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }}
      dataSource={data}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 16,
        style: {textAlign: 'center'},
        hideOnSinglePage: true
      }}
      renderItem={item => (
        <List.Item style={{margin: '10px'}}>
          <Issue issue={item} key={item.id}/>
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
