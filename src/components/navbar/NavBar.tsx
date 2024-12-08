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
        backdropFilter: `blur(${Math.min(Math.max(scrollY, 0)*8 / 150, 10)}px)`
    };

    return (
        <nav className={styles.navbar} style={navbarStyle}>
            <div className={styles.links}>
                <Link href="/" passHref className={styles.link}>
                    Home
                </Link>
                <Link href="/blog" passHref className={styles.link}>
                    Blogs
                </Link>
                <Link href="https://www.linkedin.com/in/xingjian-liu-b87a841a4/" passHref className={styles.link}>
                    Linkedin
                </Link >
                <Link href="https://github.com/xingjianll" passHref className={styles.link}>
                    Github
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
