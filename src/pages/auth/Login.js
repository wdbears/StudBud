import React from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { auth } from "../../components/Firebase/firebase";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then(result => {
          const user = result.user;
          this.setState({
            user
          });
        });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="center">
        <Col span={6}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="E-mail"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href=".">
                Forgot password
              </a>
              <span>{" or"}</span>
              <Link to="/register"> Register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "normal_login" })(NormalLoginForm);
