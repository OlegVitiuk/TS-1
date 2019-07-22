import { Button, Form, Icon, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { Link, Redirect } from "react-router-dom";
import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "store";
import styles from "./signUp.module.scss";
import { ThunkDispatch } from "redux-thunk";
import { signUp } from "actions/authActions";
import { bindActionCreators, Action } from "redux";
import { signUpData } from "types/signUp";

interface UserFormProps extends FormComponentProps {}

interface LinkDispatchProps {
  signUp: (userData: signUpData) => void;
}

interface LinkStateProps {
  authError: string;
  isLoggedIn: boolean;
}

interface SignUpProps {
  authError: string;
  isLoggedIn: boolean;
}

type Props = UserFormProps & LinkDispatchProps & SignUpProps;

class SignUp extends React.Component<Props, any> {
  public handleSubmit = (e: React.SyntheticEvent) => {
    const { signUp } = this.props;

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        signUp(values);
      }
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoggedIn, authError } = this.props;

    return (
      <React.Fragment>
        {isLoggedIn && <Redirect to="/" />}
        <div className={styles.signUpWrapper}>
          <Form onSubmit={this.handleSubmit} className={styles.signUpForm}>
            {authError && (
              <span className={styles.errorMessage}>{authError}</span>
            )}
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
              {getFieldDecorator("firstName", {
                rules: [
                  { required: true, message: "Please input your first name!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="First name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("lastName", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Last Name"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.signUpButton}
              >
                Sign-up!
              </Button>
              Already has a account? <Link to="/sign-in">Login!</Link>
            </Form.Item>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: AppState): LinkStateProps => ({
    authError: state.auth.authError,
    isLoggedIn: state.firebase.auth.uid
  }),
  (dispatch: ThunkDispatch<any, any, Action>): LinkDispatchProps => ({
    signUp: bindActionCreators(signUp, dispatch)
  })
)(Form.create<UserFormProps>({ name: "sign-in" })(SignUp));
