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
import { UserOutlined, LockOutlined } from '@ant-design/icons';

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
            {/* EMAIL */}
            <Form.Item
                name="username"
                rules={[{ 
                    required: true, 
                    message: "Please enter your email!"}
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type="email"
                    placeholder="Email"
                />
            </Form.Item>
            {/* PASSWORD */}
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: "Your password " },
                    { min: 6, message: "Your password must be at least 6 characters long." }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            {/* LOGIN BUTTON */}
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    Log In
                </Button>
                {/* LINK TO SIGN UP FORM */}
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