'use client';

import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css'; // Assuming you use CSS modules for styling

const HomePage: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToExperience = () => {
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Xingjian Liu</h1>
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Hi! You can call me Kevin,</h1>
                <p>I study computer science @ University of Toronto, St.George campus.</p>
                <p>I am interested in <span style={codeStyle}>system modeling</span>, <span style={codeStyle}>machine learning</span>, and <span style={codeStyle}>retrieval augmented generation</span>.</p>
            </main>
            <div
                className={styles.scrollDownArrow}
                onClick={scrollToExperience}
                style={{ opacity: 1 - scrollY / 750}}
            >
                &#x2193; {/* Unicode down arrow, you can replace it with an SVG or an icon from a library */}
            </div>

            <div className={styles.experience}>
                <h2>Professional Experiences</h2>
                <div className={styles.experienceItem}>
                    <h3>The Matter Lab, University of Toronto</h3>
                    <p><strong>Research Intern</strong> (May 2024 - Present)</p>
                    <ul>
                        <li>Collaboratively developed Retrieval Augmented Code Generation framework for Python driven by LLMs.</li>
                        <li>Leveraging Python’s ast library, built Python module level source code analyser that recursively creates summaries for function and class nodes in module’s abstract syntax tree.</li>
                        <li>Applied and implemented cognitive science concepts such as working memory/long-term memory to enhance code retrieval for better generation quality.</li>
                        <li>Aided in fine-tuning LLMs for property-conditioned generation of OLED materials.</li>
                        <li>Enhanced data preprocessing and visualization pipeline for the fine-tuning dataset.</li>
                        <li>Fine-tuned GPT-2 model with processed OLED molecule dataset on UofT’s computing cluster, iteratively improving data preprocessing pipeline.</li>
                    </ul>
                </div>
                <div className={styles.experienceItem}>
                    <h3>Knowlecy</h3>
                    <p><strong>Software Engineering Intern</strong> (Sep 2023 - Present)</p>
                    <ul>
                        <li>Collaboratively developed LLM powered Gen-AI academic research tool using Retrieval Augmented Generation.</li>
                        <li>Implemented chatbot tailored for question answering on academic papers using LangChain, achieving QA accuracy score of 40% on the QASPER dataset.</li>
                        <li>Leveraging open source framework LlamaIndex, implemented data ingestion pipeline to parse academic papers into tree-like data structure for fine-grained information retrieval with citation.</li>
                        <li>Utilized ChromaDB to cache and store the embedding of parsed documents for fast semantic search.</li>
                        <li>Applied Recursive Summarization technique to create text embedding for long documents.</li>
                        <li>Applied BM25 and vector similarity search to retrieve information based on LLM-generated queries.</li>
                        <li>Identified performance bottleneck using profiling tool VizTracer, decreasing retrieval latency by 90%.</li>
                        <li>Created Dockerfiles for building microservice Docker images, deployed services on Linux server.</li>
                        <li>Implemented GitHub workflows for automatic deployment and style/type checking.</li>
                        <li>Leveraging QASPER Dataset, created benchmark pipeline for evaluating chatbot QA accuracy on research papers.</li>
                        <li>Identified user stories and designed RESTful API endpoints using the microservice architecture.</li>
                        <li>Implemented FastAPI Endpoint for retrieving domain entities from MongoDB.</li>
                    </ul>
                </div>
                <h2>Projects</h2>
                <div className={styles.projectItem}>
                    <h3>CyclicAgent</h3>
                    <p><a href="https://github.com/xingjianll/cyclic-agent">https://github.com/xingjianll/cyclic-agent</a></p>
                    <ul>
                        <li>Developed open source framework for creating fully autonomous LLM based AI agents using state machines.</li>
                        <li>Designed the framework architecture according to the State Design Pattern and OOP principles, ensuring a readable and expandable codebase.</li>
                        <li>Using Python’s threading package, implemented agent executor for asynchronous execution in multi-agent scenarios.</li>
                        <li>Leveraging Cohere Command R+, implemented an autonomous agent example that reads and writes comments on social media and infers next action (state) with current state and agent memory.</li>
                    </ul>
                </div>
                <div className={styles.projectItem}>
                    <h3>MobileGPT</h3>
                    <p><a href="https://github.com/xingjianll/MobileGPT">https://github.com/xingjianll/MobileGPT</a></p>
                    <ul>
                        <li>Replicated the capabilities of ChatGPT on the Android platform.</li>
                        <li>Established proxy server on Amazon Web Service to relay messages to devices operating in blocked regions.</li>
                        <li>Implemented responsive and user-friendly GUI utilizing Android Jetpack Compose.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const codeStyle: React.CSSProperties = {
    border: '1px solid #ccc', // Subtle border for the code blocks
    backgroundColor: 'rgba(240, 240, 245, 0.5)',
    borderRadius: '6px', // Rounded corners for the code blocks
    padding: '2px 4px', // Padding inside the code blocks
    fontSize: '1em', // Ensure font size matches surrounding text
    color: '#d63384' // Give a distinct color to make it pop
};

export default HomePage;
