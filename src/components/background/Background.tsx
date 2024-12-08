'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './background.module.css';
import inori1 from '../../../public/inori_clear.png'
import inori2 from '../../../public/inori_figure.png'

import ParticlesComponent from "@/components/Particles";

const Background: React.FC = () => {
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

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className={styles.container}>
            <ParticlesComponent id={'hi'} opacity={0.3} z={2} b_opacity={0} amount={25}></ParticlesComponent>
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
        </div>
    );
};

export default Background;
