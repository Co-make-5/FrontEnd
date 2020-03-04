import React from 'react';
import { Row } from 'antd';
import Issue from '../Explore/Issue';

const AllIssues = (props) => {

    return (
        <>
            <h1>Explore Page</h1>
            <Row justify="space-between">
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
            </Row>
        </>
    )
}

export default AllIssues;