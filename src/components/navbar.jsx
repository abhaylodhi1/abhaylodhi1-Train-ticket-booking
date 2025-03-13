import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// ✅ Use absolute paths for public assets
const vanLangLogo = "/assets/text/Van Lang Tour.png";
const signUpButton = "/assets/buttons/sign up.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 bg-opacity-90 text-white p-4 md:p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* ✅ Logo */}
        <img className="w-32 md:w-50" src={vanLangLogo} alt="Van Lang Tour Logo" />

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* ✅ Navigation Menu */}
        <nav
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left p-4 md:p-0">
            <li>
              <Link to="/home" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Booking</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Login</Link>
            </li>
            <li>
              <Link to="/signup" aria-label="Sign Up" onClick={() => setIsOpen(false)}>
                <img className="w-16 md:w-20 cursor-pointer" src={signUpButton} alt="Sign Up Button" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
