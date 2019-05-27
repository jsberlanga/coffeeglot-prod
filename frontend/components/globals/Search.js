import React from "react";
import styled from "styled-components";
import Router from "next/router";
import Downshift, { resetIdCounter } from "downshift";

import { ApolloConsumer, Query } from "react-apollo";
import debounce from "lodash.debounce";

import gql from "graphql-tag";

import { StyledSearch, StyledResults } from "../styles/SearchStyles";

const SEARCH_COURSES_QUERY = gql`
  query SEARCH_COURSES_QUERY($filter: String!) {
    courses(filter: $filter) {
      id
      title
      price
      language
      location
      startDate
    }
  }
`;

const routeToCourse = course => {
  Router.push({
    pathname: "/course",
    query: { id: course.id }
  });
};

class Search extends React.Component {
  state = {
    courses: [],
    loading: false
  };
  onChange = debounce(async (e, client) => {
    this.setState({ loading: true });
    const res = await client.query({
      query: SEARCH_COURSES_QUERY,
      variables: { filter: e.target.value.trim() }
    });

    this.setState(() => {
      return {
        courses: res.data.courses,
        loading: false
      };
    });
  }, 1000);

  nothingWasFound = debounce(inputValue => {
    return (
      <div
        style={{
          background: "#e4c666",
          fontSize: "2rem",
          padding: "0.4rem",
          marginTop: "0.3rem"
        }}
      >
        Nothing was found for the search {inputValue}
      </div>
    );
  }, 1000);
  render() {
    resetIdCounter();
    return (
      <Downshift onChange={routeToCourse} itemToString={item => item && ""}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <ApolloConsumer>
              {client => (
                <div>
                  <StyledSearch
                    {...getInputProps({
                      type: "search",
                      placeholder: "Search for a language course",
                      id: "search",
                      className: this.state.loading ? "loading" : "",
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      }
                    })}
                  />
                </div>
              )}
            </ApolloConsumer>
            {isOpen && (
              <div
                style={{ position: "absolute", zIndex: 999, cursor: "pointer" }}
              >
                {!this.state.loading &&
                  this.state.courses.map((course, index) => (
                    <StyledResults
                      {...getItemProps({
                        key: course.id,
                        index,
                        item: course,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "#247e6c" : "#e8e8e8",
                          color:
                            highlightedIndex === index ? "#f5f5f5" : "#748290",
                          fontWeight:
                            selectedItem === course ? "bold" : "normal"
                        }
                      })}
                    >
                      <span className="key">Language: </span>
                      <span className="value">{course.language}</span> -
                      <span className="key"> Title: </span>
                      <span className="value">{course.title}</span>
                    </StyledResults>
                  ))}
                {!this.state.loading &&
                  !this.state.courses.length &&
                  this.nothingWasFound(inputValue)}
              </div>
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Search;
