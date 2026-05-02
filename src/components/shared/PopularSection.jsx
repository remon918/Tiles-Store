import React from "react";
import { FaHandsHelping, FaProjectDiagram, FaPenNib } from "react-icons/fa";

const data = [
  {
    icon: <FaHandsHelping size={28} />,
    title: "TILES CARE",
    desc: "Learn to maintain tiles with a delicate touch, a few smart cleaning procedures and tips & tricks on how to make your tiles last longer and keep your walls and floors looking as good as new.",
  },
  {
    icon: <FaProjectDiagram size={28} />,
    title: "PROJECTS",
    desc: "DBL Ceramics has always been prioritizing the versatility and premium quality in each and every project. Get to know some of our nationwide projects.",
  },
  {
    icon: <FaPenNib size={28} />,
    title: "NEWS & EVENTS",
    desc: "DBL Ceramics emphasizes on informing all the stakeholders about the current events. Learn more about what is happening around. Stay updated with our events and updates.",
  },
];

const PopularSection = () => {
  return (
    <section className="py-16 bg-[#f5f5f5] text-center px-6 md:px-16">
      
      {/* Title with side lines */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-[1px] w-25 md:w-130 bg-gray-300"></div>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-gray-800">
          POPULAR
        </h2>

        <div className="h-[1px] w-25 md:w-130 bg-gray-300"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            
            {/* Circle Icon */}
            <div className="w-44 h-44 rounded-full border-[10px] border-gray-200 flex items-center justify-center mb-6 bg-white hover:shadow-lg cursor-pointer">
              <div className="text-gray-700 ">{item.icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold tracking-wide mb-3 text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;