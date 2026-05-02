import React from "react";
import { FaLightbulb, FaMapMarkedAlt, FaBookOpen } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white text-center px-6 md:px-16">
      {/* Heading with lines */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] w-16 md:w-32 bg-gray-300"></div>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          WHY CHOOSE DBL CERAMICS?
        </h2>

        <div className="h-[1px] w-16 md:w-32 bg-gray-300"></div>
      </div>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed mb-12">
        At DBL Ceramics, we combine innovation, quality, and artistry to craft
        world-class tiles in Bangladesh. Our advanced manufacturing ensures that
        every tile reflects excellence in design and performance. Whether you
        want modern or classic styles, DBL Ceramics offers sustainable, stylish,
        and premium-quality tiles in BD that redefine your living and working
        spaces.
      </p>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Item 1 */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaLightbulb size={40} className="text-gray-700 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">About Us</h3>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaMapMarkedAlt size={40} className="text-gray-700 mb-4" />

          <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Display Center
          </h3>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center cursor-pointer group">
          <FaBookOpen size={40} className="text-gray-700 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Dealer Profile</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
