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
import GridDistortion from "@/components/GridDistortion/GridDistortion";
import inori1 from '../../public/inori_clear.png'
import MagnetLines from "@/components/MagnetLines/MagnetLines";


const Home: NextPage = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const [pullAmount, setPullAmount] = useState(0);
    const { started, finished } = useGlobalContext();
    const MAXPULL = 1000;
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

        if (pullAmount < MAXPULL) {
            if (finished) {
                const newPull = Math.max(Math.min(MAXPULL, pullAmount + e.deltaY), 0);
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
                    await timeout(2);
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
            <Background/>
            <div className={styles.textContainer}>
                {started && <Typed></Typed>}
                {finished &&
                    <div className={`${styles.buttonContainer} ${finished ? styles.buttonContainer2 : ''}`}>
                        <Button onClick={handleGithub}>Github</Button>
                        <Button onClick={handleLinkedin}>Linkedin</Button>
                    </div>
                }
            </div>

            <div
                className={styles.background2}
                style={{
                    marginTop: `${100-(pullAmount/10)}vh`,
                    // transition: 'transform 0.3s ease'
                }}
            >
                <div
                    className={styles.newSection}
                >
                    <h1>ABOUT ME</h1>
                    <div className={styles.titleBox}>
                        {Array.from({length: 100}).map((_, index) => (
                            <MagnetLines
                                key={index}
                                rows={1}
                                columns={1}
                                containerSize="20px"
                                lineColor="darkred"
                                lineWidth="2px"
                                lineHeight="20px"
                                baseAngle={0}
                                style={{margin: 0, padding: 0}}
                            />
                        ))}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '6rem',
                        }}
                    >
                        <GitHubCalendar
                            username="xingjianll"
                            hideTotalCount={false}
                            colorScheme={'light'}
                        />
                    </div>

                    <ReactMarkdown>{intro1}</ReactMarkdown>

                    <div style={{width: '100%', height: '500px', padding: '6rem', alignSelf: 'center'}}>
                        <GridDistortion
                            imageSrc='inori2.png'
                            grid={10}
                            mouse={0.1}
                            strength={0.15}
                            relaxation={0.9}
                            className="custom-class"
                        />
                    </div>
                    <ReactMarkdown>{intro2}</ReactMarkdown>
                </div>
            </div>
        </main>
    );
};

export default Home;
