import ContactUs from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/Navbar/NavBar";
import PortfolioContain from "../component/porfolio/Portfolio";
import Shadow from "../test/Header/Shadow";
import SliderComponent from "../test/Portfolio/PortfolioTest";

function Test() {
    return (
        <>
            <Navbar />
            {/* <Shadow /> */}
            {/* <div style={{ position: "absolute", backgroundColor: "#101010" }}> */}
            <PortfolioContain />
            <SliderComponent />
            <ContactUs />
            <Footer />
            {/* </div> */}

        </>
    );
}

export default Test;
