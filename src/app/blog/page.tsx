import React from 'react';
import BlogBody from '@/components/blog/BlogBody';
import ParticlesComponent from "@/components/Particles";
import AnimatedBackground from "@/components/background/Background";
import NavBar from "@/components/navbar/NavBar";

const BlogPage: React.FC = () => {
    return (
        <div>
            <ParticlesComponent id={'hi'}></ParticlesComponent>
            <AnimatedBackground />

            <NavBar />
            <main>
                <BlogBody></BlogBody>
            </main>
        </div>
    );
};

export default BlogPage;
