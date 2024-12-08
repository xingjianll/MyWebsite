import React from 'react';
import BlogBody from '@/components/blog/BlogBody';
import NavBar from "@/components/navbar/NavBar";

const BlogPage: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <BlogBody></BlogBody>
            </main>
        </div>
    );
};

export default BlogPage;
