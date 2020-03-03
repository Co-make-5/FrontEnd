import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = (props) => {

    const onFinish = values => {
        console.log("Received values from login form:", values);
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <h2>Create real change in your community.</h2>
            {/* USERNAME */}
            <Form.Item
                name="email"
                rules={[{ 
                    required: true, 
                    message: "Please enter your email!"}
                ]}
            >
                <Input
                    // prefix={<UserOutlined className="site-form-item-icon"/>}
                    type="email"
                    placeholder="Email"
                />
            </Form.Item>
            {/* PASSWORD */}
            <Form.Item
                name="password"
                rules={[{ 
                    required: true, 
                    message: "Please enter your password!"}
                ]}
            >
                <Input 
                    // prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            {/* LOGIN BUTTON */}
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    Log In
                </Button>
                {/* REGISTER LINK <--- need to add */}
                Don't have an account? <Link to="/signup">Sign up now!</Link>
            </Form.Item>
        </Form>
    )
}

export default Login;