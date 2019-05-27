import styled from "styled-components";

const StyledSearch = styled.input`
  font-family: "Stylish", sans-serif;
  display: flex;
  width: 40rem;
  padding: 2rem;
  background: transparent;
  border: none;
  font-size: 2.4rem;
  outline: none;

  ::placeholder {
    font-style: italic;
    color: ${props => props.theme.green2};
  }
  :focus {
    background: #e8e8e8;
  }

  @media (max-width: 1200px) {
    width: 30rem;
    font-size: 2rem;
  }
`;

const StyledResults = styled.li`
  padding: 1rem 2rem;
  min-width: 40rem;
  margin: 0;
  letter-spacing: 0.5px;
  font-size: 90%;
  .key {
    /* font-weight: 700; */
    font-family: stylish;
    text-transform: uppercase;
  }
  .value {
    border-bottom: 1px solid ${props => props.theme.grey2};
    /* font-style: italic; */
  }
`;

export { StyledSearch, StyledResults };
