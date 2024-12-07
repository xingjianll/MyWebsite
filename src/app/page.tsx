// pages/index.tsx

import type { NextPage } from 'next';
import HomePage from "@/components/home/HomePage";
import MusicPlayer from "@/components/music/MusicPlayer";

const Home: NextPage = () => {
  return (
      <main>
          <HomePage></HomePage>
          <MusicPlayer/>
      </main>
  );
};

export default Home;
