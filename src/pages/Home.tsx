import AboutUs from "../component/About/page";
import ContactUs from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/Navbar/NavBar";
import NewFooter from "../component/newFooter/test";
import PortfolioContain from "../component/porfolio/Portfolio";
import SliderComponent from "../component/SwiperSlider/PortfolioTest";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PortfolioContain />
      <SliderComponent />
      <AboutUs />
      <ContactUs />
      {/* <Footer /> */}
      <NewFooter />
    </>

  );
}

export default Home;
