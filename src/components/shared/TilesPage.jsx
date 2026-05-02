import TilesCard from "./TilesCard";

const TilesPage = async () => {
  const res = await fetch("https://tiles-store.vercel.app/tiles.json");
  const tiles = await res.json();
  const topTiles = tiles.slice(0, 10);
  console.log(topTiles);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center gap-4 my-8 md:my-15">
        <div className="h-[1px] w-27 md:w-93 bg-gray-300"></div>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-gray-800">
          Explore Our Tiles Collection
        </h2>

        <div className="h-[1px] w-27 md:w-93 bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {topTiles.map((tiles) => 
          <TilesCard key={tiles.id} tiles={tiles}/>
        )}
      </div>
    </div>
  );
};

export default TilesPage;
