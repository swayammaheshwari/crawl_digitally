import React from 'react'
import styles from "./style.module.css";

const AboutUs: React.FC = () => {
    return (
        <>
            <div className={styles.portfolio_div}>
                <hr />
                <h3>About Us</h3>
                <hr />
            </div>
            <h6 className={styles.division}>WHO WE ARE</h6>
            <div className={styles.about_content}>
                <p>where we weave the web of creativity. As a passionate creative agency, we believe in the power of bold ideas, vivid storytelling, and extraordinary experiences. Our team of artistic visionaries and tech-savvy wizards collaborates seamlessly to craft awe-inspiring digital journeys as we crawl, walk, and ultimately soar to new heights.</p>
            </div>

            <div className={styles.about_img}>
                <img src="about_img/about_img_1.png" alt="" />
                <img src="about_img/about_img_2.png" alt="" />
                <img src="about_img/about_img_3.png" alt="" />
                <img src="about_img/about_img_4.png" alt="" />
            </div>
        </>
    )
}

export default AboutUs