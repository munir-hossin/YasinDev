import { CiDark, CiLight } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false); // State for theme toggle
  const [menuOpen, setMenuOpen] = useState(false); // State for responsive menu

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark"); // Toggles dark mode on body
  };

  return (
    <div className="navbar bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white justify-between px-6 sm:px-10 lg:px-20 py-4">
      {/* Logo */}
      <div className="font-semibold text-lg">YasinDev</div>

      {/* Menu for larger screens */}
      <div className={`hidden lg:flex`}>
        <ul className="flex space-x-8 ">
          <li className="cursor-pointer hover:text-orange-600">Home</li>
          <li className="cursor-pointer hover:text-orange-600">Projects</li>
          <li className="cursor-pointer hover:text-orange-600">Blogs</li>
          <li className="cursor-pointer hover:text-orange-600">About</li>
          <li className="cursor-pointer hover:text-orange-600">Contact</li>
        </ul>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-2 sm:space-x-6">
        {/* Theme Toggle */}
        <div
          className={`w-20 h-[38px] flex items-center rounded-full p-1 py-3 cursor-pointer transition-all duration-300 ${
            darkMode ? "bg-gray-700" : "bg-orange-500"
          }`}
          onClick={handleToggleTheme}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-12" : "translate-x-0"
            }`}
          >
            {darkMode ? <CiLight className="w-6 h-6" /> : <CiDark className="w-6 h-6" />}
          </div>
        </div>

        {/* Hire Me Button */}
        <button className="bg-orange-500 py-2 px-2 sm:px-4 rounded-3xl text-white hover:bg-orange-600 transition">
          Hire me
        </button>

        {/* Three-dot menu for small screens */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineDotsVertical className="w-8 h-8" />
        </div>
      </div>

      {/* Responsive menu for small screens */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-lg p-6 lg:hidden">
          <ul className="space-y-4">
            <li>Home</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}


















