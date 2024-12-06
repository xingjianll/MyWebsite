// pages/index.tsx

import type { NextPage } from 'next';
import NavBar from "@/components/navbar/NavBar";

import HomePage from "@/components/home/HomePage";
import MusicPlayer from "@/components/music/MusicPlayer";

const Home: NextPage = () => {
  return (
      <div>
          <main>
              <HomePage></HomePage>
              <MusicPlayer />
          </main>
      </div>
  );
};

export default Home;
