// Background.tsx

import React from 'react';
import Image from 'next/image';
import styles from './Background.module.css';
import inori1 from '../../../public/inori_clear.png'
import inori2 from '../../../public/inori_figure.png'
import ParticlesComponent from "@/components/Particles";


const Background: React.FC = () => {
    return (
        <div className={styles.container}>
            <ParticlesComponent id={'hi'} opacity={0.3} z={2} b_opacity={0} amount={30}></ParticlesComponent>
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
