// pages/index.tsx

import type { NextPage } from 'next';
import NavBar from "@/components/navbar/NavBar";

import HomePage from "@/components/home/HomePage";
import ParticlesComponent from "@/components/Particles";
import AnimatedBackground from "@/components/background/Background";

const Home: NextPage = () => {
  return (
      <div>
          <ParticlesComponent id={'hi'}></ParticlesComponent>
          <AnimatedBackground />

          <NavBar />
          <main>
              <HomePage></HomePage>
          </main>
      </div>
  );
};

export default Home;
