import React from "react";
import { Form, Input, Row, Col, Checkbox, Button } from "antd";
import "../styles/Main.css";
//import Firebase from "../../components/Firebase/firebase";

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    email: "",
    password: ""
  };

  handleChange = e => {};

  handleSubmit = event => {
    console.log(event.currentTarget.password.value);
    // Firebase.doCreateUserWithEmailAndPassword(e.email, e.password).catch(
    //   error => {
    //     this.setState({ error });
    //   }
    // )
    event.preventDefault();
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row className="center">
        <Col span={6}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!"
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input type="password" />)}
            </Form.Item>
            <Form.Item label="Confirm Password">
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("agreement", {
                valuePropName: "checked"
              })(
                <Checkbox>
                  I have read the <a href="www.google.com">agreement</a>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "register" })(RegistrationForm);
