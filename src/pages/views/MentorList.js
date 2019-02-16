import React, { Component } from "react";
import { Avatar, List, Skeleton, Modal, Button } from "antd";
import NYUClassData from "../../helperMethods/NYUClassData";

const headers = new Headers();
headers.append("Authorization", "Bearer ca893b71-2357-3da0-90d3-a6d0f74fd0f7");

const init = {
  method: "GET",
  cors: "no-cors",
  headers
};

const data = [
  {
    title: "Mentor 1",
    description: "Math"
  }
];

class MentorList extends Component {
  state = { visibleModal: false, classes: [] };

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
        console.log(this.state.classes);
      })
      .catch(e => {
        // error in e.message
      });
  }

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };

  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <Button type="primary" onClick={this.showModal}>
                  Email
                </Button>
              ]}
            >
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
        <Modal
          title="Contact Mentor"
          visible={this.state.visibleModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default MentorList;
