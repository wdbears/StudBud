import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Icon,
  Upload,
  message
} from "antd";

const Dragger = Upload.Dragger;

const props = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class ResourceDrawer extends React.Component {
  state = { visible: false, titleInput: "" };

  handleSubmit = e => {
    e.preventDefault();
    console.log("HELLO");
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ float: "right" }}>
        <Button onClick={this.showDrawer}>
          <Icon type="upload" />
          Upload a resource
        </Button>
        <Drawer
          title="Contact"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: "auto",
            height: "calc(100% - 108px)",
            paddingBottom: "108px"
          }}
        >
          <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={16}>
                <Form.Item label="Title">
                  {getFieldDecorator("title", {
                    rules: [{ required: true, message: "Please enter a title" }]
                  })(
                    <Input
                      name="titleInput"
                      onChange={this.handleChange}
                      placeholder="Please enter a title"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator("description", {
                    rules: [
                      {
                        required: true,
                        message: "Please input a description"
                      }
                    ]
                  })(
                    <Input.TextArea
                      name="descInput"
                      onChange={this.handleChange}
                      rows={2}
                      placeholder="Description of resource"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={16}>
                <Form.Item label="Url for resource">
                  {getFieldDecorator("url", {
                    rules: [{ required: true, message: "Please enter a url" }]
                  })(
                    <Input
                      name="urlInput"
                      onChange={this.handleChange}
                      placeholder="Please enter a url"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col>
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button htmlType="submit" onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const App = Form.create()(ResourceDrawer);

export default App;
