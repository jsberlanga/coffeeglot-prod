import styled from "styled-components";
import Particles from "react-particles-js";

import Link from "next/link";

const StyledHomeHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%),
    url("../../static/images/cafes/main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 95vh;
  opacity: 0.7;
  position: relative;
  color: ${props => props.theme.grey};
  filter: blur(0.4px) grayscale(50%);
  margin-top: 2rem;
  border-top-right-radius: 20rem;
  border-bottom-left-radius: 20rem;
  box-shadow: 0 0 2px 0px ${props => props.theme.grey2};
  h1 {
    text-align: right;
    font-size: 6rem;
    padding: 44rem 5rem 0;
    font-family: rothena;
    font-style: italic;
    letter-spacing: 7px;
    color: ${props => props.theme.lightGrey};
    filter: blur(1.4px);
  }
  .particles {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "steps";
  margin: 2rem 1rem 0;
  grid-gap: 3rem;
  .title {
    grid-area: title;
    text-align: center;
  }
  .steps {
    grid-area: steps;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  p {
    margin: 2rem 0 0;
  }
  a {
    border-bottom: 3px solid ${props => props.theme.yellow};
    letter-spacing: -0.5px;
    font-size: 2.3rem;
    margin-bottom: 5rem;
    font-family: linlibertine-italic;
    transition: all 0.2s;
    :hover {
      color: ${props => props.theme.blue};
      border-bottom: 3px solid ${props => props.theme.blue};
    }
  }
`;

const Home = props => {
  return (
    <>
      <StyledHomeHero>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: false
                }
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "bottom",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
        <h1>feeding mind, body and spirit</h1>
      </StyledHomeHero>
      <Grid>
        <div className="title">
          <h2>Start to learn or teach a language in three easy steps:</h2>
        </div>
        <div className="steps">
          <div>
            <h3>1. Choose one of our Cafes</h3>
            <h5>and get ready to drink our best fresh coffee</h5>
            <p>
              We give you the opportunity to use one of our Cafes to teach your
              own course if you are a language instructor or to learn a language
              if you come here as a student.
            </p>
            <p>
              We guarantee a quiet spot for teachers and students and the best
              coffee money can buy.
            </p>
            <p>
              Go ahead and check out where we are based and join any course you
              like.
            </p>
            <Link href="/cafes">
              <a>Visit our cafes</a>
            </Link>
          </div>
          <div>
            <h3>2. Create your own course</h3>
            <h5> or enroll into another amazing course </h5>
            <p>
              If you come here as a teacher, go ahead and start creating your
              own amazing courses by simply filling out a form. Hundreds of
              students will join you and your amazing accent.
            </p>
            <Link href="/add">
              <a>Create a course</a>
            </Link>
            <p>
              If you come here as a student, that's fantastic! Check the courses
              created and join us in our Cafes. We promise a great coffee and an
              amazing learning experience.
            </p>
            <Link href="/courses">
              <a>Enroll into a course</a>
            </Link>
          </div>
          <div>
            <h3>3. Check your profile</h3>
            <h5>and view and rate all the other teachers profiles</h5>
            <p>
              If you think something is not clear enough, you can contact your
              students from your profile to send them further instructions.
            </p>
            <Link href="/profile">
              <a>Visit your profile</a>
            </Link>
            <p>
              ...and don't forget to rate our teachers. They would love to have
              your feedback!
            </p>
            <Link href="/teachers">
              <a>Rate a teacher</a>
            </Link>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Home;
