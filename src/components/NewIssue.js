import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

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
                    name="title"
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
            </Form>
        </Modal>
    );
}

const NewIssue = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = values => {
        console.log("Received values of form: ", values)
        setVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                onClick = {() => {
                    setVisible(true);
                }}
            >
                New Issue
            </Button>
            <SubmitIssueForm 
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </>
    );
}

export default NewIssue;