import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import { StyledHeader } from "./styles/Header";

import { locations } from "../lib/data";

const filteredLocations = locations.splice(1);

export default class Example extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Find a place of your liking</h2>
        </StyledHeader>
        <Carousel arrows>
          {filteredLocations.map((location, index) => {
            return (
              <div key={location.id}>
                <h2 style={{ margin: "0rem" }}>{location.name}</h2>
                {location.seats && (
                  <h5 style={{ fontFamily: "linlibertine-italic" }}>
                    Please keep in mind that you can only book for a maximum of{" "}
                    <span
                      style={{
                        color: "#e4c666",
                        borderBottom: "4px solid #e4c666",
                        fontSize: "120%"
                      }}
                    >
                      {location.seats} people{" "}
                    </span>
                  </h5>
                )}
                {location.address && (
                  <div
                    style={{
                      fontFamily: "linlibertine-italic",
                      fontSize: "112%"
                    }}
                  >
                    Find our place on:{" "}
                    <a
                      style={{
                        color: "#a9c6de",
                        letterSpacing: "-1px",
                        fontStyle: "italic"
                      }}
                      href={`http://maps.google.com/?q=${location.address}`}
                    >
                      {location.address}
                    </a>
                  </div>
                )}
                <img
                  src={location.pictures}
                  width="1024px"
                  height="576px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}
