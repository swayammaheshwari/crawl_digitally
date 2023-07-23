import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./style.module.css";
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";

export default function PortfolioPage() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    // Function to update the 'isMobile' state based on the window width
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Event listener to update 'isMobile' when the window is resized
    window.addEventListener('resize', updateIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);


  return (
    <>
      <Box sx={{ maxWidth: "100%", m: "20px" }}>
        <Typography variant="h2" align="center">Social Media</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "" : "30px" }}>
          <Box mb={3} >
            <img src="portfolio_img/portfolio_1.png" alt="" width={"100%"} height={"70%"} />
          </Box>
          <Box mb={3}>
            <img src="portfolio_img/portfolio_2.png" alt="" width={"100%"} height={"70%"} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "100%", m: "20px" }}>
        <Typography variant="h2" align="center">Branding</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_2.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ maxWidth: "100%", m: "20px" }}>
        <Typography variant="h2" align="center">Youtube</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe width="460" height="315" src="https://www.youtube.com/embed/ZlKnLyKO5UU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe width="460" height="315" src="https://www.youtube.com/embed/ZlKnLyKO5UU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe width="460" height="315" src="https://www.youtube.com/embed/ZlKnLyKO5UU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}
