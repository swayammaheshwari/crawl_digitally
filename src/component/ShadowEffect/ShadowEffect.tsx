import React from 'react'
import styles from "../assets/effect.module.css";

const ShadowEffect = () => {
    return (
        <>
            <div id="dad" className={styles.dad}>
                <div className={styles.front}>
                    <h2>WE WAVE THE WEB OF</h2>
                    <h1>CREATIVITY</h1>
                    <p>LET'S CRAWL, WALK, AND SOAR TOGETHER.</p>
                    <span>SCROLL!</span>
                </div>
                <div id="back" className={styles.back}>
                    <img src="https://picsum.photos/1400/600?random=1" />
                </div>
            </div>
        </>
    )
}

export default ShadowEffect
