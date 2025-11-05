import { Link } from "react-router-dom";
import loginImg from "/wedding-login.png"; // Replace with your actual image path

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Black & White Image */}
      <div
        className="relative md:w-1/2 w-full h-[300px] md:h-auto bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url(${loginImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            We bring <br /> dream weddings <br /> to life!
          </h1>
          <p className="text-white text-lg md:text-xl mt-2">
            Where Tranquility Meets Transformation.
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex justify-center items-center md:w-1/2 w-full bg-grayText text-white px-8 py-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-2">Login</h2>
          <p className="text-sm text-gray-200 mb-8">
            Welcome back, we are glad you’re feeling beautiful today.
            <br />
            Login to continue
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="text-sm text-gray-200">
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 hover:bg-gray-200 transition-all"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
