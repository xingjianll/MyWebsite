'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';

const MusicPlayer: React.FC = () => {
    const songs = [
        { title: 'Planetes', artist: 'Egoist', src: '/planetes.flac' },
        { title: 'Departures', artist: 'Egoist', src: '/departures.flac' },
        { title: 'The Everlasting Guilty Crown', artist: 'Egoist', src: '/the-everlasting-guilty-crown.flac' },
    ];

    const [display, setDisplay] = useState('none');  // Hide player during page initialization
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isShuffled, _] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0 });

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const initialX = window.innerWidth - 380;
        const initialY = window.innerHeight - 100;
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
        } while (nextSongIndex === currentSongIndex); // Ensure the new song is different
        setCurrentSongIndex(nextSongIndex);

        if (audioRef.current) {
            audioRef.current.src = songs[nextSongIndex].src; // Update the song source
            if (isPlaying) {
                audioRef.current.play();
            }
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

    return (
        <div
            className={`${styles.musicPlayer} ${isHovered ? styles.hovered : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px`, position: 'absolute', display: `${display}` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
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
                <button className={styles.playButton} onClick={togglePlay}>
                    {isPlaying ? '||' : '▶'}
                </button>
                <button
                    className={`${styles.shuffleButton} ${isShuffled ? styles.activeShuffle : ''}`}
                    onClick={playRandomSong}
                >
                    🔀
                </button>
            </div>
            <audio ref={audioRef} src={songs[currentSongIndex].src} />
        </div>
    );
};

export default MusicPlayer;
