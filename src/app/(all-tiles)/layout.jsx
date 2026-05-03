import Navbar from "@/components/shared/Navbar";
import React from "react";

export const metadata = {
  title: "DBL | All Tiles",
};

const allLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default allLayout;
