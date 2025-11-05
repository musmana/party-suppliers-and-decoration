import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Replace these with your actual image paths
import cat1 from "/cat1.png";
import cat2 from "/cat2.png";
import cat3 from "/cat3.png";
import cat4 from "/cat4.png";
import cat5 from "/cat5.png";
import cat6 from "/cat6.png";
import cat7 from "/cat7.png";


export default function BrowseByCategory() {
  const navigate = useNavigate();

  const categories = [
    { title: "Destination Weddings", image: cat1 },
    { title: "Honeymoon & Travel Wedding", image: cat2 },
    { title: "Videographers Wedding", image: cat3 },
    { title: "Celebrant", image: cat4 },
    { title: "Makeup Artists", image: cat5 },
    { title: "Wedding Venue", image: cat6 },
    { title: "Decorators", image: cat7 },
    { title: "Designers", image: cat1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categories.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Browse By Category</h2>
        <button
          onClick={() => navigate("/suppliers")}
          className="text-grayText hover:text-darkBlue transition text-sm font-medium"
        >
          View All (10)
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
        {currentItems.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer transition"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="mt-4 mb-3 text-center text-lg font-semibold uppercase tracking-tight">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-md disabled:opacity-50 hover:bg-gray-100"
        >
          «
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded-md font-medium transition ${
              currentPage === index + 1
                ? "bg-darkBlue text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-md disabled:opacity-50 hover:bg-gray-100"
        >
          »
        </button>
      </div>
    </section>
  );
}
