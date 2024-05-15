import React from 'react';
import styles from './homepage.module.css'; // Assuming you use CSS modules for styling

const HomePage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Xingjian Liu</h1>
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Hi! You can call me Kevin,</h1>
                <p>I study computer science @ University of Toronto, St.George campus.</p>
                <p>I am interested in <span style={codeStyle}>system modeling</span>, <span style={codeStyle}>machine learning</span>, and <span style={codeStyle}>retrieval augmented generation</span>.</p>
            </main>
            <div className={styles.scrollDownArrow}>
                &#x2193; {/* Unicode down arrow, you can replace it with an SVG or an icon from a library */}
            </div>

        </div>
    );
};

const codeStyle = {
    border: '1px solid #ccc', // Subtle border for the code blocks
    backgroundColor: 'rgba(240, 240, 245, 0.5)',
    borderRadius: '6px', // Rounded corners for the code blocks
    padding: '2px 4px', // Padding inside the code blocks
    fontSize: '1em', // Ensure font size matches surrounding text
    color: '#d63384' // Give a distinct color to make it pop
};

export default HomePage;
