import React, { Component } from "react";
import { Menu, Icon, Switch } from "antd";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    current: "brand-name"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

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
        <Menu.Item key="slider" style={{ float: "right" }}>
          <Switch onChange={this.props.onChange} />
        </Menu.Item>
        <Menu.Item key="login" style={{ float: "right" }}>
          <NavLink to="/login">
            <Icon type="login" />
            Login
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
