import React from "react";
import Teachers from "../components/Teachers";
import Head from "next/head";

const TeachersPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>CoffeeGlot | Teachers</title>
      </Head>
      <Teachers />
    </>
  );
};

export default TeachersPage;
