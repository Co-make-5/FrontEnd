import React from 'react';
// Ant Design
import { Card } from 'antd';

const AnalyticsCard = (props) => {

    const text = props.text;
    const total = props.number

    return (
        <>
            <Card title={text} style={{margin: '20px', borderRadius: '4px', border: '1px solid black', boxShadow: '10px 10px 19px -5px rgba(0,0,0,0.63)'}}>
                <h1>{total}</h1>
            </Card>
        </>
    )
}

export default AnalyticsCard