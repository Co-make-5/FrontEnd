import React from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {fetchIssues} from '../../actions/actions';
// Componenets
import Tags from '../Accents/Tags'
import IssueLikes from '../Accents/IssueLikes';
// Ant Design
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

const UserIssues = (props) => {

    let data = props.issues;


    return (
        <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          useWindow={false}
        >
          <List
            dataSource={data}
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
            {props.loading && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    )
}

const mapPropsToState = state => {
    return {
        issues: state.issues,
        loading: state.fetchingIssues
    }
}

export default connect(mapPropsToState, {fetchIssues})(UserIssues)