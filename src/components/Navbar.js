import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link, NavLink } from "react-router-dom";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
  state = {
    current: "mail"
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
      >
        <Menu.Item key="brand-name">
          <Link to="/">
            <Icon type="team" />
            StudBud
          </Link>
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
