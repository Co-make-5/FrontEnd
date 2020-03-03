import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
//   const tailFormItemLayout = {
//     wrapperCol: {
//       xs: {
//         span: 24,
//         offset: 0,
//       },
//       sm: {
//         span: 16,
//         offset: 8,
//       },
//     },
//   };

const Signup = (props) => {

    // const [form] = Form.useForm();

    const onFinish = values => {
        console.log("Received values from sign up form: ", values)
    };

    return (
        <Form
            {...formItemLayout}
            // form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            style={{border: "1px solid red"}}
        >
            {/* NAME */}
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "Please enter your name!",
                        whitespace: true
                    }
                ]}
            >
                <Input />
            </Form.Item>

            {/* EMAIL */}
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        type: "email",
                        message: "A valid email address must contain a single @ followed by a domain"
                    },
                    {
                        required: true,
                        message: "Please enter your email address!"
                    }
                ]}
            >
                <Input />
            </Form.Item>

            {/* PASSWORD */}
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: "Please enter a password"
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            {/* ZIP CODE <-- add more validation to ensure entering 5 digit zip code here */}
            <Form.Item
                name="zipcode"
                label="ZIP Code"
                rules={[
                    {
                        required: true,
                        message: "Please enter your 5-digit ZIP code"
                    }
                ]}
            >
                <Input />
            </Form.Item>

            {/* SIGN UP BUTTON */}
            <Form.Item 
            // {...tailFormItemLayout}
            >
                <Button type="primary" htmlType="submit">
                    Create an Account
                </Button>
                Already have an account? <Link to="/">Log in.</Link>
            </Form.Item>
        </Form>
    );
};

export default Signup;