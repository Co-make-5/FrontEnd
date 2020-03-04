import React from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Componenets
import Tags from '../Accents/Tags'
import IssueLikes from '../Accents/IssueLikes';
// Ant Design
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

const UserIssues = (props) => {

    let data = props.issues;

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
          </List>
        </InfiniteScroll>
      </div>
    )
}

const mapPropsToState = state => {
    return {
        issues: state.issues
    }
}

export default connect(mapPropsToState, {})(UserIssues)