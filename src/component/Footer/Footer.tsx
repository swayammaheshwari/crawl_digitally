import Box from "@mui/material/Box";
import styles from "./style.module.css";
import emoji from "./assets/handshake.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  const stylesbg: object = {
    main: {
      zIndex: "60",
      position: "relative",
    },
  };

  return (
    <div style={stylesbg.main}>
      <Box>
        <div className={styles.chat}>
          <div className={styles.inner_div}>
            <h1
              className={`flex flex-col px-3  flex-nowrap ` + styles.footersize}
            >
              <span className=" flex  align-middle justify-center ">
                Would you like to get along?
              </span>
              <span>Let's chat!</span>
            </h1>
            <hr />
          </div>
          <div className={styles.flex_box}>
            <div className="flex  md:justify-start md:align-middle justify-center   ">
              <AiFillLinkedin
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "2px",
                  cursor: "pointer",
                }}
              />

              <AiFillInstagram
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  padding: "2px",
                }}
              />

              <BsYoutube
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  padding: "2px",
                }}
              />

              <BiLogoFacebookSquare
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  padding: "2px",
                }}
              />
            </div>

            <div className={styles.list_box}>
              <ul className={styles.list}>
                <li className="cursor-pointer">
                  <Link to="/career"> About Us</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/portfolio">Portfolio </Link>{" "}
                </li>
                <li className="cursor-pointer">
                  <Link to="/contact">Contact Us</Link>{" "}
                </li>
                <li className="cursor-pointer">
                  <Link to="/services">Services </Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <p className={styles.para}>all rights reserved.</p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
