import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { CURRENT_USER_QUERY } from "./CurrentUser";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

class Signout extends React.Component {
  render() {
    return (
      <Mutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {signout => (
          <a
            onClick={() => {
              signout();
              Router.push({
                pathname: "/signup"
              });
            }}
          >
            Log Out
          </a>
        )}
      </Mutation>
    );
  }
}

export default Signout;
