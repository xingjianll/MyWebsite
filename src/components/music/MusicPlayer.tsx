'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';
import {useGlobalContext} from "@/app/context";

const MusicPlayer: React.FC = () => {
    const songs = [
        { title: 'Planetes', artist: 'Egoist', src: '/planetes.flac' },
        { title: 'Departures', artist: 'Egoist', src: '/departures.flac' },
        { title: 'The Everlasting Guilty Crown', artist: 'Egoist', src: '/the-everlasting-guilty-crown.flac' },
    ];

    const [display, setDisplay] = useState('none');
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const { setStarted } = useGlobalContext();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isShuffled] = useState(false);

    const [initialView, setInitialView] = useState(true);
    const [startClicked, setStartClicked] = useState(false);

    const dragStartRef = useRef({ x: 0, y: 0 });
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const initialX = 150;
        const initialY = 400;
        setPosition({ x: initialX, y: initialY });
        setDisplay('flex');
    }, []);

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

    const playRandomSong = () => {
        let nextSongIndex;
        do {
            nextSongIndex = Math.floor(Math.random() * songs.length);
        } while (nextSongIndex === currentSongIndex);

        setCurrentSongIndex(nextSongIndex);
        if (audioRef.current && isPlaying) {
            audioRef.current.src = songs[nextSongIndex].src;
            audioRef.current.play();
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        const touch = e.touches[0];
        dragStartRef.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({ x: e.clientX - dragStartRef.current.x, y: e.clientY - dragStartRef.current.y });
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging) {
            const touch = e.touches[0];
            setPosition({ x: touch.clientX - dragStartRef.current.x, y: touch.clientY - dragStartRef.current.y });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

    const handleInitialPlayClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
        setStartClicked(true);
        setTimeout(() => {
            setInitialView(false);
        }, 800);
        setStarted(true);
    };

    return (
        <div
            className={`
            ${styles.musicPlayer} 
            ${initialView ? styles.initialView : ''} 
            ${(!initialView && isHovered) ? styles.hovered : ''} 
            ${startClicked ? styles.startClicked : ''
            }`
        }
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                position: 'absolute',
                display: `${display}`
        }}
            onMouseEnter={() => { if (!initialView) setIsHovered(true); }}
            onMouseLeave={() => { if (!initialView) setIsHovered(false); }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <audio ref={audioRef} src={songs[currentSongIndex].src} />

            {initialView && <span className={styles.startText}>START</span>}

            <div className={styles.content}>
                <div className={styles.details}>
                    <img
                        src="/album.jpg"
                        alt="Album Art"
                        className={`${styles.albumArt} ${isPlaying ? styles.playing : ''}`}
                    />
                    <div>
                        <div className={styles.trackTitleContainer}>
                            <span className={`${styles.trackTitle} ${isPlaying ? styles.playing : ''}`}>
                                {songs[currentSongIndex].title}
                            </span>
                        </div>
                        <p className={styles.artistName}>{songs[currentSongIndex].artist}</p>
                    </div>
                </div>

                <div className={styles.controls}>
                    <div className={styles.shuffleOpacity}>
                        {!initialView && (
                            <button
                                className={`${styles.shuffleButton} ${isShuffled ? styles.activeShuffle : ''}`}
                                onClick={playRandomSong}
                            >
                                🔀
                            </button>
                        )}
                    </div>
                    <button
                        className={styles.playButton}
                        onClick={initialView ? handleInitialPlayClick : togglePlay}
                    >
                        {isPlaying ? '||' : '▶'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
