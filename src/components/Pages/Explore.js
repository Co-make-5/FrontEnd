import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
// Actions
import { fetchIssues } from "../../actions/actions";
// ANTD
import { Row, Input, Switch, List } from "antd";
// Components
import Issue from "../Explore/Issue";

const { Search } = Input;

const Explore = props => {
  useEffect(() => {
    props.fetchIssues();
  }, []);

  // All of the issues in the application
  const issues = props.issues;
  console.log(props.issues);

  // Need to filter based on the inputs on the page

  //onChange placeholder
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <Row justify="space-around" align="middle">
        <Switch defaultChecked onChange={onChange} />
        <Search
          placeholder="Search..."
          onSearch={value => console.log(value)}
          style={{ width: 300 }}
          enterButton
        />
      </Row>
      <List
        grid={{ gutter: 0, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }}
        // This is where the data is put into the list
        dataSource={issues}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 16,
          style: { textAlign: "center" },
          hideOnSinglePage: true
        }}
        renderItem={item => (
          <List.Item style={{ margin: "10px" }}>
            <Issue issue={item} key={item.id} />
          </List.Item>
        )}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    issues: state.issues
  };
};

export default connect(mapStateToProps, { fetchIssues })(Explore);
