import styles from "./style.module.css";

const Header = () => {
  const action = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 50,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className={styles.header}>
        <h2>WE WAVE THE WEB OF</h2>
        <h1>CREATIVITY</h1>
        <p>LET'S CRAWL, WALK, AND SOAR TOGETHER.</p>
        <span onClick={action}>SCROLL!</span>
      </section>
    </>
  );
};

export default Header;
