import React from 'react';
// Ant Design
import { Card } from 'antd';

const AnalyticsCard = (props) => {

    const text = props.text;
    const total = props.number

    return (
        <>
            <Card title={text} style={{margin: '20px'}}>
                <h1>{total}</h1>
            </Card>
        </>
    )
}

export default AnalyticsCard