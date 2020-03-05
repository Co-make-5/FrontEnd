import React, { useState } from "react";
// Redux Connect
import { connect } from "react-redux";
// Actions
import { fetchIssues, deleteIssue, editIssue, currentIssue } from "../../actions/actions";
// Componenets
import Tags from "../Accents/Tags";
// Ant Design
import { List, Button } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import EditModal from "./EditModal";

const UserIssues = props => {
  const data = props.issues;

  const id = window.localStorage.getItem("userID");

  const results = data.filter(issue => issue.user_id == id);

  const temp = () => {
    return;
  };

  const deleteTicket = issueID => {
    props.deleteIssue(issueID);
  };

  const [visible, setVisible] = useState(false);

  const updateIssue = issue => {
    const update = issue;
    console.log(update)
    console.log(props.issue.id)
    props.editIssue(props.issue.id, update)
    setTimeout(() => {
      props.fetchIssues();
      setVisible(!visible)
    }, 500)
  }

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
                <Button key="edit" style={{ marginRight: "10px" }} onClick={e => {
                  props.currentIssue(item)
                  setVisible(!visible)
                  }}>
                  Edit
                </Button>,
                <Button key="delete" onClick={e => deleteTicket(item.id)}>
                  Delete
                </Button>
              ]}
            >
              <List.Item.Meta
                title={item.issue_name}
                description={`Location: ${
                  item.location !== null ? item.location : item.zip
                }`}
              />
              <p>{"Description: " + item.description}</p>
              <p>
                Status: <Tags solved={item.solved} />
              </p>
            </List.Item>
          )}
        ></List>
      </InfiniteScroll>
      <EditModal visible={visible} onCancel={e => setVisible(!visible)} onCreate={updateIssue} issue={props.currentIssue}/>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    issues: state.issues,
    userIssues: state.userIssues,
    issue: state.currentIssue
  };
};

export default connect(mapPropsToState, {
  fetchIssues,
  deleteIssue,
  editIssue,
  currentIssue
})(UserIssues);
