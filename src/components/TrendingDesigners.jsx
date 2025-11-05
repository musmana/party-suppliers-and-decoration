import { FaStar } from "react-icons/fa";
import designer1 from "/designer1.png";
import designer2 from "/designer2.png";
import designer3 from "/designer3.png";
import designer4 from "/designer4.png";

export default function TrendingDesigners() {
  const designers = [
    {
      name: "RTY Designers",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: designer1,
    },
    {
      name: "WER Designers",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: designer2,
    },
    {
      name: "SDF Designers",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: designer3,
    },
    {
      name: "ASV Designers",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: designer4,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Trending Designers
        </h2>
        <button className="text-grayText hover:text-darkBlue transition text-sm font-medium">
          View All (22)
        </button>
      </div>

      {/* Designers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {designers.map((designer, index) => (
          <div key={index} className="group">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={designer.image}
                alt={designer.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-lg font-medium">{designer.name}</h3>
              <p className="font-semibold text-black text-lg">{designer.location}</p>

              {/* Rating */}
              <div className="flex items-center mt-1 gap-1 text-gray-700">
                {[...Array(designer.rating)].map((_, i) => (
                  <FaStar key={i} className="text-black text-md" />
                ))}
                <span className="font-semibold text-black text-md ml-1">
                  {designer.rating}
                </span>
                <span className="text-gray-400 font-medium text-md ml-1">
                  ({designer.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <button className="w-8 h-8 border border-gray-300 rounded-md flex justify-center items-center hover:bg-gray-100">
          «
        </button>
        <button className="w-8 h-8 border border-gray-300 rounded-md bg-black text-white">
          1
        </button>
        <button className="w-8 h-8 border border-gray-300 rounded-md hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 border border-gray-300 rounded-md hover:bg-gray-100">
          3
        </button>
        <button className="w-8 h-8 border border-gray-300 rounded-md flex justify-center items-center hover:bg-gray-100">
          »
        </button>
      </div>
    </section>
  );
}
