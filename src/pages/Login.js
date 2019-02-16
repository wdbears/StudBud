import React from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";

const LoginPage = () => (
  <div>
    <NormalLoginForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = e => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10vw"
        }}
      >
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
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.onChange}
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
              <a className="login-form-forgot" href=".">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href=".">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "normal_login" })(NormalLoginForm);
