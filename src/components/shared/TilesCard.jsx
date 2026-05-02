import Image from "next/image";
import Link from "next/link";
import React from "react";

const TilesCard = ({ tiles }) => {
  const { image, title, price, inStock } = tiles;

  return (
    <Link href={`/tiles/${""}`} >
    <div
      className="flex flex-col gap-3 p-2 rounded-lg shadow-sm bg-white 
                 transition-all duration-300 ease-in-out 
                 hover:-translate-y-2 hover:shadow-md hover:bg-cyan-50 cursor-pointer"
    >
      {/* ইমেজের জন্য আলাদা কন্টেইনার */}
      <div className="relative w-full h-[180px] group overflow-hidden rounded-md">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
        />
      </div>

      {/* টেক্সট সেকশন */}
      <div className="flex flex-col gap-1 p-1">
        <h2 className="text-lg font-semibold text-gray-700 line-clamp-1">
          {title}
        </h2>

        <div className="flex justify-between items-center h-8">
          {/* স্টক থাকলে প্রাইস দেখাবে, না থাকলে গ্রে কালারে Out of Stock */}
          {inStock ? (
            <p className="text-cyan-600 text-sm font-medium">
              ${price} {""}
              <span className="text-xs text-gray-500 font-normal">
                /per sqft
              </span>
            </p>
          ) : (
            <p className="text-gray-400 font-medium text-sm italic">
              ● Out of Stock
            </p>
          )}

          {/* ডট ইন্ডিকেটর (অপশনাল: শুধু স্টকে থাকলেই দেখাবে) */}
          {inStock && (
            <p className="text-xs font-medium text-green-500 animate-pulse">
              ● In Stock
            </p>
          )}
        </div>
      </div>

      <hr className="opacity-10 w-[85%] mx-auto" />
      <p className="text-center text-blue-400 text-xs font-bold tracking-wider">
        VIEW DETAILS
      </p>
    </div>
    </Link>
  );
};

export default TilesCard;
