import React from "react";
import { Link } from "react-router-dom";
import '@ant-design/compatible/assets/index.css';
import { Form, Input, Button } from "antd";

const formItemLayout = {
    labelCol: {
        span: 24
    },
    wrapperCol: {
        span: 24
    }
};


const Signup = (props) => {

    const onFinish = values => {
        console.log("Received values from sign up form: ", values)
    };

    return (
        <Form
            {...formItemLayout}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <h2>Register your voice &amp; get things done.</h2>
            {/* NAME */}
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    { required: true, whitespace: true, message: "Please enter your name!" },
                    { min: 3, message: "Oops! Your name should be at least 3 characters"}
                ]}
            >
                <Input />
            </Form.Item>

            {/* EMAIL */}
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { type: "email", message: "A valid email address must contain a single @ followed by a domain" },
                    { required: true, message: "Please enter your email address!" }
                ]}
            >
                <Input type="email"/>
            </Form.Item>

            {/* PASSWORD */}
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    { required: true, message: "Please enter a password" },
                    { min: 6, message: "Your password must be at least 6 characters long." }
                ]}
            >
                <Input.Password />
            </Form.Item>

            {/* ZIP CODE <-- add more validation to ensure entering 5 digit zip code here */}
            <Form.Item
                name="zipcode"
                label="ZIP Code"
                rules={[
                    { required: true, message: "Your 5-digit ZIP code is required to sign up" },
                    { pattern: "^/d{5}$", message: "Please enter your 5-digit ZIP code"}
                ]}
            >
                <Input />
            </Form.Item>

            {/* SIGN UP BUTTON */}
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    Create an Account
                </Button>
                Already have an account? <Link to="/">Log in.</Link>
            </Form.Item>
        </Form>
    );
};

export default Signup;