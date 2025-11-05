import { NavLink } from "react-router-dom";
import logo from "/logo.png";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Venue", path: "/venue" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Media", path: "/media" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-end px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-35 h-20 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-base font-medium text-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:w-full after:h-[2px] after:bg-black"
                    : "hover:text-grayText"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="md:hidden text-black text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className="hidden flex-col items-start space-y-4 px-6 pb-4 md:hidden text-black text-base font-medium"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end
            className={({ isActive }) =>
              `block w-full transition-all duration-300 ${
                isActive
                  ? "font-semibold border-b-2 border-black pb-1"
                  : "hover:text-grayText"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
