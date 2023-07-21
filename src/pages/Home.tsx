import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/Navbar/NavBar";
import PortfolioContain from "../component/porfolio/Portfolio";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PortfolioContain />
      <Contact />
      <Footer />

    </>
  );
}

export default Home;
