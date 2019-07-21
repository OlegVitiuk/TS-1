import { Button, Form, Icon, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { Link } from "react-router-dom";
import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "store";
import styles from "./signUp.module.scss";

interface UserFormProps extends FormComponentProps {}

class SignUp extends React.Component<UserFormProps, any> {
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
          <h1>Sign Up</h1>

          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "The input is not valid email!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
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
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your Password!"
                }
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
              Sign-up!
            </Button>
            Already has a account? Login! <Link to="/sign-in">login!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {};
};

export default connect(mapStateToProps)(
  Form.create<UserFormProps>({ name: "sign-up" })(SignUp)
);
