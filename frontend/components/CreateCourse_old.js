import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { languages, locations } from "../lib/data";
import { findMaxSeats } from "../lib/findInfo";

import Router from "next/router";

import { StyledForm } from "./styles/Form";
import { StyledHeader } from "./styles/Header";
import DayPicker from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { CURRENT_USER_QUERY } from "./CurrentUser";

const CREATE_COURSE_MUTATION = gql`
  mutation CREATE_COURSE_MUTATION(
    $title: String!
    $details: String!
    $price: Int!
    $language: String!
    $location: String!
    $seats: Int!
    $startDate: String!
    $endDate: String!
  ) {
    createCourse(
      title: $title
      details: $details
      price: $price
      language: $language
      location: $location
      seats: $seats
      startDate: $startDate
      endDate: $endDate
    ) {
      id
    }
  }
`;

const CREATE_TEACHER_MUTATION = gql`
  mutation CREATE_TEACHER_MUTATION(
    $name: String!
    $age: Int!
    $image: String!
    $isNative: String!
    $about: String!
    $experience: String!
    $education: String!
    $certifications: String!
  ) {
    createTeacher(
      name: $name
      age: $age
      image: $image
      isNative: $isNative
      about: $about
      experience: $experience
      education: $education
      certifications: $certifications
    ) {
      id
    }
  }
`;

export default class CreateCourse extends Component {
  state = {
    title: "",
    details: "",
    price: "",
    language: "",
    location: undefined,
    seats: "",
    name: "",
    age: "",
    image: "",
    isNative: undefined,
    about: "",
    experience: "",
    education: "",
    certifications: "",
    startDate: undefined,
    endDate: undefined
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  handleSubmit = async (e, createCourse, createTeacher) => {
    e.preventDefault();
    const resTeacher = await createTeacher();
    const resCourse = await createCourse();
    Router.push({
      pathname: "/course",
      query: { id: resCourse.data.createCourse.id }
    });
  };
  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "coffeeglot");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkj0lviac/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    this.setState({
      image: file.eager[0].secure_url
    });
  };
  handleDayClick = day => {
    this.setState({ selectedDay: day });
  };
  render() {
    const {
      title,
      details,
      price,
      about,
      experience,
      seats,
      education,
      certifications,
      isNative,
      name,
      age,
      location
    } = this.state;
    return (
      <>
        <StyledHeader>
          <h2>Go ahead and create your own course</h2>
        </StyledHeader>

        <Mutation mutation={CREATE_COURSE_MUTATION} variables={this.state}>
          {(createCourse, { loading, error }) => {
            if (error)
              return <h4>The following message appeared: {error.message}</h4>;
            if (loading) return <h4>Loading...</h4>;
            return (
              <Mutation
                mutation={CREATE_TEACHER_MUTATION}
                variables={this.state}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              >
                {(createTeacher, { loading, error }) => {
                  if (error)
                    return (
                      <h4>The following message appeared: {error.message}</h4>
                    );
                  if (loading) return <h4>Loading...</h4>;
                  return (
                    <StyledForm
                      onSubmit={e =>
                        this.handleSubmit(e, createCourse, createTeacher)
                      }
                    >
                      <Query query={CURRENT_USER_QUERY}>
                        {({ data }) => {
                          console.log(data);
                          if (data.me.teachers.length > 0) return null;
                          return (
                            <div className="left">
                              <h4>Tell us about yourself</h4>
                              <label htmlFor="name">
                                <span>Name</span>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Name"
                                  required
                                  value={name}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label htmlFor="age">
                                <span>Age</span>
                                <input
                                  type="number"
                                  id="age"
                                  name="age"
                                  placeholder="Age"
                                  required
                                  value={age}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label htmlFor="file">
                                <span>Image</span>
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  placeholder="Upload an image"
                                  required
                                  onChange={this.uploadFile}
                                />
                              </label>
                              <label htmlFor="isNative">
                                <span>Native Speaker?</span>
                                <select
                                  name="isNative"
                                  onChange={this.handleChange}
                                >
                                  <option value="">
                                    Please choose an option
                                  </option>
                                  <option key="yes" value={isNative}>
                                    Yes
                                  </option>
                                  <option key="no" value={isNative}>
                                    No
                                  </option>
                                </select>
                              </label>
                              <label htmlFor="about">
                                <span>About you</span>
                                <textarea
                                  rows="3"
                                  id="about"
                                  name="about"
                                  placeholder="Add additional information about yourself, interests, etc."
                                  required
                                  value={about}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label htmlFor="experience">
                                <span>Professional Experience</span>
                                <textarea
                                  rows="3"
                                  id="experience"
                                  name="experience"
                                  placeholder="Your Experience"
                                  required
                                  value={experience}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label htmlFor="education">
                                <span>Education</span>
                                <input
                                  type="text"
                                  id="education"
                                  name="education"
                                  placeholder="Education"
                                  required
                                  value={education}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label htmlFor="certifications">
                                <span>Certifications</span>
                                <input
                                  type="text"
                                  id="certifications"
                                  name="certifications"
                                  placeholder="Certifications"
                                  required
                                  value={certifications}
                                  onChange={this.handleChange}
                                />
                              </label>
                            </div>
                          );
                        }}
                      </Query>
                      <div className="right">
                        <h4>Tell us about the course</h4>
                        <label htmlFor="title">
                          <span>Title</span>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={this.handleChange}
                          />
                        </label>
                        <label htmlFor="details">
                          <span>Details</span>
                          <textarea
                            rows="3"
                            id="details"
                            name="details"
                            placeholder="Add additional details about the course"
                            required
                            value={details}
                            onChange={this.handleChange}
                          />
                        </label>
                        <label htmlFor="price">
                          <span>Price</span>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price in cents"
                            required
                            value={price}
                            onChange={this.handleChange}
                          />
                        </label>
                        <label htmlFor="language">
                          <span>Language</span>
                          <select name="language" onChange={this.handleChange}>
                            {languages.map(language => (
                              <option
                                key={language.language}
                                value={language.language}
                              >
                                {language.language}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label htmlFor="location">
                          <span>Location</span>
                          <select name="location" onChange={this.handleChange}>
                            {locations.map(location => (
                              <option key={location.name} value={location.name}>
                                {location.name}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label htmlFor="seats">
                          <span>Number of students</span>
                          <input
                            type="number"
                            id="seats"
                            name="seats"
                            placeholder="Maximum number of seats"
                            required
                            min="1"
                            max={findMaxSeats(location)}
                            value={seats}
                            onChange={this.handleChange}
                          />
                        </label>
                        <label htmlFor="date" id="date">
                          <span>Date</span>
                          <DayPicker
                            onDayChange={day =>
                              this.setState({ startDate: day })
                            }
                            value={this.state.startDate}
                            placeholder="From"
                          />
                          <DayPicker
                            onDayChange={day => this.setState({ endDate: day })}
                            value={this.state.endDate}
                            placeholder="To"
                          />
                        </label>
                        <button type="submit">Submit</button>
                      </div>
                    </StyledForm>
                  );
                }}
              </Mutation>
            );
          }}
        </Mutation>
      </>
    );
  }
}
