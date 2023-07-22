import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./style.module.css";
import { Typography } from "@mui/material";

export default function PortfolioPage() {

const isMobile = window.innerWidth < 600;


  return (
    <>
 { isMobile?    <Box sx={{maxWidth: "100%", m : "20px"}}>
        <Typography variant="h2" align="center">Social Media</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center" , flexDirection : "column" }}>
              <Box >
                <img src="portfolio_img/portfolio_1.png" alt="" width={"100%"} />
              </Box>
              <Box>
                <img src="portfolio_img/portfolio_2.png" alt="" width={"100%"}/>
              </Box>
        </Box>
      </Box> : <Box m={2} sx={{maxWidth: "100%"}}>
        <Typography variant="h2" align="center">Social Media</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center" , width: "100%" }}>
              <Box >
                <img src="portfolio_img/portfolio_1.png" alt="" width={"100%"} />
              </Box>
              <Box>
                <img src="portfolio_img/portfolio_2.png" alt="" width={"100%"}/>
              </Box>
        </Box>
      </Box>}
      {/* <Box m={2}>
        <Typography variant="h2" align="center">Branding</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.img_Box}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.img_Box}>
              <img src="portfolio_img/portfolio_2.png" alt="" className={styles.responsive_img} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.img_Box}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={styles.img_Box}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={styles.img_Box}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={styles.img_Box}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box m={2}>
        <Typography variant="h2" align="center">Youtube</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.you_Box}>
              <iframe width="460" height="315" src="https://www.youtube.com/embed/ZlKnLyKO5UU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.you_Box}>
              <iframe width="460" height="315" src="https://www.youtube.com/embed/ZlKnLyKO5UU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.you_Box}>
              <iframe width="460" height="315" src="https://www.youtube.com/embed/ZlKnLyKO5UU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box> */}

    </>
  );
}
