import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./style.module.css";


export default function PortfolioPage() {
  return (
    <div className={styles.sidespacing}>
      <Box>
        {/* <Typography
          variant="h2"
          lineHeight="2"
          align="center"
          className={styles.socialtype}
        >
          Our Work
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          m={5}
        >
          <Grid container spacing={5} className="h-full">
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={"pt-3" + styles.brandingdiv}
            >
              <a
                href="https://www.behance.net/gallery/183147641/Shampoo-Label-Design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={
                    styles.img_div +
                    " " +
                    styles.brandingdiv +
                    " " +
                    styles.div1
                  }
                >
                  <img
                    src="portfolio_img/cover.png"
                    alt=""
                    className={styles.responsive_img}
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.brandingdiv}>
              <a
                href="https://www.behance.net/gallery/182554367/Logo-Design-For-Fashion-Brand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={
                    styles.img_div +
                    " " +
                    styles.brandingdiv +
                    " " +
                    styles.div2
                  }
                >
                  <img
                    src="portfolio_img/2.png"
                    alt=""
                    className={styles.responsive_img}
                  />
                </div>
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box m={5}>
        {/* <Typography variant="h2" lineHeight="2" align="center" className={styles.socialtype} >
          {" "}
          Social Media{" "}
        </Typography> */}
        <Grid container spacing={3} pt={2}>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <a
                href="https://www.behance.net/gallery/183205721/Product-Shoot-Skincare-brand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="portfolio_img/skincare.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <a
                href="https://www.behance.net/gallery/181941695/Social-Media-Post-For-Jewelry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="portfolio_img/elegantly1.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <a
                href="https://www.behance.net/gallery/183148825/Housing-cart-Credai-Expo-Event-Design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="portfolio_img/final1.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <a
                href="https://www.behance.net/gallery/181876611/Social-Media-Design-For-Skincare-Brand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="portfolio_img/ds3.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <a
                href="https://www.behance.net/gallery/181941695/Social-Media-Post-For-Jewelry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="portfolio_img/3.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <a
                href="https://www.behance.net/gallery/183148825/Housing-cart-Credai-Expo-Event-Design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="portfolio_img/payment1.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* vertical card */}
      <Box m={5}>
        {/* <Typography variant="h2" lineHeight="2" align="center" className={styles.socialtype} >
          {" "}
          Social Media{" "}
        </Typography> */}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <a
              href="https://www.behance.net/gallery/183205721/Product-Shoot-Skincare-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.vhdiv + " " + styles.vhimg1}>
                {/* <img
                src="portfolio_img/facewash.JPG"
                alt=""
                className={styles.responsive_img}
              /> */}
              </div>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <a
              href="https://www.behance.net/gallery/183205721/Product-Shoot-Skincare-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.vhdiv + " " + styles.vhimg2}>
                {/* <img
                src="portfolio_img/ds1.jpg"
                alt=""
                className={styles.responsive_img}
              /> */}
              </div>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <a
              href="https://www.behance.net/gallery/181876611/Social-Media-Design-For-Skincare-Brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.vhdiv + " " + styles.vhimg3}>
                {/* <img
                src="portfolio_img/colgate1.jpg"
                alt=""
                className={styles.responsive_img}
              /> */}
              </div>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <a
              href="https://www.behance.net/gallery/183205721/Product-Shoot-Skincare-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.vhdiv + " " + styles.vhimg4}>
                {/* <img
                src="portfolio_img/ds2.jpg"
                alt=""
                className={styles.responsive_img}
              /> */}
              </div>
            </a>
          </Grid>
        </Grid>
      </Box>
      <Box m={2}>
        {/* <Typography variant="h2" lineHeight="2" align="center">
          Youtube
        </Typography> */}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/f6NAu_D3guc?si=no6VlzcAYSFOuEd9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/pWhbfsteGQs?si=kakSBn5DVtM1eCh0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/BBPdlyxEduo?si=IJw8cPmRRSyJh7S3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
