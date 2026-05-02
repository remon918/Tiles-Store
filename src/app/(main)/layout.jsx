import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PopularSection from "@/components/shared/PopularSection";
import AboutUs from "@/components/shared/AboutUs";
import Banner from "@/components/shared/Banner";
import Offers from "@/components/shared/Offers";
import TilesPage from "@/components/shared/TilesPage";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Offers />
      <Banner />
      <TilesPage />
      {children}
      <PopularSection />
      <AboutUs />
      <Footer />
    </>
  );
};

export default MainLayout;
