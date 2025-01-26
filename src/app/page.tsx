'use client';
import { useGlobalContext } from "@/app/context";
import type { NextPage } from 'next';
import Background from "@/components/background/Background";
import React, { useRef, useState, useEffect } from "react";
import styles from "./home.module.css";
import Typed from "@/components/typed/typed";
import ReactMarkdown from "react-markdown";
import GitHubCalendar from "react-github-calendar";
import {Button} from "@mantine/core";

const Home: NextPage = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const [pullAmount, setPullAmount] = useState(0);
    const { started, finished } = useGlobalContext();
    const maxPull = 150;
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
            if (finished) {
                const newPull = Math.min(maxPull, pullAmount + e.deltaY);
                setPullAmount(newPull);
            }
        } else {
        }
    };

    const handleGithub = () => {
        window.open('https://github.com/xingjianll', '_blank');
    };

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/xingjian-liu-b87a841a4/', '_blank');
    };

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(() => {
        const animatePull = async () => {
            if (finished) {
                for (let i = 0; i < 100; i++) {
                    setPullAmount(i);
                    await timeout(1);
                }
                const container = mainRef.current;
                if (!container) return;
                container.style.overflowY = "auto";
            }
        };

        animatePull();
    }, [finished]);


    return (
        <main ref={mainRef} className={styles.mainContainer} onWheel={handleWheel}>
            <Background pullAmount={pullAmount} maxPull={maxPull}/>
            <div className={styles.textContainer}>
                {started && <Typed></Typed>}
                {finished &&
                    <div className={`${styles.buttonContainer} ${finished ? styles.buttonContainer2 : ''}`}>
                        <Button onClick={handleGithub}>Github</Button>
                        <Button onClick={handleLinkedin}>Linkedin</Button>
                    </div>
                }
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <GitHubCalendar
                            username="xingjianll"
                            hideTotalCount={false}
                            colorScheme={'light'}
                        />
                    </div>
                    <ReactMarkdown>{intro1}</ReactMarkdown>
                    <ReactMarkdown>{intro2}</ReactMarkdown>
                </div>
            </div>
        </main>
    );
};

export default Home;
