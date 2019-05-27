import React from "react";
import Profile from "../components/Profile";

import Head from "next/head";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>CoffeeGlot | Profile</title>
      </Head>
      <Profile />
    </>
  );
};

export default ProfilePage;
