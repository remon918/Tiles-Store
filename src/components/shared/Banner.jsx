import Image from "next/image";
import tile1 from "@/assets/tile1.jpg";
import tile2 from "@/assets/tile2.jpg";
import tile3 from "@/assets/tile3.jpg";
import tile4 from "@/assets/tile4.webp";

const tiles = [
  {
    title: "Nano Crystal Polish",
    img: tile1,
  },
  {
    title: "Glazed Porcelain",
    img: tile2,
  },
  {
    title: "Glossy Wall",
    img: tile3,
  },
  {
    title: "High Definition Relief",
    img: tile4,
  },
];

export default function Banner() {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 tracking-wide">
        EXPLORE TILES COLLECTIONS BY CATEGORY
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded shadow-sm group"
            >
              <div className="relative w-full h-[180px]">
                <Image
                  src={tile.img}
                  alt={tile.title}
                  fill
                  className="object-cover rounded transition-transform duration-300 group-hover:scale-107"
                />
              </div>

              <h3 className="text-center mt-4 text-lg">
                {tile.title}
              </h3>

              <div className="w-8 h-[2px] bg-green-500 mx-auto my-2"></div>

              <p className="text-center text-blue-600 text-sm cursor-pointer">
                VIEW DETAILS
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}