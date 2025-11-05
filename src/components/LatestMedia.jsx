import media1 from "/media1.png";
import media2 from "/media2.png";
import media3 from "/media3.png";
import media4 from "/media4.png";
import media5 from "/media5.png";
import media6 from "/media6.png";
import media7 from "/media7.png";
import media8 from "/media8.png";
import media9 from "/media9.png";


export default function LatestMedia() {
  const mediaItems = [
    {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media1,
    },
    {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media2,
    },
    {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media3,
    },
     {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media4,
    },
     {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media5,
    },
     {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media6,
    },
     {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media7,
    },
     {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media8,
    },
     {
      title: "Outdoor Venue",
      description: "Latest updates for new venue, also",
      image: media9,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Latest Media</h2>
        <button className="text-gray-800 font-medium hover:text-gray-500 transition">
          View All (100)
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md bg-gray-200 hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-[280px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-gray-200 text-left">
              <h3 className="text-xl font-semibold mb-2 text-black">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-snug">
                {item.description}
              </p>
              <p className="font-semibold italic text-black text-right">
                Read More
              </p>
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
