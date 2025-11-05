import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import venue1 from "/venue1.png";
import venue2 from "/venue2.png";
import venue3 from "/venue3.png";
import venue4 from "/venue4.png";
import venue5 from "/venue5.png";
import venue6 from "/venue6.png";
import venue7 from "/venue7.png";
import venue8 from "/venue8.png";
import venue9 from "/venue9.png";
import venue10 from "/venue10.png";
import venue11 from "/venue11.png";
import venue12 from "/venue12.png";

export default function WeddingVenues() {
  const navigate = useNavigate();

  const venues = [
    {
      name: "ASD Venue , Chennai",
      image: venue1,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "CVY Venue, Chennai",
      image: venue2,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "KLM Venue, Chennai",
      image: venue3,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "EC RESORT, Kanniya Kumari",
      image: venue4,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
     {
      name: "FGT RESORT, Madurai",
      image: venue5,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "LO RESORT, Madurai",
      image: venue6,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "REM RESORT, Mumbai",
      image: venue7,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "VBG RESORT, Mumbai",
      image: venue8,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "MNB RESORT, Dubai",
      image: venue9,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "LOE RESORT, Delhi",
      image: venue10,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "SIM RESORT, Chennai",
      image: venue11,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
    {
      name: "SFF RESORT, Dubai",
      image: venue12,
      rating: 5,
      reviews: 22,
      guests: "Upto 500 Guests",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Wedding Venues</h2>
        <button
          onClick={() => navigate("/venue")}
          className="text-grayText hover:text-darkBlue transition text-sm font-medium"
        >
          View All (22)
        </button>
      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {venues.map((venue, index) => (
          <div key={index} className="group">
            {/* Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-3 right-4 text-white text-sm italic font-semibold">
                Explore
              </div>
            </div>

            {/* Text Section */}
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {venue.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-700 mt-1">
                {[...Array(venue.rating)].map((_, i) => (
                  <FaStar key={i} className="text-black" />
                ))}
                <span className="text-black font-medium text-lg">
                  {venue.rating}
                </span>
                <span className="text-gray-400 font-medium text-lg">
                  ({venue.reviews})
                </span>
              </div>
              <p className="text-gray-700 mt-1 text-lg">{venue.guests}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
