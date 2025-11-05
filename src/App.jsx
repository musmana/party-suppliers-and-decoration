import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Venue from "./pages/Venue.jsx";
import Suppliers from "./pages/Suppliers.jsx";
import Media from "./pages/Media.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import LiveChat from "./pages/LiveChat.jsx";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/livechat";

  // Handle mobile menu toggle
useEffect(() => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  const toggleMenu = () => menu.classList.toggle("hidden");

  btn?.addEventListener("click", toggleMenu);
  return () => btn?.removeEventListener("click", toggleMenu);
}, []);


  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/livechat" element={<LiveChat />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
