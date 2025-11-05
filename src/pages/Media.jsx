import weddingHero from "/wedding-hero.png";
import LatestMedia from "../components/LatestMedia";
import dream4 from "/dream4.png";

export default function Media() {
  return (
   <>
     <section className="relative w-full h-[90vh] md:h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={weddingHero}
        alt="Wedding couple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-right text-white max-w-6xl w-full px-5 md:px-12">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
          We bring <br />
          <span className="text-white">dream weddings</span> <br />
          to life!
        </h1>
      </div>
    </section>

    <LatestMedia />

     <section className="max-w-6xl mx-auto my-16 px-5">
      <div className="flex flex-col md:flex-row items-center border border-gray-300 bg-gray-50 p-6 md:p-8 rounded-md shadow-sm">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={dream4}
            alt="Balloon Decoration"
            className="rounded-md object-cover w-full h-[340px]"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/2 w-full md:pl-10 mt-6 md:mt-0 flex flex-col justify-between text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">
              Your Dreams, Our <span className="font-extrabold">Dreams...</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We love to hear from our precious users. For any feedback or
              queries simply write in to....
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <button className="bg-grayText hover:bg-gray-600 text-white px-10 py-3 float-right font-semibold transition-all duration-300">
              View
            </button>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}
