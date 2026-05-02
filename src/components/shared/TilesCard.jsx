import Image from "next/image";
import React from "react";

const TilesCard = ({ tiles }) => {
  return (
    <div
        
      className=" flex flex-col gap-3 p-2 rounded-lg shadow-sm bg-white 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-2 hover:shadow-md hover:bg-cyan-50 cursor-pointer"
    >
      {/* ইমেজের জন্য আলাদা কন্টেইনার */}
      <div className="relative w-full h-[180px] group overflow-hidden rounded-md">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          src={tiles.image}
          alt={tiles.title}
          fill
        />
      </div>

      {/* টেক্সট সেকশন */}
      <div className="flex flex-col gap-1 p-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {tiles.title}
        </h2>
        <p className="text-cyan-400 font-bold">
          ${tiles.price}{" "}
          <span className="text-xs text-gray-500 font-normal">/ per sqft</span>
        </p>
      </div>
      <hr className="opacity-10 w-[85%] mx-auto" />
      <p className="text-center text-blue-600 text-sm">VIEW DETAILS</p>
    </div>
  );
};

export default TilesCard;
