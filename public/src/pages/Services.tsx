import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/NavBar";
import { useEffect, useState } from "react";
import ServicesCard from "../component/Services/ServicesCard";
import ServicesSlider from "../component/ServicesSlider/ServicesSlider";
function Services() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar />
      {windowWidth < 768 ? (
        <>
          {/* <Service /> */}
          <div style={{textAlign:"center", display:"flex",justifyContent :"center", flexDirection:"column",alignItems:'center'}} >
            <ServicesCard />
          </div>
          {/* <ServicesSlider /> */}
          <Footer />
        </>
      ) : (
        <>
          {/* <CardGrid />
          <Service /> */}
          <ServicesSlider />
          <Footer />
        </>
      )}
    </>
  );
}

export default Services;
