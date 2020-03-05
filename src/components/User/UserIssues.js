import React from "react";
// Redux Connect
import { connect } from "react-redux";
// Actions
import {fetchIssues, deleteIssue, editIssue} from "../../actions/actions";
// Componenets
import Tags from "../Accents/Tags";
// Ant Design
import { List, Button } from "antd";
import InfiniteScroll from "react-infinite-scroller";

const UserIssues = props => {
  let data = props.issues;

  let id = window.localStorage.getItem("userID");

  const results = data.filter(issue => issue.user_id == id);

  const temp = () => {
    return;
  };

  const deleteTicket = issueID => {
    props.deleteIssue(issueID);
}

  const IconText = ({ icon, text }) => (
    <span>
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </span>
  );

  return (
    <div className="infinite-container">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={temp}
        useWindow={false}
      >
        <List
          itemLayout="vertical"
          size="large"
          dataSource={results}
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={[
                <Button key="edit" style={{marginRight: '10px'}}>Edit</Button>,
                <Button key="delete" onClick={e => deleteTicket(item.id)}>Delete</Button>
              ]
              }
            >
              <List.Item.Meta
                title={item.issue_name}
                description={`Location: ${item.location !== null ? item.location : item.zip}`}
              />
              <p>{'Description: ' + item.description}</p>
              <p>Status: <Tags solved={item.solved} /></p>
            </List.Item>
          )}
        ></List>
      </InfiniteScroll>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    issues: state.issues,
    userIssues: state.userIssues
  };
};

export default connect(mapPropsToState, { fetchIssues, deleteIssue, editIssue })(UserIssues);
