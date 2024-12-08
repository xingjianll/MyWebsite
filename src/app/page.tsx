// pages/index.tsx

import type { NextPage } from 'next';
import NavBar from "@/components/navbar/NavBar";
import Background from "@/components/background/Background";
import React from "react";

const Home: NextPage = () => {


  return (
      <main>
          <NavBar></NavBar>
          <Background></Background>
          <p>Hi I&apos;m Kevin, a fourth year computer science student at the University of Toronto.</p>
      </main>
  );
};

export default Home;
