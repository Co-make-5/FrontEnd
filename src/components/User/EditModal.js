import React, {useState} from "react";
// Redux
import {connect} from 'react-redux'

import { Modal, Form, Input, Switch } from "antd";

const EditModal = ({ visible, onCancel, onCreate, currentIssue }) => {
  const [form] = Form.useForm();

  const [solved, setSolved] = useState(currentIssue.solved)
  console.log(solved)


  const onChange = checked => {
    console.log(`switch to ${checked}`);
    setSolved(checked)
};

  return (
    <Modal
      visible={visible}
      title="Update Issue"
      okText="Update"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            let update = {
              issue_name: values.issue_name !== undefined ? values.issue_name : currentIssue.issue_name,
              location: values.location !== undefined ? values.location : currentIssue.location,
              zip: values.zip !== undefined ? values.zip : currentIssue.zip,
              description: values.description !== undefined ? values.description : currentIssue.description,
              solved: solved ? 1 : 0
            }
            form.resetFields();
            onCreate(update);
          })
          .catch(info => {
            console.log("Validation failed:", info);
          });
      }}
    >
      {/* FORM BEGIN */}
      <Form form={form} layout="vertical" name="form_in_modal">
        {/* ISSUE TITLE */}
        <Form.Item
          name="issue_name"
          label="Title"
          rules={[
            {
              required: false,
              whitespace: false,
              message: "Please enter a descriptive & informative title"
            }
          ]}
        >
          <Input defaultValue={currentIssue.issue_name}/>
        </Form.Item>
        {/* ISSUE DESCRIPTION */}
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: false,
              whitespace: false,
              message: "Please describe the issue you'd like to see fixed"
            }
          ]}
        >
          <Input type="textarea" defaultValue={currentIssue.description}/>
        </Form.Item>
        {/* ISSUE ZIP */}
        <Form.Item
          name="zip"
          label="Zipcode"
          rules={[
            {
              required: false,
              whitespace: false,
              message: "Please add a zipcode"
            }
          ]}
        >
          <Input type="textarea" defaultValue={currentIssue.zip}/>
        </Form.Item>
        {/* LOCATION NAME */}
        <Form.Item
          name="location"
          label="City"
          rules={[
            {
              required: false,
              whitespace: false,
              message: "Optional City name"
            }
          ]}
        >
          <Input type="textarea" defaultValue={currentIssue.location}/>
        </Form.Item>
        <Form.Item
          name="solved"
          label="Solved"
        >
          <Switch defaultChecked={currentIssue.solved} onChange={onChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    currentIssue: state.currentIssue
  }
}

export default connect(mapStateToProps, {})(EditModal);
