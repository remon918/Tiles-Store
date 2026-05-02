import Image from "next/image";
import Link from "next/link";

async function getTileDetails(id) {
  const res = await fetch("https://tiles-store.vercel.app/tiles.json", {
    next: { revalidate: 1 },
  });
  const tiles = await res.json();
  return tiles.find((tile) => tile.id === id);
}

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tile = await getTileDetails(id);

  const {
    title,
    description,
    image,
    price,
    category,
    dimensions,
    material,
    inStock,
    currency,
  } = tile;

  return (
    <div className="">
      
      <Link
  href="/alltiles"
  className="inline-flex mt-6 items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
>
  ← Back to all tiles
</Link>
      <h2 className="mt-10 text-2xl font-bold text-center mb-5 text-gray-800">About This Tiles</h2>
      <hr className="opacity-15 w-[30%] mx-auto"/>
      <div className="md:max-w-5xl max-w-3xl flex items-center justify-center bg-gray-100 mt-10">
        <div className="bg-white p-6 rounded-md shadow max-w-md w-full gap-4 grid grid-cols-2">
          <div className="flex justify-end">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="mx-auto rounded-md"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl flex justify-self-start font-semibold text-gray-800" >
              {title}
            </h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
              Category ● {material}
            </p>
            <p className="font-semibold text-gray-600">Dimensions ● {dimensions}</p>
            
              <p className="text-cyan-600 md:text-lg text-sm font-medium md:font-bold">${price} {""} <span className="text-xs text-gray-500 font-normal">/per sqft</span> </p>
              <p className="text-gray-600 text-sm">pay with {currency}</p>
           
            <span
              className={`text-sm italic font-semibold px-3 py-1 rounded-full ${
                inStock == true
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {inStock ? "● In Stock" : "● Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
