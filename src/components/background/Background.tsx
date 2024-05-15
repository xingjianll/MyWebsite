'use client'


import { useEffect } from 'react';
import './background.css'; // Make sure to create this CSS file

const AnimatedBackground: React.FC = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            document.body.style.setProperty('--start-angle-before', `${Math.random() * 360}deg`);
            document.body.style.setProperty('--start-angle-after', `${Math.random() * 360}deg`);
        }, 5000); // Changes the gradient angle every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return <div className="animated-background"></div>;
};

export default AnimatedBackground;
