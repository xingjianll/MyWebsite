// pages/index.tsx

import type { NextPage } from 'next';
import Background from "@/components/background/background";
import NavBar from "@/components/navbar/NavBar";
import styles from './home.module.css';
import React from "react";

const Home: NextPage = () => {


  return (
      <main>
          <NavBar></NavBar>
          <Background></Background>
          <p>Hi I'm Kevin, a fourth year computer science student at the University of Toronto.</p>
      </main>
  );
};

export default Home;
