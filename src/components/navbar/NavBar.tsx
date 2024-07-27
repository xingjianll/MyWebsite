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
                    HOME
                </Link>
                <Link href="/blog" passHref className={styles.link}>
                    BLOGS
                </Link>
            </div>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/xingjian-liu-b87a841a4/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
                </a>
                <a href="https://github.com/xingjianll" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.svg" alt="GitHub" width={35} height={35} />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
