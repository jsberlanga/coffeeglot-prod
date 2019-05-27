import styled from "styled-components";

export const StyledForm = styled.form`
  * {
    font-family: linlibertine-bold;
    letter-spacing: 1px;
  }
  .left {
    background: ${props => props.theme.green};

    padding: 3rem;
    span,
    h4 {
      color: ${props => props.theme.offWhite};
    }
  }
  .right {
    background: ${props => props.theme.green2};
    padding: 3rem;
    span,
    h4 {
      color: ${props => props.theme.grey};
    }
  }

  margin: 0 auto;
  box-shadow: 10px 10px 0px 0px ${props => props.theme.grey2};
  font-size: 2rem;
  max-width: 130rem;
  background: ${props => props.theme.green2};

  display: grid;
  grid-template-columns: repeat(2, auto);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  input,
  textarea,
  select,
  option {
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem;
    border: none;
    background: ${props => props.theme.offWhite};
    color: ${props => props.theme.grey2};
    border-radius: 0.4rem;
    margin-top: 0.4rem;
    resize: none;
    &:focus {
      filter: brightness(92%);
      outline: none;
    }
    ::placeholder {
      color: ${props => props.theme.grey2};
    }
  }

  button {
    width: 50%;
    border: 0;
    font-size: 2.8rem;
    border-radius: 0.4rem;
    margin: 2rem auto;
    padding: 2.4rem;
    float: right;
    font-family: linlibertine-italicbold;
    background: ${props => props.theme.grey2};
    color: #fff;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.grey};
    }
  }
  h2,
  h3,
  h4,
  h5 {
    font-family: linlibertine-italicbold;
  }
  #date {
    display: flex;
    flex-direction: row;
    span {
      color: ${props => props.theme.offWhite};
    }

    * {
      margin: 0 1rem;
    }
  }
`;
