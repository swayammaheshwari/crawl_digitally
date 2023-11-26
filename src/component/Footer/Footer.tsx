import Box from "@mui/material/Box";
import styles from "./style.module.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  interface Styles {
    main: {
      zIndex: string;
      position: string;
    };
  }
  const stylesbg: Styles = {
    main: {
      zIndex: "60",
      position: "relative",
    },
  };

  return (
    <div style={stylesbg.main as React.CSSProperties}>
      <Box>
        <div className={styles.chat}>
          <div className={styles.inner_div}>
            <h1
              className={`flex flex-col px-3  flex-nowrap ` + styles.footersize}
            >
              <span className=" flex pt-5 align-middle justify-center ">
                Would you like to get along?
              </span>
              <span>Let's chat!</span>
            </h1>
            <hr />
          </div>
          <div className={styles.flex_box}>
            <div className="flex   md:align-middle justify-center   ">
              <a
                href="https://www.linkedin.com/company/crawldigitally/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin
                  style={{
                    width: "40px",
                    height: "40px",
                    padding: "2px",
                    cursor: "pointer",
                  }}
                />
              </a>

              <a
                href="https://www.instagram.com/crawldigitally/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram
                  style={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                />
              </a>
              <a
                href="https://www.youtube.com/@crawldigitally8492"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube
                  style={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                />
              </a>
              <a
                href="https://www.facebook.com/crawldigitally/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoFacebookSquare
                  style={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                />
              </a>
            </div>
            <div className={styles.list_box}>
              <ul className={styles.list}>
                <li className="cursor-pointer">
                  <Link to="/career"> About</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/portfolio">Portfolio</Link>{" "}
                </li>
                <li className="cursor-pointer">
                  <Link to="/contact">Contact</Link>{" "}
                </li>
                <li className="cursor-pointer">
                  <Link to="/services">Services</Link>{" "}
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
