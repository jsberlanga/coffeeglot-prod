import React, { Component } from "react";
import { StyledHeader } from "./styles/Header";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Router from "next/router";

import SignupForm from "./styles/SignupForm";
import Error from "./styles/Error";
import Spinner from "./styles/Spinner";
import { CURRENT_USER_QUERY } from "./CurrentUser";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async (e, signin) => {
    e.preventDefault();
    const res = await signin();
    console.log(res);
    this.setState({ email: "", password: "" });
    Router.push({
      pathname: "/courses"
    });
  };
  render() {
    const { email, password } = this.state;

    return (
      <SignupForm>
        <StyledHeader>
          <h3>do you already have an one?</h3>
        </StyledHeader>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => {
            return (
              <form
                className="form"
                method="post"
                onSubmit={e => this.handleSubmit(e, signin)}
              >
                <div className="form-item">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                    aria-label="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    aria-label="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <button className="form-button" type="submit">
                  Signin
                </button>
                {error && <Error error={error} />}
                {loading && <Spinner />}
              </form>
            );
          }}
        </Mutation>
      </SignupForm>
    );
  }
}
