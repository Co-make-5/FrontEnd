import React from 'react';
// Ant Design
import { Card } from 'antd';

const IssueCard = (props) => {

    const item = props.item

    return (
        <Card title={item.issue_name} extra={<div>{item.location}</div>}>
            <p>{item.description}</p>
        </Card>
    )
}

export default IssueCard