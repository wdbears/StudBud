import React, { Component } from "react";
import { Avatar, List, Skeleton, Modal, Button } from "antd";

const data = [
  {
    title: "Mentor 1",
    description: "Math"
  },
  {
    title: "Mentor 2",
    description: "Science"
  },
  {
    title: "Mentor 3",
    description: "English"
  },
  {
    title: "Mentor 4",
    description: "Computer Science"
  }
];

class MentorList extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
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
          visible={this.state.visible}
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
