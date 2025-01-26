// Background.tsx

import React from 'react';
import Image from 'next/image';
import styles from './Background.module.css';
import inori1 from '../../../public/inori_clear.png'
import inori2 from '../../../public/inori_figure.png'
import {min} from "@floating-ui/utils";
import ParticlesComponent from "@/components/Particles";

interface BackgroundProps {
    pullAmount: number;
    maxPull: number;
}

const Background: React.FC<BackgroundProps> = ({ pullAmount, maxPull }) => {
    const pullRatio = min(pullAmount / maxPull, 1);
    const maskPercent = (1 - pullRatio/4) * 100;

    const containerStyle = {
        '--fade-start': `${maskPercent}%`
    } as React.CSSProperties;

    return (
        <div className={styles.container}>
            <ParticlesComponent id={'hi'} opacity={0.3} z={2} b_opacity={0} amount={30}></ParticlesComponent>
            <div className={styles.background} style={containerStyle}>
                <Image
                    src={inori1}
                    alt="character"
                    style={{width: 'auto', height: '100vh'}}
                />
            </div>
            <div className={styles.foreground} style={containerStyle}>
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
