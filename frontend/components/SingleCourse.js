import React, { Component } from "react";
import Link from "next/link";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

import {
  findLocationPicture,
  findLocationAddress,
  findEnrollMessage
} from "../lib/findInfo";
import { findDate, compareDates } from "../lib/findDate";

import { StyledHeader } from "./styles/Header";
import SingleObjectStyle from "./styles/SingleObjectStyles";

import { ENROLL_COURSE_MUTATION } from "./Course";
import Error from "./styles/Error";
import Spinner from "./styles/Spinner";

import Head from "next/head";

const SINGLE_COURSE_QUERY = gql`
  query SINGLE_COURSE_QUERY($id: ID!) {
    getCourse(id: $id) {
      id
      title
      details
      price
      language
      location
      seats
      startDate
      endDate
      createdBy {
        id
      }
      usersEnrolled {
        id
      }
    }
  }
`;

const SingleCourse = props => {
  console.log(props);
  return (
    <Query query={SINGLE_COURSE_QUERY} variables={{ id: props.id }}>
      {({ data: { getCourse: course } }, loading, error) => {
        console.log(course);
        return (
          <>
            <Head>
              <title>CoffeeGlot | Course: {course.title}</title>
            </Head>
            <StyledHeader>
              <h2>{course.title}</h2>
            </StyledHeader>
            <SingleObjectStyle>
              <div className="image">
                <img
                  src={findLocationPicture(course.location)}
                  className="avatar avatar__location"
                  alt="location"
                />
              </div>
              <div className="info">
                <h3 className="title">{course.language} Language Course </h3>
                <h5>
                  Duration of this course:{" "}
                  {compareDates(course.startDate, course.endDate)}. For only{" "}
                  <span className="price">{course.price} zlotys</span>
                </h5>
                <p>
                  Where: {course.location} in{" "}
                  {findLocationAddress(course.location)}
                </p>
                <p>Some more: {course.details}</p>
                <p>Total number of seats: {course.seats}</p>
                {course.seats - course.usersEnrolled.length !== 0 && (
                  <h4>
                    Remaining seats:{" "}
                    {course.seats - course.usersEnrolled.length}
                  </h4>
                )}

                {findDate(course.startDate)}

                <Mutation
                  mutation={ENROLL_COURSE_MUTATION}
                  variables={{ courseId: course.id }}
                >
                  {(enroll, { error, loading }) => {
                    if (error)
                      return (
                        <Error
                          styles={{ position: "absolute" }}
                          error={error}
                        />
                      );
                    if (loading) return <Spinner />;
                    return (
                      <button
                        disabled={
                          course.usersEnrolled.length >= course.seats ||
                          course.startDate < new Date().toISOString() ||
                          course.endDate < new Date().toISOString()
                        }
                        className="register"
                        onClick={() => {
                          enroll();
                        }}
                      >
                        {findEnrollMessage(course)}
                      </button>
                    );
                  }}
                </Mutation>
              </div>
            </SingleObjectStyle>
          </>
        );
      }}
    </Query>
  );
};

export default SingleCourse;
