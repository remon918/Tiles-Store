import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PopularSection from "@/components/shared/PopularSection";
import AboutUs from "@/components/shared/AboutUs";
import Banner from "@/components/shared/Banner";

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <Banner />
      {children}
      <PopularSection />
        <AboutUs />
        <Footer />
    </>
  );
};

export default MainLayout;
