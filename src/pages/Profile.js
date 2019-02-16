import React, { Component } from "react";
import { Avatar, Upload, message, Button, Icon, Card, Row, Col } from "antd";

const props = {
  name: "file",
  action: "//jsonplaceholder.typicode.com/posts/",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const center_style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 15
};

class Profile extends Component {
  render() {
    return (
      <div>
        <div style={center_style}>
          <Avatar
            size={150}
            icon="user"
            src="https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/0-fs5ztag0_600x400.jpg"
          />
        </div>
        <div style={center_style}>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Change Profile Picture
            </Button>
          </Upload>
        </div>
        <div style={center_style}>
          <span style={{ fontSize: 50 }}>Geoffrey Giraffe</span>
        </div>
        <div style={center_style}>
          <Row style={{ flex: 0.65 }}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card title="Courses taken" style={{ margin: 5 }}>
                <p>CSCI 335</p>
                <p>CSCI 355</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card title="Skills" style={{ margin: 5 }}>
                <p>Bankruptcy</p>
                <p>Coming back from the dead</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
