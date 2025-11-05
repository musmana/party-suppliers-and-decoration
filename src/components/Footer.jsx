import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-primary pt-10 pb-5 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-full object-contain" />
          </div>


          <div className="text-right">
            <h4 className="text-sm font-semibold mb-2">Social Media</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-darkBlue"><FaFacebookF /></a>
              <a href="#" className="hover:text-darkBlue"><FaTwitter /></a>
              <a href="#" className="hover:text-darkBlue"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-darkBlue"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Venues */}
        <div>
          <h4 className="font-semibold mb-3">Venues</h4>
          <ul className="space-y-2 text-sm">
            <li>Chennai</li>
            <li>Mumbai</li>
            <li>Dubai</li>
            <li>Delhi</li>
            <li>Madurai</li>
            <li>Kanniyakumari</li>
          </ul>
        </div>

        {/* Suppliers */}
        <div>
          <h4 className="font-semibold mb-3">Suppliers</h4>
          <ul className="space-y-2 text-sm">
            <li>Photographers</li>
            <li>Decorators</li>
            <li>Venues Planner</li>
            <li>Choreographers</li>
            <li>Designers</li>
            <li>Makeup Artists</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-darkBlue">About Us</Link></li>
            <li><Link to="/career" className="hover:text-darkBlue">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-darkBlue">Contact Us</Link></li>
            <li><a href="#" className="hover:text-darkBlue">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-darkBlue">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-3">Subscribe To Get Latest Media Updates</p>
          <Link
            to="/livechat"
            className="border border-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-darkBlue hover:text-white transition"
          >
            Live Chat
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 text-grayText text-sm">
        <p>
          Made with love by{" "}
          <a
            href="https://thecreation.design"
            className="text-darkBlue underline hover:text-black"
            target="_blank"
          >
            thecreation.design
          </a>
        </p>
      </div>
    </footer>
  );
}
