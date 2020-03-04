import React from 'react';
// Ant Design
import { Tag } from 'antd';

const Tags = ({solved}) => {

    return (
        <>
            {solved ? <Tag color="#87d068">Solved</Tag> : <Tag color="#108ee9">Open</Tag>}
        </>
    )
}

export default Tags