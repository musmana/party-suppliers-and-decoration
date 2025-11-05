import { FaStar } from "react-icons/fa";
import choreo1 from "/choreo1.png";
import choreo2 from "/choreo2.png";
import choreo3 from "/choreo3.png";
import choreo4 from "/choreo4.png";

export default function TrendingChoreographers() {
  const choreographers = [
    {
      name: "MNO Dansers",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: choreo1,
    },
    {
      name: "BHY Danser",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: choreo2,
    },
    {
      name: "WDR Danser",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: choreo3,
    },
    {
      name: "PQR Dansers",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: choreo4,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Trending Choreographers
        </h2>
        <button className="text-grayText hover:text-darkBlue transition text-sm font-medium">
          View All (22)
        </button>
      </div>

      {/* Choreographers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {choreographers.map((choreo, index) => (
          <div key={index} className="group">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={choreo.image}
                alt={choreo.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-lg font-medium">{choreo.name}</h3>
              <p className="font-semibold text-black text-lg">{choreo.location}</p>

              {/* Rating */}
              <div className="flex items-center mt-1 gap-1 text-gray-700">
                {[...Array(choreo.rating)].map((_, i) => (
                  <FaStar key={i} className="text-black text-md" />
                ))}
                <span className="font-semibold text-black text-md ml-1">
                  {choreo.rating}
                </span>
                <span className="text-gray-400 font-medium text-md ml-1">
                  ({choreo.reviews})
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
