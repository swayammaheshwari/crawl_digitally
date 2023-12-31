import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./style.module.css";

const Footer = () => {


  return (
    <>
      <Box mb={5}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} xl={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }} >
            <Box >
              <Typography variant="h6" color="#fffff" >
                Would you like to get along? Let's chat
              </Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} xl={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}  >
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }} >
              <Box>
                <Typography variant="h6" className={styles.typo}>Services</Typography>
                <ul className={styles.li}>
                  <li>
                    <Link className={styles.link} to="/portfoilio">
                      Web design
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} to="#">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} to="#">
                      Hosting
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }} >
              <Box>
                <Typography variant="h6" className={styles.typo}>About</Typography>
                <ul className={styles.li}>
                  <li>
                    <Link className={styles.link} to="#">
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} to="#">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} to="#">
                      Legacy
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" className={styles.typo}>Careers</Typography>
                <ul className={styles.li}>
                  <li>
                    <Link className={styles.link} to="#">
                      Job openings
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} to="#">
                      Employee success
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} to="#">
                      Benefits
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'flex-end' }} >
            <Box >
              <Link to="#">
                <FacebookIcon />
              </Link>
              <Link to="#">
                <TwitterIcon />
              </Link>
              <Link to="#">
                <AssistWalkerIcon />
              </Link>
              <Link to="#">
                <InstagramIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
