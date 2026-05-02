import Image from "next/image";
import React from "react";

const TilesCard = ({ tiles }) => {
  return (
    <div className="">
      <div className="">
        <Image src={tiles.image} alt={tiles.title} height={200} width={200}></Image>
        <h2 className="text-lg font-semibold text-gray-800">{tiles.title}</h2>
        <p className="text-gray-600">Price : {tiles.price}$ only</p>
        </div>
    </div>
  );
};

export default TilesCard;
