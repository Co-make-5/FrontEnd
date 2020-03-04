import React from "react";
// Redux Connect
import {connect} from 'react-redux';
// Redux Actions
import {userSignIn} from '../actions/actions';
// Login Utility
import signIn from '../utils/loginPromise'
// Router
import { Link } from "react-router-dom";
// Ant Design
import '@ant-design/compatible/assets/index.css';
import { Form, Input, Button } from "antd";

const Login = (props) => {

    const onFinish = values => {
        // This takes the values object and passes it directly to login promise
        signIn(props.userSignIn, values)
        .then(() => props.push("/home"))
        .catch(err => console.log(err))
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
                name="username"
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

const mapStateToProps = state => {
    return {
        testing: state.testing
        // Need to bring in status indicators
    }
}

export default connect(mapStateToProps, {userSignIn})(Login);