import { useState } from "react";
import venueslider from "/venueslider.png";
import VenueFilters from "../components/VenueFilters";
import WeddingVenues from "../components/WeddingVenues";
import dream2 from "/dream2.png";

export default function Venue() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const categories = [
    "Decorators",
    "Venue Planners",
    "Choreographers",
    "Makeup Artist",
    "Bar Services",
    "Designers",
    "Celebrant",
    "Honeymoon",
    "Photographer",
    "Videographer",
  ];

  const locations = [
    "Chennai",
    "Mumbai",
    "Madurai",
    "Delhi",
    "Dubai",
    "Kanniyakumari",
    "Tirunelveli",
    "Bangalore",
    "Thiruvananthapuram",
    "Kochi",
  ];

  return (
    <>
    <section
      className="relative h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${venueslider})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-10">
          Our Wedding Venues
        </h1>

        {/* Dropdown Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Category Dropdown */}
          <div className="relative w-64">
            <button
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setLocationOpen(false);
              }}
              className="w-full bg-white text-grayText text-left px-5 py-3 rounded-md flex justify-between items-center shadow"
            >
              {selectedCategory}
              <span className="text-lg">▼</span>
            </button>
            {categoryOpen && (
              <ul className="absolute z-20 bg-white w-full mt-1 max-h-60 overflow-y-auto rounded-md shadow">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCategoryOpen(false);
                    }}
                    className="px-5 py-2 text-black hover:bg-gray-100 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative w-64">
            <button
              onClick={() => {
                setLocationOpen(!locationOpen);
                setCategoryOpen(false);
              }}
              className="w-full bg-white text-grayText text-left px-5 py-3 rounded-md flex justify-between items-center shadow"
            >
              {selectedLocation}
              <span className="text-lg">▼</span>
            </button>
            {locationOpen && (
              <ul className="absolute z-20 bg-white w-full mt-1 max-h-60 overflow-y-auto rounded-md shadow">
                {locations.map((loc, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setLocationOpen(false);
                    }}
                    className="px-5 py-2 text-black hover:bg-gray-100 cursor-pointer"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <button className="bg-grayText hover:bg-darkBlue text-white font-semibold px-8 py-3 rounded-md shadow transition">
            Search
          </button>
        </div>
      </div>
    </section>

    <VenueFilters />

    <WeddingVenues />
   
     <section className="max-w-6xl mx-auto my-16 px-5">
      <div className="flex flex-col md:flex-row items-center border border-gray-300 bg-gray-50 p-6 md:p-8 rounded-md shadow-sm">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={dream2}
            alt="Bride Makeup"
            className="rounded-md object-cover w-full h-[320px]"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-2/2 w-full md:pl-10 mt-6 md:mt-0 flex flex-col justify-between text-center md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Yours Dreams, Our <span className="text-black font-extrabold">Dreams...</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We love to hear from our precious users. For any feedback or
              queries simply write in to
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <button className="bg-grayText hover:bg-gray-600 text-white px-8 py-3 font-semibold transition-all duration-300 float-right">
              View
            </button>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
