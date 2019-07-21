import * as React from "react";
import styles from "./navigation.module.scss";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";

interface NavigationProps {}

interface NavigationState {}

type Props = NavigationProps;
type State = NavigationState;

class Navigation extends React.Component<Props, State> {
  state = {
    current: ""
  };
  handleClick = (e: ClickParam) => {
    this.setState(() => ({
      current: e.key
    }));
  };

  public componentDidMount() {
    this.setState({
      current: window.location.pathname.slice(1)
    });
  }

  public render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <div className={styles.menuItem}>
            <Icon type="home" />
            <NavLink to="/home">Home</NavLink>
          </div>
        </Menu.Item>
        <Menu.Item key="pay" className={styles.menuItem}>
          <div className={styles.menuItem}>
            <Icon type="dollar" />
            <NavLink to="/pay">Pay</NavLink>
          </div>
        </Menu.Item>
        {/* <Menu.Item key="signIn" className={styles.menuItem}>
          <div className={styles.menuItem}>
            <Icon type="login" />
            <NavLink to="/sign-in">Sign In</NavLink>
          </div>
        </Menu.Item>
        <Menu.Item key="signUp" className={styles.menuItem}>
          <div className={styles.menuItem}>
            <Icon type="user-add" />
            <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
        </Menu.Item> */}
        <Menu.Item key="logout" className={styles.menuItem}>
          <div className={styles.menuItem}>
            <Icon type="logout" />
            <NavLink to="/sign-in">Log Out</NavLink>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
