import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./globals/Meta";
import Header from "./globals/Header";
import Footer from "./globals/Footer";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'rothena';
    src: url('/static/Rothena.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'linlibertine';
    src: url('/static/LinLibertine_R.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'linlibertine-italic';
    src: url('/static/LinLibertine_RI.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'linlibertine-bold';
    src: url('/static/LinLibertine_RB.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'linlibertine-italicbold';
    src: url('/static/LinLibertine_RBi.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.7;
    font-size: 18px;
    background: #f5f5f5;
    font-family: linlibertine;
  }

  p {margin-bottom: 0.8em;}

  h1, h2 {
    margin: 2.75rem 0 1rem;
    font-weight: 400;
    line-height: 1.15;
  }
  h3, h4, h5 {
    margin: 1.5rem 0 0.5rem;
    font-weight: 400;
    line-height: 1.15;
  }

  h1,h2, h3, h4, h5 {
    font-family: linlibertine-italicbold;
  }

  h1 {
    margin-top: 0;
    font-size: 3.05em;
  }

  h2 {font-size: 2.45em;}

  h3 {font-size: 1.85em;}

  h4 {font-size: 1.4em;}

  h5 {font-size: 1.15em;}

  small, .text_small {font-size: 0.8em;}
  a, li {text-decoration: none; color: inherit};
  li {list-style: none; margin-left: 1rem};
  a, button {letter-spacing: 2px};
`;

const theme = {
  green: "#247e6c",
  green2: "#57B19F",
  green3: "#71CBB9",
  blue: "#a9c6de",
  blue2: "#C3E0F8",
  yellow: "#e4c666",
  grey: "#414F5D",
  grey2: "#748290",
  lightGrey: "#dee1ec",
  lightGrey2: "#EBEEF9",
  offBlack: "#364f6b",
  offWhite: "#f5f5f5",
  bs: "4px 6px 6px -2px rgba(65, 79, 93, 0.1)",
  transform: "skew(-4deg) rotate(-1deg)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.offBlack};
  position: relative;
  min-height: 100vh;
  filter: brightness(105%);
`;

const Inner = styled.div`
  max-width: 90vw;
  margin: 0rem auto;
  padding-bottom: 12rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
