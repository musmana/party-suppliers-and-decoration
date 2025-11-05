import { FaWhatsapp } from "react-icons/fa";
import logo from "/logo.png"; 
import { Link } from 'react-router-dom';

export default function LiveChat() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FCFCF7] text-center px-6">
      {/* Header Section */}
      <div className="absolute top-5 left-5 flex items-center space-x-2">
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
          <FaWhatsapp className="text-xl" />
          WhatsApp
        </button>
      </div>

      {/* Navbar */}
      <div className="absolute top-6 flex items-center justify-end w-full space-x-10 text-sm font-semibold text-black">
        <a href="#">Features</a>
        <a href="#">Privacy</a>
        <a href="#">Help Center</a>
        <a href="#">Blog</a>
        <a href="#">For Business</a>
        <a href="#">Apps</a>
        <button className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition">
          Download
        </button>
      </div>

      {/* Main Logo */}
      <div className="mt-32 mb-12">
         <Link
                      to="/">
        <img
          src={logo}
          alt="One Event Logo"
          className="w-80 h-auto"
        />
        </Link>
      </div>

      {/* Continue with Chat Button */}
      <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
        Continue With Chat
      </button>

      {/* Footer Section */}
      <div className="mt-10 text-sm">
        <p className="text-gray-800 font-medium mb-2">
          Don’t have WhatsApp yet?
        </p>
        <a
          href="#"
          className="text-blue-600 hover:underline font-semibold"
        >
          Download
        </a>
      </div>
    </div>
  );
}
