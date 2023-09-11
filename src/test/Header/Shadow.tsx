import Header from "../../component/header/Header";
import styles from "./effect.module.css";

const Shadow: React.FC = () => {
    return (
        <>
            <div id="dad" className={styles.dad}>
                <div className={styles.front}>
                    <Header />
                </div>
                <div id="back" className={styles.back}>
                    <img src="https://picsum.photos/1400/600?random=1" />
                </div>
            </div>
        </>
    );
};

export default Shadow;
