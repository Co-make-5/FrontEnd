import React from 'react';
// Ant Design
import { List } from 'antd';

const IssueRow = (props) => {

    const item = props.item

    return (
        <List.Item
            key={item.id}
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