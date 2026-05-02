import Navbar from "@/components/shared/Navbar";
import React from "react";

const allLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default allLayout;
