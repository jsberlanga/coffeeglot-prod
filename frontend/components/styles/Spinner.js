import React from "react";
import styled from "styled-components";

const Spinner = () => (
  <SpinnerContainer>
    <StyledSpinner viewBox="0 0 60 60">
      <circle
        className="path"
        cx="30"
        cy="30"
        r="25"
        fill="none"
        strokeWidth="3"
      />
    </StyledSpinner>
  </SpinnerContainer>
);

const SpinnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: 0 auto;
  width: 70px;
  height: 70px;

  & .path {
    stroke: ${props => props.theme.yellow};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
