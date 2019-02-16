import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import ReferencesList from "./views/ReferencesList";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "90vh", zIndex: "-1" }}>
        <Layout>
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
                <span style={{ fontSize: 20 }}>Add Class</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <ReferencesList />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
