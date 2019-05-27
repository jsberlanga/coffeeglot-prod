import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

import Search from "./Search";
import Nav from "./Nav";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.div`
  padding: 1rem;
  margin: 0 4.5rem;
  a,
  button,
  img {
    cursor: pointer;
    color: ${props => props.theme.offBlack};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    flex-direction: column;

    margin: 0 1rem;
    .left {
      margin-bottom: 2rem;
    }
    a,
    button {
      padding: 0 1rem;
    }
  }
  @media (max-width: 670px) {
    a,
    button {
      padding: 0 1rem;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 500px) {
    a,
    button {
      margin: 0 auto;
      padding: 1rem;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="left">
      <Link href="/">
        <img src="/static/icons/logo.png" alt="logo" width="120" />
      </Link>
      <Search />
    </div>
    <Nav />
  </StyledHeader>
);

export default Header;
