import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/Navbar/NavBar";
import PortfolioContain from "../component/porfolio/Portfolio";
import { BackGroundHeader } from "../component/test/Header/page";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <BackGroundHeader />
      <PortfolioContain />
      <Contact />
      <Footer />

    </>
  );
}

export default Home;
