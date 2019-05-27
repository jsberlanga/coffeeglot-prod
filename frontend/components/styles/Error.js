import React from "react";
import styled from "styled-components";

const ErrorStyles = styled.div`
  text-align: center;
  background: ${props => props.theme.yellow};
  font-size: 2rem;
  padding: 0.4rem;
  max-width: 40rem;
  margin: 2rem auto;
`;

const DisplayErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.message ===
    "GraphQL error: A unique constraint would be violated on User. Details: Field name = email"
  )
    return (
      <ErrorStyles>
        This email is already in use. Please sign in or use a different one.
      </ErrorStyles>
    );
  if (error.message.includes("GraphQL error"))
    return (
      <ErrorStyles>{error.message.replace("GraphQL error: ", "")}</ErrorStyles>
    );
  return <ErrorStyles>{error}</ErrorStyles>;
};

export default DisplayErrorMessage;
