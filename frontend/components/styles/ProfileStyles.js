import styled from "styled-components";

const ProfileStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  position: relative;
  max-width: 110rem;
  margin: 0 auto;
  text-align: center;

  .course_card {
    margin: 2rem 0;
    padding 2rem;
    min-height: 20rem;
    display: grid;
    align-content: space-between;
    border: 2px solid ${props => props.theme.grey2};
    box-shadow: 6px 6px 0px -3px ${props => props.theme.grey2};
    .buttonList {
      display: flex;
      margin: 0 auto;
    }
    button {
      transition: all 0.2s;
      border: none;
      width: 20rem;
      margin: 2rem auto 0;
      padding: 2rem;
      cursor: pointer;
      color: #fff;
      font-family: linlibertine-bold;
      font-size: 2rem;
      outline: none;
    }
    .view_course {
      
      background: ${props => props.theme.blue};
      :hover {
        background: ${props => props.theme.blue2};
      }
    }

    .delete_course {
      background: ${props => props.theme.grey};
      :hover {
        background: crimson;
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  .howto_email {
    margin: 0 2rem;
    font-family: linlibertine-italic
  }
  .howto_click_email {
    color: ${props => props.theme.yellow};
    border-bottom: 2px solid ${props => props.theme.yellow};
  }
  .send_email {
    img {
      transition: all 0.3s;
      :hover {
        transform: scale(1.3);
        filter: invert(40%) drop-shadow(6px 6px 2px darkgrey)
      }
    }
  }
  ul, li {
    margin: 0;
    font-family: linlibertine-italicbold;
    color: ${props => props.theme.grey}
  }
`;

export default ProfileStyles;
