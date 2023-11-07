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
            <h1 className=" flex   lg:text-8xl md:text-8xl text-6xl   ">
              Would you like to get along? Let's chat!{" "}
              {/* <img src={emoji}  alt="" /> */}
            </h1>
            <hr />
          </div>
          <div className={styles.flex_box}>
            <div className="flex text-center justify-center align-middle">
              <div className="flex text-center justify-center align-middle">
                <AiFillLinkedin
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                />
              </div>
              <div className="flex text-center justify-center align-middle">
                <AiFillInstagram
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />
              </div>
              <div className="flex text-center justify-center align-middle">
                <BsYoutube
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />
              </div>
              <div className="flex text-center justify-center align-middle">
                <BiLogoFacebookSquare
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />
              </div>
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
                  <Link to="/contact">Contact Us </Link>{" "}
                </li>
                <li className="cursor-pointer">
                  <Link to="/services">Services </Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <p className={styles.para}>
                proudly created in india. <br />
                all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
