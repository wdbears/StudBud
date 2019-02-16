import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
// import ResourceList from "./views/ResourceList";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  render() {
    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Course One</span>
              </span>
            }
          >
            <Menu.Item key="1">Resources</Menu.Item>
            <Menu.Item key="2">Discussion</Menu.Item>
            <Menu.Item key="3">Mentors</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Course Two</span>
              </span>
            }
          >
            <Menu.Item key="4">Resources</Menu.Item>
            <Menu.Item key="5">Discussion</Menu.Item>
            <Menu.Item key="6">Mentors</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Course Three</span>
              </span>
            }
          >
            <Menu.Item key="7">Resouces</Menu.Item>
            <Menu.Item key="8">Discussion</Menu.Item>
            <Menu.Item key="9">Mentors</Menu.Item>
          </SubMenu>
          <Menu.Item key="0" style={{ position: "absolute", bottom: 5 }}>
            <Icon type="plus" />
            <span style={{ fontSize: 20 }}>
              <Link to="/classes">Add Class</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
