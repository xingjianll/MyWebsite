'use client';

import React, { useState, useRef } from 'react';
import styles from './MusicPlayer.module.css';

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div
            className={`${styles.musicPlayer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.details}>
                <img
                    src="/album.jpg"
                    alt="Album Art"
                    className={styles.albumArt}
                />
                <div>
                    <h4 className={styles.trackTitle}>Planetes</h4>
                    <p className={styles.artistName}>Egoist</p>
                </div>
            </div>
            <button className={styles.playButton} onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <audio ref={audioRef} src="/planetes.flac" />
        </div>
    );
};

export default MusicPlayer;
