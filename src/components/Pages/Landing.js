import React from 'react';
import { Row, Col } from "antd";
import Login from "../Forms/Login";
import LandingIllustration from "../../assets/LandingIllustration.jpg";
import Signup from '../Forms/Signup';

const Landing = ({login, push}) => {

    return (
        <Row 
        // type="flex"
        // gutter={[48]}
        align="middle" 
        justify="space-around"
        style={{height: "85vh"}}
        >
            <Col span={6} offset={3}>
                {login ? <Login push={push}/> : <Signup push={push}/>}
            </Col>
            <Col span={12}>
                <img 
                    src={LandingIllustration} 
                    alt="illustration of smiling woman on computer"
                    style={{ width: "90%"}}
                />
            </Col>
        </Row>
    )
}

export default Landing;