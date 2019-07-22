import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { connect } from "react-redux";
import { AppState } from "store";

interface LinkStateProps {
  isLoggedIn: boolean;
}

type Props = LinkStateProps & RouteProps;

class ProtectedRoute extends Route<Props> {
  public render() {
    let redirectPath: string = "";
    if (!this.props.isLoggedIn) {
      redirectPath = "/sign-in";
    }

    if (redirectPath) {
      const renderComponent = () => (
        <Redirect to={{ pathname: redirectPath }} />
      );
      return (
        <Route {...this.props} component={renderComponent} render={undefined} />
      );
    } else {
      return <Route {...this.props} />;
    }
  }
}
export default connect(
  (state: AppState): LinkStateProps => ({
    isLoggedIn: state.firebase.auth.uid
  })
)(ProtectedRoute);
