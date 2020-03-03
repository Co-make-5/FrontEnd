import React from 'react';
import { Row, Col } from "antd";
import Login from "./Login";
import LandingIllustration from "../assets/LandingIllustration.jpg";

const Landing = (props) => {

    return (
        <Row align="middle" style={{height: "100vh"}}>
            <Col
                align="middle"
                span={6}
                offset={4}
            >
                <h2>Create real change in your community.</h2>
                <Login />
            </Col>
            <Col span={14}>
                <img 
                    src={LandingIllustration} 
                    alt="illustration of smiling woman on computer"
                    style={{ width: "60%", padding: "0" }}
                />
            </Col>
        </Row>
    )
}

export default Landing;