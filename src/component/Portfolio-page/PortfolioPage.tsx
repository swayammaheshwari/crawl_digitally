import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./style.module.css";

export default function PortfolioPage() {
  return (
    <>
      <Box m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_1.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={styles.img_div}>
              <img src="portfolio_img/portfolio_2.png" alt="" className={styles.responsive_img} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box m={2}>
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

    </>
  );
}
