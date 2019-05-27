import React from "react";
import Courses from "../components/Courses";
import Head from "next/head";
const CoursesPage = props => {
  return (
    <>
      {" "}
      <Head>
        <title>CoffeeGlot | Courses</title>
      </Head>
      <Courses />
    </>
  );
};

export default CoursesPage;
