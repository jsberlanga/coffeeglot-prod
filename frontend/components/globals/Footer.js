import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background: ${props => props.theme.green};
  color: ${props => props.theme.offWhite};
  letter-spacing: 1px;
  .title {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 2rem;
    font-size: 1.5rem;
    font-family: linlibertine-italic;
    a {
      border-bottom: 1px solid;
      transition: all 0.2s;
      :hover {
        font-weight: 700;
        font-size: 1.65rem;
      }
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="title">
      © {new Date().getFullYear()},{" "}
      <a href="https://juliosoto.dev" target="_blank" rel="noopener noreferrer">
        juliosoto.dev
      </a>
      . All rights reserved.
    </div>
  </StyledFooter>
);

export default Footer;
