import React from "react";
import { Layout, Button } from "antd";
import history from "../../history";

const { Header, Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  handleRedirect = key => {
    switch (key) {
      case 0:
        history.push("/update");
      case 1:
        history.push("/track");
    }
  };
  render() {
    return (
      <div className="home">
        <Layout className="layout">
          <Header className="header">
            <div className="title">HOME</div>
          </Header>
          <Content className="content">
            <div className="btn-wrapper">
              <Button
                onClick={() => this.handleRedirect(0)}
                className="btn"
                type="primary"
              >
                UPDATE
              </Button>
            </div>
            <div className="btn-wrapper">
              <Button className="btn" type="primary">
                SHIP
              </Button>
            </div>
            <div className="btn-wrapper">
              <Button
                onClick={() => this.handleRedirect(1)}
                className="btn"
                type="primary"
              >
                TRACK
              </Button>
            </div>
            <div className="btn-wrapper">
              <Button className="btn" type="primary">
                RECORD
              </Button>
            </div>
            <div className="btn-wrapper">
              <Button className="btn" type="primary">
                ADMIN
              </Button>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Home;
