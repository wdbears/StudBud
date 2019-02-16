import React, { Component } from "react";
import { Menu, Icon } from "antd";

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
          <Icon type="team" />
          StudBud
        </Menu.Item>
        <Menu.Item key="login" style={{ float: "right" }}>
          <Icon type="login" />
          Login
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
