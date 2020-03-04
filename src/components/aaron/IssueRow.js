import React from 'react';
// Ant Design
import { List, Avatar, Skeleton } from 'antd';

const IssueRow = (props) => {

    const item = props.item

    return (
        <List.Item
            key={item.id}
            actions={[<a key="list-loadmore-more"></a>]}
          >
                <List.Item.Meta
                avatar={<div></div>}
                    title={item.issue_name}
                    description={item.description}
                />
            <div>{item.location}</div>
      </List.Item>
    )
}

export default IssueRow