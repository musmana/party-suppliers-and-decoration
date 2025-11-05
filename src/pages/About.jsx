import aboutBg from "/about-bg.png";
import aboutImg from "/aboutus.png";
import dream5 from "/dream5.png";
import offerImg from "/whatweoffer.png";
import whoImg from "/whoweare.png";
const stats = [
    { number: "10,000", label: "Wedding Vendors" },
    { number: "20,000", label: "Annual Weddings" },
    { number: "1,000", label: "Wedding Venues" },
    { number: "1.5 M", label: "Monthly Followers" },
  ];

export default function About() {
  return (
   <>
     <section className="relative w-full h-[90vh] md:h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={aboutBg}
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="relative z-10 text-right text-white max-w-6xl w-full px-5 md:px-12">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
          We bring <br />
          <span className="text-white">dream weddings</span> <br />
          to life!
        </h1>
      </div>
    </section>

 <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src={aboutImg}
            alt="About Us Wedding Decor"
            className="w-full h-auto shadow-md object-cover"
          />
        </div>
      </div>
    </section>

    <section className="bg-[#F4F4F4] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-black mb-2">
              {item.number}
            </h3>
            <p className="text-lg text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={offerImg}
            alt="What We Offer"
            className="w-full h-auto shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer?</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>

 <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are?</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={whoImg}
            alt="Who We Are"
            className="w-full h-auto shadow-md object-cover"
          />
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto my-16 px-5">
      <div className="flex flex-col md:flex-row items-center border border-gray-300 bg-gray-50 p-6 md:p-8 rounded-md shadow-sm">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={dream5}
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