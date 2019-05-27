import styled from "styled-components";

const SignupForm = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  box-shadow: 1px 1px 15px -5px ${props => props.theme.blue};

  .form {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .form-input,
  .form-button {
    font-family: linlibertine-bold;
    font-size: 1.6rem;
    letter-spacing: 1px;
    border: 0;
  }
  .form-input {
    padding: 1.7rem;
    outline: none;
    width: 100%;
    opacity: 0.7;
    border-bottom: 1px solid silver;
    ::placeholder {
      opacity: 0.5;
    }
    :focus {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
    :focus::placeholder {
      color: ${props => props.theme.blue};
      opacity: 0.85;
    }
  }

  .form-button {
    cursor: pointer;
    margin-left: auto;
    background: ${props => props.theme.blue};
    color: #fff;
    padding: 1.4rem 3.5rem;
    font-size: 2.2rem;
    font-family: linlibertine-italicbold;
    clip-path: polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 50%, 0% 0%);
    border-bottom: 5px solid ${props => props.theme.blue2};
    width: 60%;
    margin: 2rem 0;
    text-align: right;
    outline: none;
    transition: all 0.2s;
    :hover {
      background: ${props => props.theme.blue2};
      width: 70%;
    }
  }
`;

export default SignupForm;
