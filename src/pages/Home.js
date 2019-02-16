import React, { Component } from "react";
import { Layout, Menu, Icon, List } from "antd";
// import GroupStudy from "../images/groupstudy.jpg";

const { Content, Sider } = Layout;

// const center_style = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// };

const SubMenu = Menu.SubMenu;

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
          <Layout style={{ padding: "24px 24px 0" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0
              }}
            >
              <div>
                <span style={{ fontSize: 45 }}>Resources</span>
              </div>
              <div>
                <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 3
                  }}
                  dataSource={listData}
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText type="star-o" text="156" />,
                        <IconText type="like-o" text="156" />,
                        <IconText type="message" text="2" />
                      ]}
                      extra={
                        <img
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
