// pages/index.tsx

import type { NextPage } from 'next';
import NavBar from "@/components/navbar/NavBar";
import ParticlesComponent from "@/components/Background";

const Home: NextPage = () => {
  return (
      <div>
            <NavBar />
            <main>
                <h1>Welcome to My Website</h1>
                <p>This is the front page of my personal website.</p>
                <h1>Welcome to My Website</h1>

                <h1>Welcome to My Website</h1>

                <h1>Welcome to My Website</h1>
                <ParticlesComponent id={'hi'}></ParticlesComponent>

                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>
                <h1>Welcome to My Website</h1>


            </main>
      </div>
  );
};

export default Home;
