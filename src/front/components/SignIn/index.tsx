import { Button, Checkbox, Form, Icon, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { IAppState } from "front/store";
import * as React from "react";
import { connect } from "react-redux";
import styles from "./signIn.module.scss";

interface UserFormProps extends FormComponentProps {}

class SignIn extends React.Component<UserFormProps, any> {
  public handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.signInWrapper}>
        <Form onSubmit={this.handleSubmit} className={styles.signInForm}>
          <h1>Sign In</h1>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
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
            <Button
              type="primary"
              htmlType="submit"
              className={styles.signInButton}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {};
};

export default connect(mapStateToProps)(
  Form.create<UserFormProps>({ name: "login" })(SignIn)
);
