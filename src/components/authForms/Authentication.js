import React, { Fragment, Component } from "react";
import RegistrationForm from "../Nav/RegistrationForm";
import { api } from "../../api/init";
import LoginForm from "./LoginForm";

export default class Registration extends Component {
  handleSubmit = async event => {
    event.preventDefault();
    const userRoute =
      this.props.type === "register" ? "/users/register" : "/users/login";
    try {
      const response = await api.post(userRoute, {
        email: event.target.email.value,
        password: event.target.password.value
      });
      console.log(response.data);
    } catch (error) {
      console.error("There was a problem authenticating user", error);
    }
  };

  render() {
    return (
      <Fragment>
        {this.props.type === "register" && (
          <RegistrationForm onSubmit={this.handleSubmit} />
        )}
        {this.props.type === "login" && (
          <LoginForm onSubmit={this.handleSubmit} />
        )}
      </Fragment>
    );
  }
}
