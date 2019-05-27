import React from "react";
import SingleObjectStyle from "./styles/SingleObjectStyles";
import Link from "next/link";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import Error from "./styles/Error";
import Spinner from "./styles/Spinner";

import { ALL_TEACHERS_QUERY } from "./Teachers";

const VOTE_MUTATION = gql`
  mutation VOTE_MUTATION($teacherId: ID!) {
    vote(teacherId: $teacherId) {
      teacher {
        id
        name
      }
      user {
        id
        email
      }
    }
  }
`;

import { findFlag } from "../lib/findInfo";

const Teacher = props => {
  const { teacher } = props;
  return (
    <SingleObjectStyle>
      <div className="image">
        <div className="teacher">
          <img className="country_flag" src={findFlag(teacher.isNative)} />
          <img
            src={teacher.image}
            className="avatar avatar__teacher"
            alt="teacher"
          />
        </div>
        <Mutation
          mutation={VOTE_MUTATION}
          variables={{ teacherId: teacher.id }}
          refetchQueries={[{ query: ALL_TEACHERS_QUERY }]}
        >
          {(vote, { error, loading }) => {
            if (error) return <Error error={error} />;
            if (loading) return <Spinner />;
            return (
              <>
                <div className="vote" onClick={vote}>
                  <span>vote!</span>
                  <img
                    src="../static/icons/heart.png"
                    width="70"
                    className="icon"
                  />
                </div>
              </>
            );
          }}
        </Mutation>
      </div>
      <div className="info">
        <h3 className="title">Name: {teacher.name}</h3>
        <p>
          {teacher.name} is {teacher.age} years old{" "}
          <span>
            and is a{" "}
            <span className="isNative">
              {teacher.isNative.toUpperCase()} NATIVE SPEAKER!
            </span>
          </span>
        </p>

        <p>Education: {teacher.education}</p>
        <p>Experience: {teacher.experience}</p>
        <p>Certifications: {teacher.certifications}</p>
        <p>Something more: {teacher.about}</p>

        <h4>Number of votes: {teacher.votes.length}</h4>
        <div className="courses-info">
          <h4>Checkout all of {teacher.name}'s courses:</h4>
          {teacher.createdBy.courses.map(course => (
            <li key={course.id}>
              <Link href={`/course?id=${course.id}`}>
                <a>{course.title}</a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </SingleObjectStyle>
  );
};

export default Teacher;
