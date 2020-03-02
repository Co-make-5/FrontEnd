import React from 'react';
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

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
            style={{ maxWidth: "300px" }}
        >
            {/* USERNAME */}
            <Form.Item
                name="username"
                rules={[{ required: true, message: "Please enter your username!"}]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon"/>}
                    placeholder="Username"
                />
            </Form.Item>
            {/* PASSWORD */}
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter your password!"}]}
            >
                <Input 
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder="Password"
                />
            </Form.Item>
            {/* LOGIN BUTTON */}
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    Log In
                </Button>
                {/* REGISTER LINK <--- need to add */}
                Don't have an account? Sign up now!
            </Form.Item>
        </Form>
    )
}

export default Login;