import React from 'react';
// Ant Design
import { List } from 'antd';
// Components
import IssueRow from './IssueRow'
import IssueCard from './IssueCard';
const IssueList = (props) => {

    const data = props.issues


    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            style={{textAlign: 'left'}}
            renderItem={item => (
                <IssueRow item={item}/>
            )}
        />
    )
}

export default IssueList