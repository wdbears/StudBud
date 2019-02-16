import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
// import ResourceList from "./views/ResourceList";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  render() {
    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
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
            <Menu.Item key="1">
              <Link to="resourcelist">Resources</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="discussionboard">Discussion</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="mentorlist">Mentors</Link>
            </Menu.Item>
          </SubMenu>
          {/* Add Class */}
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
