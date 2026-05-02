import AboutUs from "@/components/shared/AboutUs";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import Offers from "@/components/shared/Offers";
import PopularSection from "@/components/shared/PopularSection";
import TilesPage from "@/components/shared/TilesPage";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Offers />
      <Banner />
      <TilesPage />
      <PopularSection />
      <AboutUs />
      <Footer />
    </div>
  );
}
