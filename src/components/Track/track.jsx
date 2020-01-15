import React from "react";
import { Layout, Button, Input } from "antd";

const { Header, Content } = Layout;

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemID: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    return (
      <div className="home">
        <Layout className="layout">
          <Header className="header">
            <div className="title">TRACK</div>
          </Header>
          <Content className="content">
            <div className="update-wrapper">
              <Input
                placeholder="Enter Item ID"
                name="itemID"
                value={this.state.itemID}
                onChange={this.handleChange}
              />
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

export default Track;
