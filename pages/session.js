import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

export default class Index extends React.Component {
  state = {
    user: "",
    rememberMe: false,
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };

  render() {
    return (
      <Box>
        <Container width="auto" maxWidth="auto">
          <Box>
            <Card>
              <form onSubmit={this.handleFormSubmit}>
                <label>
                  Name :{" "}
                  <input
                    name="user"
                    value={this.state.user}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <input
                    name="rememberMe"
                    checked={this.state.rememberMe}
                    onChange={this.handleChange}
                    type="checkbox"
                  />{" "}
                  Remember me
                </label>
                <Button type="submit">저장</Button>
              </form>
            </Card>
          </Box>
        </Container>
      </Box>
    );
  }
}
