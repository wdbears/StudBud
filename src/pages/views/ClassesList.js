import React, { Component } from "react";
import { List, Button, Skeleton, Layout } from "antd";
import NYUClassData from "../../helperMethods/NYUClassData";

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
    title: "Class 1",
    description: "Math"
  },
  {
    title: "Class 2",
    description: "English"
  }
];

const count = 3;
const url =
  "https://sandbox.api.it.nyu.edu/class-roster-exp/classes/?term_description=Spring%202018";

class ClassesList extends Component {
  state = {
    initLoading: false,
    loading: false,
    data: [],
    list: []
  };

  componentDidMount() {
    fetch(url, init)
      .then(response => {
        return response.json(); // or .json() or .blob() ...
      })
      .then(data => {
        let classes = data.map(classData => {
          return new NYUClassData(classData);
        });
        this.setState({ classes: classes });
        console.log(this.state.classes);
      })
      .catch(e => {
        // error in e.message
      });
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      )
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px"
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

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
            dataSource={data}
            renderItem={item => (
              <List.Item actions={[<Button type="primary">Subscribe</Button>]}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
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

export default ClassesList;
