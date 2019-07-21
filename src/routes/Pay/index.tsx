import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "store";
import styles from "./pay.module.scss";

interface IProps {}

interface IState {}

class Pay extends React.Component<IProps, IState> {
  public render() {
    return <div>Pay PAGE</div>;
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {};
};

export default connect(mapStateToProps)(Pay);
