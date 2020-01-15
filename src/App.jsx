import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Notifications from "react-notification-system-redux";

import { Button } from "antd";
import "./App.css";

import history from "./history";
import updateContainer from "./components/Update/updateContainer";
import trackContainer from "./components/Track/trackContainer";
import homeContainer from "./components/Home/homeContainer";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Route exact path="/" component={homeContainer} />
          <Route exact path="/update" component={updateContainer} />
          <Route exact path="/track" component={trackContainer} />
          {/*<Route exact path="/client/pendingpo" component={Pendingpo} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
