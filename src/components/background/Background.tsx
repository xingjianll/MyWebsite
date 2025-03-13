// Background.tsx

import React from 'react';
import Image from 'next/image';
import styles from './Background.module.css';
import inori1 from '../../../public/inori_clear.png'
import inori2 from '../../../public/inori_figure.png'
import ParticlesComponent from "@/components/Particles";

const Background: React.FC<{ blur: number}> = ({ blur }) => {
    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.overlay}
                style={{
                    backgroundColor: `rgba(10, 10, 10, ${blur / 350})`
                }}
            ></div>

            <div
                className={styles.blurEffect}
                style={{
                    filter: `blur(${blur / 6}px)`
                }}
            >
                <ParticlesComponent id={'hi'} opacity={0.3} z={2} b_opacity={0} amount={40}></ParticlesComponent>
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
        </div>
    );
};

export default Background;
