import { FaStar } from "react-icons/fa";
import photographer1 from "/photographer1.png";
import photographer2 from "/photographer2.png";
import photographer3 from "/photographer3.png";
import photographer4 from "/photographer4.png";

export default function PopularPhotographers() {
  const photographers = [
    {
      name: "UIO Viedos",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: photographer1,
    },
    {
      name: "QWE Viedos",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: photographer2,
    },
    {
      name: "XYZ Viedos",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: photographer3,
    },
    {
      name: "ABC Viedos",
      location: "Chennai",
      rating: 5,
      reviews: 22,
      image: photographer4,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Popular Photographers / Videographers
        </h2>
        <button className="text-grayText hover:text-darkBlue transition text-sm font-medium">
          View All (22)
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {photographers.map((photo, index) => (
          <div key={index} className="group">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={photo.image}
                alt={photo.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-lg font-medium">{photo.name}</h3>
              <p className="font-semibold text-black text-lg">{photo.location}</p>

              {/* Rating */}
              <div className="flex items-center mt-1 gap-1 text-gray-700">
                {[...Array(photo.rating)].map((_, i) => (
                  <FaStar key={i} className="text-black text-md" />
                ))}
                <span className="font-semibold text-black text-md ml-1">
                  {photo.rating}
                </span>
                <span className="text-gray-400 font-medium text-md ml-1">
                  ({photo.reviews})
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
