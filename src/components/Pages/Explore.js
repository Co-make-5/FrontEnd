import React from 'react';
import PieChart from '../Accents/PieChart';
import { Row, Input, Switch } from 'antd';

const { Search } = Input;

const Explore = (props) => {
    //onChange placeholder
    let onChange = (checked) => {
        console.log(`switch to ${checked}`)
    }

    return (
        <div style={{height: '80vh'}}>
            <Row justify="space-around" align="middle">
                <Switch 
                    defaultChecked
                    onChange={onChange}
                />
                <Search 
                    placeholder="Search..."
                    onSearch={value => console.log(value)}
                    style={{ width: 300 }}
                    enterButton
                />
            </Row>
            <PieChart/>
        </div>
    )
}

export default Explore