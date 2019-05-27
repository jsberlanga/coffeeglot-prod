import React, { Component } from "react";
import { StyledHeader } from "./styles/Header";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Router from "next/router";

import SignupForm from "./styles/SignupForm";
import Error from "./styles/Error";
import Spinner from "./styles/Spinner";
import { CURRENT_USER_QUERY } from "./CurrentUser";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default class Signup extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async (e, signup) => {
    e.preventDefault();
    const res = await signup();
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
          <h3>sign up for an account</h3>
        </StyledHeader>
        <Mutation
          mutation={SIGNUP_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signup, { error, loading }) => {
            return (
              <form
                className="form"
                method="post"
                onSubmit={e => this.handleSubmit(e, signup)}
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
                  Signup
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
