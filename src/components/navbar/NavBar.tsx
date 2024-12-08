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
        backdropFilter: `blur(${Math.min(2 + Math.max(scrollY, 0)*8 / 150, 10)}px)`,
        marginTop: `${Math.max(0.8 - Math.max(scrollY, 0)*0.8 / 150, 0)}rem`,
        width: `calc(100% - ${Math.max(2 - Math.max(scrollY, 0)*2 / 150, 0)}rem)`, // Adjust width to 100% when scrolled more than 50px
        borderRadius: `${Math.max(50 - Math.max(scrollY, 0)*50 / 150, 0)}px`,
        backgroundColor: `rgba(255, 255, 255, ${Math.min(0.5 + Math.max(scrollY, 0)*0.3 / 150, 0.8)})`,
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
                <Link href="https://github.com/xingjianll" passHref className={styles.link}>
                    Github
                </Link>
                <Link href="https://www.linkedin.com/in/xingjian-liu-b87a841a4/" passHref className={styles.link}>
                    Linkedin
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;