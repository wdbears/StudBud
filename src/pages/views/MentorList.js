import React, { Component } from "react";
import { Avatar, List, Skeleton, Layout } from "antd";
import NYUClassData from "../../helperMethods/NYUClassData";
import DrawerForm from "../../components/DrawerForm.js";

const headers = new Headers();
headers.append("Authorization", "Bearer ca893b71-2357-3da0-90d3-a6d0f74fd0f7");

const { Content } = Layout;

const init = {
  method: "GET",
  cors: "no-cors",
  headers
};

const data = [
  {
    title: "Abdullah Gulfam",
    description: "Calculus"
  },
  {
    title: "Brandon Yee",
    description: "Data Structure"
  },
  {
    title: "Steve Wong",
    description: "Head of Computer Science"
  },
  {
    title: "Lily Zhai",
    description: "Programming 3"
  },
  {
    title: "Pitom Schrute",
    description: "Agriculture"
  },
  {
    title: "Jim Beasely",
    description: "Business"
  },
  {
    title: "Michael Malone",
    description: "Accounting"
  }
];

class MentorList extends Component {
  componentDidMount() {
    fetch(
      "https://sandbox.api.it.nyu.edu/class-roster-exp/classes?term_description=Spring 2018",
      init
    )
      .then(response => {
        return response.json(); // or .json() or .blob() ...
      })
      .then(data => {
        let classes = data.map(classData => {
          return new NYUClassData(classData);
        });
        this.setState({ classes: classes });
        // console.log(this.state.classes);
      })
      .catch(e => {
        // error in e.message
      });
  }

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
            <span style={{ fontSize: 45 }}>Mentors</span>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item actions={[<DrawerForm />]}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={item.title}
                    description={item.description}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    );
  }
}

export default MentorList;
