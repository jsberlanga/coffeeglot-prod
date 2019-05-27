import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./CurrentUser";
import Router from "next/router";
import { StyledHeader } from "./styles/Header";
import gql from "graphql-tag";
import Error from "./styles/Error";
import Spinner from "./styles/Spinner";
import ProfileStyles from "./styles/ProfileStyles";

const DELETE_COURSE_MUTATION = gql`
  mutation DELETE_COURSE_MUTATION($id: ID!) {
    deleteCourse(id: $id) {
      id
    }
  }
`;

class Profile extends Component {
  render() {
    return (
      <>
        <Query query={CURRENT_USER_QUERY} fetchPolicy="cache-and-network">
          {({ data }) => {
            console.log(data);
            const courses = data.me ? data.me.courses : null;
            const coursesEnrolled = data.me ? data.me.coursesEnrolled : null;
            return (
              <>
                <StyledHeader>
                  <h2>Check out your profile</h2>
                </StyledHeader>

                {!courses.length && (
                  <div style={{ textAlign: "center" }}>
                    <h2>Your Profile is currently empty.</h2>
                    <h4>
                      You first need to either create a course or enroll into a
                      course.
                    </h4>
                  </div>
                )}
                <ProfileStyles>
                  <div className="teaching">
                    {courses && courses.length !== 0 && (
                      <h3>
                        You are teaching {courses.length} course
                        {courses.length > 1 && "s"}:
                      </h3>
                    )}

                    {courses.map(course => (
                      <div className="course_card" key={course.id}>
                        <h4>Course: {course.title}</h4>
                        {course.usersEnrolled.length !== 0 && (
                          <>
                            <p>
                              There{" "}
                              {course.usersEnrolled.length === 1 ? "is" : "are"}{" "}
                              {course.usersEnrolled.length} people registered
                            </p>
                            <div className="howto_email">
                              Feel free to contact them with all the information
                              they need to know before engaging into your
                              course.{" "}
                              <span className="howto_click_email">
                                Simply click below!
                              </span>{" "}
                              <div className="send_email">
                                <a
                                  href={`mailto:${course.usersEnrolled.map(
                                    user => user.user.email
                                  )}`}
                                >
                                  <img
                                    src="https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_mail-512.png"
                                    width="100"
                                  />
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="buttonList">
                          <button
                            className="view_course"
                            onClick={() =>
                              Router.push({
                                pathname: "/course",
                                query: { id: course.id }
                              })
                            }
                          >
                            VIEW COURSE
                          </button>

                          <Mutation
                            mutation={DELETE_COURSE_MUTATION}
                            variables={{ id: course.id }}
                            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                          >
                            {(deleteCourse, { error, loading }) => {
                              if (error) return <Error error={error} />;
                              if (loading) return <Spinner />;
                              return (
                                <div key={course.id}>
                                  <button
                                    className="delete_course"
                                    onClick={() => {
                                      if (
                                        confirm(
                                          "Are you sure you want to delete this course?"
                                        )
                                      ) {
                                        deleteCourse();
                                      }
                                      return null;
                                    }}
                                  >
                                    DELETE COURSE
                                  </button>
                                </div>
                              );
                            }}
                          </Mutation>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="enrolled">
                    {coursesEnrolled && coursesEnrolled.length !== 0 && (
                      <h3>
                        You are enrolled in {coursesEnrolled.length} course
                        {coursesEnrolled.length > 1 && "s"}:
                      </h3>
                    )}
                    {coursesEnrolled.map(courseEnrolled => (
                      <div
                        className="course_card"
                        key={courseEnrolled.course.id}
                      >
                        <h4>Course: {courseEnrolled.course.title}</h4>
                        <div className="buttonList">
                          <button
                            className="view_course"
                            onClick={() =>
                              Router.push({
                                pathname: "/course",
                                query: { id: courseEnrolled.course.id }
                              })
                            }
                          >
                            VIEW COURSE
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ProfileStyles>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Profile;
