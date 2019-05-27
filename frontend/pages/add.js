import React from "react";
import CreateCourse from "../components/CreateCourse";

import Head from "next/head";

const AddPage = () => {
  return (
    <>
      <Head>
        <title>CoffeeGlot | Add a Course</title>
      </Head>
      <CreateCourse />
    </>
  );
};

export default AddPage;
