import styled from "styled-components";

export const StyledHeader = styled.div`
  font-family: rothena;
  text-align: center;
  padding: 0.2rem 0 2.4rem;
  margin: 2rem auto 4rem;
  max-width: 130rem;
  letter-spacing: 1px;
  background: ${props => props.theme.blue};
  background-image: url("https://www.transparenttextures.com/patterns/arches.png");
  color: ${props => props.theme.offWhite};
  box-shadow: 2px 2px 5px -2px ${props => props.theme.grey2};
  h2,
  h3,
  h4 {
    line-height: 1.8;
    font-weight: 300;
    font-family: rothena;
  }

  @media (max-width: 1130px) {
    font-size: 90%;
  }

  @media (max-width: 768px) {
    font-size: 80%;
  }
`;
