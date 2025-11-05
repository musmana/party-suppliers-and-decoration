import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function VenueFilters() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    guests: "No. of Guests",
    venueType: "Venue Type",
    space: "Space Preference",
    rating: "Rating",
  });

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSelect = (name, value) => {
    setSelectedValues((prev) => ({ ...prev, [name]: value }));
    setOpenDropdown(null);
  };

  const guestOptions = [
    "100 and Above",
    "500 and Above",
    "1000 and Above",
    "1500 and Above",
  ];

  const venueOptions = [
    "House of Worship",
    "Parks",
    "Farmhouses",
    "Hotels",
    "Country Club",
    "Clubs",
    "Barns",
    "Restaurants",
  ];

  const spaceOptions = ["Indoor", "Outdoor", "Lawn"];

  const ratingOptions = [5, 4, 3, 2, 1];

  return (
    <section className="w-full flex justify-center items-center py-10">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-6xl px-4">
        {/* Guests Dropdown */}
        <div className="relative w-[220px]">
          <button
            onClick={() => toggleDropdown("guests")}
            className="w-full flex justify-between items-center border border-gray-300 rounded-md px-5 py-3 bg-white text-gray-500 font-medium"
          >
            {selectedValues.guests}
            <span className="text-black">▼</span>
          </button>
          {openDropdown === "guests" && (
            <ul className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-md border border-gray-200">
              {guestOptions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect("guests", item)}
                  className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Venue Type Dropdown */}
        <div className="relative w-[220px]">
          <button
            onClick={() => toggleDropdown("venueType")}
            className="w-full flex justify-between items-center border border-gray-300 rounded-md px-5 py-3 bg-white text-gray-500 font-medium"
          >
            {selectedValues.venueType}
            <span className="text-black">▼</span>
          </button>
          {openDropdown === "venueType" && (
            <ul className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-md border border-gray-200 max-h-60 overflow-y-auto">
              {venueOptions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect("venueType", item)}
                  className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Space Preference Dropdown */}
        <div className="relative w-[220px]">
          <button
            onClick={() => toggleDropdown("space")}
            className="w-full flex justify-between items-center border border-gray-300 rounded-md px-5 py-3 bg-white text-gray-500 font-medium"
          >
            {selectedValues.space}
            <span className="text-black">▼</span>
          </button>
          {openDropdown === "space" && (
            <ul className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-md border border-gray-200">
              {spaceOptions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect("space", item)}
                  className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Rating Dropdown */}
        <div className="relative w-[220px]">
          <button
            onClick={() => toggleDropdown("rating")}
            className="w-full flex justify-between items-center border border-gray-300 rounded-md px-5 py-3 bg-white text-gray-500 font-medium"
          >
            {selectedValues.rating}
            <span className="text-black">▼</span>
          </button>
          {openDropdown === "rating" && (
            <ul className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-md border border-gray-200">
              {ratingOptions.map((rating, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect("rating", `${rating} ★ Rating`)}
                  className="px-5 py-2 flex items-center gap-1 hover:bg-gray-100 cursor-pointer"
                >
                  <span className="text-green-600">
                    {rating}
                    <FaStar className="inline ml-1" />
                  </span>
                  <span className="text-black">Rating</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Button */}
        <button className="w-[140px] bg-gray-400 hover:bg-gray-600 text-white font-semibold px-5 py-3 rounded-md">
          Search
        </button>
      </div>
    </section>
  );
}
