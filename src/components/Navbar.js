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

  authProfile() {
    if (this.props.userExists) {
      return (
        <Menu.Item style={{ float: "right" }}>
          <NavLink to="/profile">My Profile</NavLink>
        </Menu.Item>
      );
    }
  }

  authSwitch() {
    if (this.props.userExists) {
      return (
        <Menu.Item
          key="signout"
          onClick={this.props.logout}
          style={{ float: "right" }}
        >
          <NavLink to="/login">
            <Icon type="logout" />
            Signout
          </NavLink>
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
        {this.authProfile()}
      </Menu>
    );
  }
}

export default Navbar;
