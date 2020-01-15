import React from "react";
import { Input, Button, message } from "antd";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("http://localhost:8080/v1/signup", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "viraj", pass:"admin123" })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          message.error('User with this username already exists');
        }
      })
      .then(json => {
        console.log(json);
      });
    this.props.toggleTodo();
  }
  render() {
    return (
      <div>
        <Input placeholder="Username" name="username" />
        <br />
        <br />
        <Input.Password placeholder="Password" name="pass" type="password" />
        <br />
        <br />
        <Button type="primary">Login</Button>
      </div>
    );
  }
}

export default Login;
