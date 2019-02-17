import React, { Component } from "react";
import { List, Button, Skeleton, Layout } from "antd";
import NYUClassData from "../../helperMethods/NYUClassData";
import firebase, { database } from "../../components/Firebase/firebase";

const headers = new Headers();
headers.append("Authorization", "Bearer ca893b71-2357-3da0-90d3-a6d0f74fd0f7");
const { Content } = Layout;
const init = {
  method: "GET",
  cors: "no-cors",
  headers
};

const url =
  "https://sandbox.api.it.nyu.edu/class-roster-exp/classes/?term_description=Spring%202018";

class ClassesList extends Component {
  state = {
    initLoading: false,
    loading: false,
    list: [],
    classes: []
  };

  addClass = this.addClass.bind(this);

  fetchData() {
    fetch(url, init)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let classes = data.map(classData => {
          return new NYUClassData(classData);
        });

        // Filtered out duplicate course values
        const result = [];
        const map = new Map();
        for (const item of classes) {
          if (!map.has(item.nyu_course_id)) {
            map.set(item.nyu_course_id, true);
            result.push({
              nyu_course_id: item.nyu_course_id,
              course_title: item.course_title
            });
          }
        }
        this.setState({ classes: result });
      })
      .catch(e => {
        // error in e.message
      });
  }

  componentDidMount() {
    this.fetchData();
    console.log();
  }

  addClass(e) {
    console.log(e.currentTarget.value);
    e.preventDefault();
    database
      .ref(
        firebase.auth().currentUser.uid +
          "/classSubscriptions/" +
          this.state.classes[e.currentTarget.value].course_title
      )
      .set({
        course_title: this.state.classes[e.currentTarget.value].course_title,
        nyu_course_id: this.state.classes[e.currentTarget.value].nyu_course_id,
        addedBy: firebase.auth().currentUser.email
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
            <span style={{ fontSize: 45 }}>Classes</span>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={this.state.classes}
            renderItem={(item, key) => (
              <List.Item
                actions={[
                  <Button value={key} onClick={this.addClass} type="primary">
                    Subscribe
                  </Button>
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={item.course_title}
                    description={item.nyu_course_id}
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

export default ClassesList;
