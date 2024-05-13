'use client'



// components/NavBar.tsx
import Link from 'next/link';
import styles from './NavBar.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NavBar: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: `rgba(255, 255, 255, ${Math.min(0.3 + scrollY / 500, 0.9)})`,
        backdropFilter: `blur(${Math.min(5 + scrollY / 200, 10)}px)`
    };

    return (
        <nav className={styles.navbar} style={navbarStyle}>
            <div className={styles.links}>
                <Link href="/" passHref>
                    <a className={styles.link}>HOME</a>
                </Link>
                <Link href="/blogs" passHref>
                    <a className={styles.link}>BLOGS</a>
                </Link>
            </div>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.svg" alt="GitHub" width={35} height={35} />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
