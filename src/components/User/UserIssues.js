import React from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {fetchUserIssues} from '../../actions/actions'
// Componenets
import Tags from '../Accents/Tags'
import IssueLikes from '../Accents/IssueLikes';
// Ant Design
import { List } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

const UserIssues = (props) => {

    const data = props.issues;

    let id = window.localStorage.getItem('userID')

    const results = data.filter(issue => issue.user_id == id)


    const temp = () => {
      return
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
            dataSource={results}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.issue_name}
                  description={item.description}
                />
                <IssueLikes upvotes={item.upvotes}/>
                <Tags solved={item.solved}/>
                <div>{item.location}</div>
              </List.Item>
            )}
          >
          </List>
        </InfiniteScroll>
      </div>
    )
}

const mapPropsToState = state => {
    return {
        issues: state.issues,
        userIssues: state.userIssues
    }
}

export default connect(mapPropsToState, {fetchUserIssues})(UserIssues)