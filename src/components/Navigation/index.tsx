import { signOut } from "actions/authActions";
import { Icon, Menu } from "antd";
import { ClickParam } from "antd/lib/menu";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Action, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "store";
import styles from "./navigation.module.scss";

interface NavigationProps {
  isLoggedIn: boolean;
  userLogo: string;
}

interface NavigationState {}

interface LinkDispatchProps {
  signOut: () => void;
}

interface LinkStateProps {
  isLoggedIn: boolean;
  userLogo: string;
}

type Props = NavigationProps & LinkDispatchProps;
type State = NavigationState;

class Navigation extends React.Component<Props, State> {
  public state = {
    current: "home"
  };
  public handleClick = (e: ClickParam): void => {
    this.setState(() => ({
      current: e.key
    }));
  };

  public componentDidUpdate(prevProps: Props) {
    const { isLoggedIn } = this.props;

    if (prevProps.isLoggedIn !== isLoggedIn) {
      this.setState({
        current: "home"
      });
    }
  }

  public logout = (): void => {
    const { signOut } = this.props;

    signOut();
  };

  public render() {
    const { isLoggedIn, userLogo } = this.props;
    const randomColorForUserLogo =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    if (isLoggedIn) {
      return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className={styles.menu}
        >
          <Menu.Item key="home">
            <div className={styles.menuItem}>
              <Icon type="home" />
              <NavLink to="/">Home</NavLink>
            </div>
          </Menu.Item>
          <Menu.Item
            key="logout"
            className={styles.menuItem}
            onClick={this.logout}
          >
            <div className={styles.menuItem}>
              <Icon type="logout" />
              <NavLink to="/sign-in">Log Out</NavLink>
            </div>
          </Menu.Item>
          <div
            className={styles.userLogo}
            style={{ backgroundColor: randomColorForUserLogo }}
          >
            {userLogo}
          </div>
        </Menu>
      );
    }

    return null;
  }
}

export default connect(
  (state: AppState): LinkStateProps => ({
    isLoggedIn: state.firebase.auth.uid,
    userLogo: state.firebase.profile.initials
  }),
  (dispatch: ThunkDispatch<any, any, Action>): LinkDispatchProps => ({
    signOut: bindActionCreators(signOut, dispatch)
  })
)(Navigation);
