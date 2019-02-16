import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import ReferencesList from "./views/ReferencesList";
import Comments from "./views/Comments";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "92.3vh", zIndex: "-1" }}>
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
              <Menu.Item key="0" style={{ position: "absolute", bottom: 5 }}>
                <Icon type="plus" />
                <span style={{ fontSize: 20 }}>
                  <Link to="/classes">Add Class</Link>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <ResourceList />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
