// pages/index.tsx

import type { NextPage } from 'next';
import NavBar from "@/components/navbar/NavBar";
import Background from "@/components/background/Background";
import React from "react";
import styles from "./home.module.css"
const Home: NextPage = () => {


  return (
      <main>
          <NavBar></NavBar>
          <Background></Background>
          <div className={styles.textContainer}>
              <p>Hi I&apos;m Kevin, a fourth year computer science student at the University of Toronto.</p>
          </div>
      </main>
  );
};

export default Home;
