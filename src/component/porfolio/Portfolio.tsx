
import styles from "./style.module.css";

const PortfolioContain = () => {
  return (
    <>
      <section className={styles.portfolio}>
        <h1>Welcome to Crawl Digitally !</h1>
        <p>
          where we weave the web of creativity. As a passionate creative agency,
          we believe in the power of bold ideas, vivid storytelling, and
          extraordinary experiences. Our team of artistic visionaries and
          tech-savvy wizards collaborates seamlessly to craft awe-inspiring
          digital journeys as we crawl, walk, and ultimately soar to new
          heights.
        </p>
        <div className={styles.portfolio_div}>
          <hr />
          <h3>Portfolio</h3>
          <hr />
        </div>
      </section>
    </>
  );
};

export default PortfolioContain;
