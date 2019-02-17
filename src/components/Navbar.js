import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    current: "brand-name"
  };

  componentDidMount() {
    this.authSwitch();
  }

  componentDidUpdate() {
    this.authSwitch();
  }

  authSwitch() {
    if (this.props.userExists) {
      return (
        <Menu.Item
          key="signout"
          onClick={this.props.logout}
          style={{ float: "right" }}
        >
          <Icon type="logout" />
          Signout
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item key="login" style={{ float: "right" }}>
          <NavLink to="/login">
            <Icon type="login" />
            Login
          </NavLink>
        </Menu.Item>
      );
    }
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ lineHeight: "63px" }}
      >
        <Menu.Item key="brand-name">
          <Link to="/">
            <Icon type="team" />
            StudBud
          </Link>
        </Menu.Item>
        {this.authSwitch()}
      </Menu>
    );
  }
}

export default Navbar;
