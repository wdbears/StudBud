import React, { Component } from "react";
import { Layout, Icon, List } from "antd";
import ResourceDrawer from "../../components/ResourceDrawer.js";

const { Content } = Layout;
const listData = [
  {
    href: "https://designschool.canva.com/tutorials/",
    title: `Intro to Modern Design Principles`,
    description:
      "Fast-track your ability to create amazing designs. Canva's tutorials have all the tools you need for your creative journey.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  },
  {
    href: "https://www.taniarascia.com/design-for-developers/",
    title: `Design for Developers: Specific Steps to Improve Your Website Design`,
    description:
      "A brief article highlighting specific points which one should follow to ease into the world of design.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ResourceList extends Component {
  render() {
    return (
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
            <ResourceDrawer />
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
                    <IconText type="star-o" text="15" />,
                    <IconText type="like-o" text="36" />,
                    <IconText type="message" text="4" />
                  ]}
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
    );
  }
}

export default ResourceList;
