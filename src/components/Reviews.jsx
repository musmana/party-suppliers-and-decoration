import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import user1 from "/user1.png";


export default function Reviews() {
  const reviews = [
    {
      name: "John",
      image: user1,
      text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    },
    {
      name: "Celin",
      image: user1,
      text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    },
    {
      name: "Kamala",
      image: user1,
      text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    },
  ];

  const [current, setCurrent] = useState(1); // Start from the middle

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-5 py-16 text-center pb-[120px]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-[150px] text-left text-primary">
        Reviews
      </h2>

      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 md:-left-10 z-20 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-darkBlue hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        {/* Center Card */}
        <div className="relative w-full md:w-3/4 flex justify-center items-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out w-full md:w-[80%] px-6 py-10 rounded-2xl ${
                index === current
                  ? "bg-[#F5F5F5] shadow-md z-20 opacity-100 scale-100"
                  : "bg-gray-100 opacity-30 scale-90 z-10"
              }`}
            >
              {/* Profile Image on Top */}
              {index === current && (
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mx-auto -mt-16 mb-4 border-4 border-white shadow-md"
                />
              )}

              {/* Name */}
              <h3
                className={`text-lg font-semibold ${
                  index === current ? "text-black" : "text-gray-400"
                }`}
              >
                {review.name}
              </h3>

              {/* Text */}
              <p
                className={`text-gray-700 mt-2 max-w-2xl mx-auto ${
                  index === current ? "text-black" : "text-gray-400"
                }`}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute -right-6 md:-right-10 z-20 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-darkBlue hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-darkBlue" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
