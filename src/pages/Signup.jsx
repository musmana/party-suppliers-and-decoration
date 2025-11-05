import { Link } from "react-router-dom";
import signupImg from "/wedding-signup.png"; 

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Image + Text */}
      <div
        className="relative md:w-1/2 w-full h-[300px] md:h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url(${signupImg})`,
        }}
      >
        {/* Overlay with text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {/* Gradient only on “We bring” */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              We bring
            </span>{" "}
            <br />
            {/* Solid blue for the rest */}
            <span className="text-[#1D4ED8]">dream weddings</span> <br />
            <span className="text-[#1D4ED8]">to life!</span>
          </h1>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="flex justify-center items-center md:w-1/2 w-full bg-[#8f8888] text-white px-8 py-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-2">Sign Up</h2>
          <p className="text-sm text-gray-200 mb-8">
            Welcome to One Event, we hope your stay with us feels as bright as the morning sun.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-900 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}