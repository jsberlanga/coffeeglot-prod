import Link from "../Link";
import Router from "next/router";
import CurrentUser from "../CurrentUser";
import Signout from "../Signout";

import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Stylish", sans-serif;
  font-size: 1.9rem;
  a,
  button,
  input {
    padding: 0rem 2rem;
    transition: all 0.14s ease;
    :hover {
      border-bottom: 4px solid ${props => props.theme.grey2};
      color: ${props => props.theme.grey2};
      transform: translateY(-6px);
      font-weight: bold;
    }
  }

  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: capitalize;
    border: 0;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .active {
    border-bottom: 4px solid ${props => props.theme.green};
    color: ${props => props.theme.green};
    transform: translateY(-6px);
    font-weight: bold;
  }
`;

const Header = props => {
  return (
    <CurrentUser>
      {({ data }) => {
        const me = data ? data.me : null;
        return (
          <StyledNav>
            <Link activeClassName="active" href="/courses">
              <a>Courses</a>
            </Link>
            <Link activeClassName="active" href="/teachers">
              <a>Teachers</a>
            </Link>
            <Link activeClassName="active" href="/cafes">
              <a>Our Cafes</a>
            </Link>
            {me && (
              <>
                <Link activeClassName="active" href="/add">
                  <a>Add Course</a>
                </Link>
                <Link activeClassName="active" href="/profile">
                  <a>Profile</a>
                </Link>
                <Signout />
              </>
            )}
            {!me && (
              <Link activeClassName="active" href="/signup">
                <a>Sign in</a>
              </Link>
            )}
          </StyledNav>
        );
      }}
    </CurrentUser>
  );
};

export default Header;
