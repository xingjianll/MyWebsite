'use client';
import { useGlobalContext } from "@/app/context";
import type { NextPage } from 'next';
import Background from "@/components/background/Background";
import React, { useRef, useState, useEffect } from "react";
import styles from "./home.module.css";
import Typed from "@/components/typed/typed";
import { GitHubCalendar } from "github-contribution-calendar";
import ReactMarkdown from "react-markdown";

const Home: NextPage = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const [pullAmount, setPullAmount] = useState(0);
    const { started } = useGlobalContext();
    const maxPull = 80;
    const [intro1, setIntro1] = useState<string>("");
    const [intro2, setIntro2] = useState<string>("");

    useEffect(() => {
        fetch("intro1.md")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then((text) => setIntro1(text))
            .catch((error) => {
                console.error("Error fetching the text file:", error);
            });
        fetch("intro2.md")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then((text) => setIntro2(text))
            .catch((error) => {
                console.error("Error fetching the text file:", error);
            });
    }, []);

    const handleWheel = (e: React.WheelEvent) => {
        const container = mainRef.current;
        if (!container) return;

        if (pullAmount < maxPull) {
            e.preventDefault();
            const newPull = Math.min(maxPull, pullAmount + e.deltaY);
            setPullAmount(newPull);

            // Once we hit maxPull, enable scrolling
            if (newPull >= maxPull) {
                container.style.overflowY = "auto";
            }
        } else {
        }
    };

    // Initially, disable normal scrolling
    useEffect(() => {
        const container = mainRef.current;
        if (container) {
            container.style.overflowY = "hidden";
        }
    }, []);

    return (
        <main ref={mainRef} className={styles.mainContainer} onWheel={handleWheel}>
            <Background pullAmount={pullAmount} maxPull={maxPull} />
            <div className={styles.textContainer}>
                {started && <Typed></Typed>}
            </div>

            <div className={styles.background2}>
                <div
                    className={styles.newSection}
                    style={{
                        transform: `translateY(-${pullAmount}px)`,
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <h1>More About Me</h1>
                    <ReactMarkdown>{intro1}</ReactMarkdown>
                    <ReactMarkdown>{intro2}</ReactMarkdown>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <GitHubCalendar
                            username="xingjianll"
                            token={process.env.GITHUB_TOKEN}
                            year={2024}
                            showLabels={true}
                            fontSize={14}
                            theme="Galaxy"
                            showTotalContributions={false}
                        />
                    </div>
                    <div style={{fontStyle: 'italic', textAlign: 'right'}}>
                        <h3>
                            &quot;Talk is cheap, show me the code.&quot; - Linus Torvalds
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
