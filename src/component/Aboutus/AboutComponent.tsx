// import Gallery from "../Carousal/Carousal";
import styles from "./assets/style.module.css";
import VideoSec from "./video/videoSection/VideoSec";

const AboutComponent = () => {
  return (
    <>
      <section className={styles.portfolio}>
        <div className={styles.portfolio_div}>
          <hr />
          <h3>About Us</h3>
          <hr />
        </div>
        <VideoSec />
        <div className={styles.contentdiv}>
          <h1>Welcome to Crawl Digitally !</h1>
          <p>
            Where we weave the web of creativity. As a passionate creative
            agency, we believe in the power of bold ideas, vivid storytelling,
            and extraordinary experiences. Our team of artistic visionaries and
            tech-savvy wizards collaborates seamlessly to craft awe-inspiring
            digital journeys as we crawl, walk, and ultimately soar to new
            heights.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
