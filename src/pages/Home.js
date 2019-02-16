import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Layout, Menu, Icon, List } from "antd";

const { Header, Content, Sider } = Layout;

const center_style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

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
      <Layout style={{ minHeight: "100vh", zIndex: "-1" }}>
        <Header className="header" style={{ background: "#fff" }}>
          <Navbar />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Course 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Course 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Course 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px 24px 0" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: "280"
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
                  footer={
                    <div>
                      <b>ant design</b> footer part
                    </div>
                  }
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
