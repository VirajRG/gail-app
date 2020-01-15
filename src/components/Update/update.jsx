import React from "react";
import { Layout, Button, Input } from "antd";
import QrReader from "react-qr-reader";

const { Header, Content, Footer } = Layout;

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <div className="home">
        <Layout className="layout">
          <Header className="header">
            <div className="title">UPDATE</div>
          </Header>
          <Content className="content">
            <div className="update-wrapper">
              <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: "100%" }}
              />
              <Input placeholder="Address" value={this.state.result} />
              <Button onClick={() => this.handleRedirect(0)} type="primary">
                SUBMIT
              </Button>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Update;
