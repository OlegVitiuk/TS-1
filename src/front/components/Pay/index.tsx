import { Button, Checkbox, Form, Icon, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { IAppState } from "front/store";
import * as React from "react";
import { connect } from "react-redux";
import styles from "./signUp.module.scss";

interface IProps {}

interface IState {}

class Pay extends React.Component<IProps, IState> {
  public render() {
    return <div>Pay PAGE</div>;
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {};
};

export default connect(mapStateToProps)(Pay);
