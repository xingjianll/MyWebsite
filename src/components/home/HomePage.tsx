'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './homepage.module.css';
import inori1 from '../../../public/inori_clear.png'
import inori2 from '../../../public/inori_figure.png'

import ParticlesComponent from "@/components/Particles";
const HomePage: React.FC = () => {
    const [_, setScrollY] = useState(0);

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
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.container}>
            <ParticlesComponent id={'hi'} opacity={0.3} z={2} b_opacity={0.2} amount={25}></ParticlesComponent>
            <ParticlesComponent id={'hi2'} opacity={1} z={4} b_opacity={0} amount={10}></ParticlesComponent>

            <div className={styles.background}>
                <Image
                    src={inori1}
                    alt="character"
                    style={{width: 'auto', height: '100vh'}}
                />
            </div>
            <div className={styles.foreground}>
                <Image
                    src={inori2}
                    alt="character"
                    style={{width: 'auto', height: '100vh'}}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <a>About Me</a>
                </div>
                <div className={styles.text}>
                    <a>CV</a>
                </div>
                <div className={styles.text}>
                    <a>Experiences</a>
                </div>
                <div className={styles.text}>
                    <a>Blog</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
