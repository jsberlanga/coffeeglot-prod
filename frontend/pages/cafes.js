import React from "react";
import Cafes from "../components/Cafes";
import Head from "next/head";

const CafesPage = () => {
  return (
    <>
      <Head>
        <title>CoffeeGlot | Our Cafes</title>
      </Head>
      <Cafes />
    </>
  );
};

export default CafesPage;
