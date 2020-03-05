import React from "react";
import { Modal, Form, Input } from "antd";

const SubmitIssueForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Submit a new issue"
            okText="Submit"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log("Validation failed:", info);
                    });
            }}
        >
            {/* FORM BEGIN */}
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                {/* ISSUE TITLE */}
                <Form.Item
                    name="issue_name"
                    label="Title"
                    rules = {[{ required: true, whitespace: true, message: "Please enter a descriptive & informative title" }]}
                >
                    <Input />
                </Form.Item>
                {/* ISSUE DESCRIPTION */}
                <Form.Item
                    name="description"
                    label="Description"
                    rules= {[{ required: true, whitespace: true, message: "Please describe the issue you'd like to see fixed"}]}
                >
                    <Input type="textarea" />
                </Form.Item>
                {/* ISSUE ZIP */}
                <Form.Item
                    name="zip"
                    label="Zipcode"
                    rules= {[{ required: true, whitespace: false, message: "Please add a zipcode"}]}
                >
                    <Input type="textarea" />
                </Form.Item>
                {/* OPTIONAL LOCATION NAME */}
                <Form.Item
                    name="location"
                    label="City"
                    rules= {[{ required: false, whitespace: true, message: "Optional City name"}]}
                >
                    <Input type="textarea" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default SubmitIssueForm;