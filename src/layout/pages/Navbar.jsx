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
      <div className="flex items-center space-x-6">
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
        <button className="bg-orange-500 py-2 px-4 rounded-3xl text-white hover:bg-orange-600 transition">
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

























// import { CiDark, CiLight } from "react-icons/ci";


// export default function Navbar() {
//   return (
//  <div className="navbar bg-gray-100 justify-between px-20">
//     <div className="font-semibold">YasinDev</div>
//     <div>
//         <ul className="flex">
//             <li className="mx-5">Home</li>
//             <li className="mx-5">projects</li>
//             <li className="mx-5">Blogs</li>
//             <li className="mx-5">About</li>
//             <li className="mx-5">Contact</li>
//         </ul>
//     </div>
//     <div>
//         <ul className="flex">
//             <li className="mr-5">
//                 <div className="bg-orange-500 py-2 px-4 rounded-3xl flex">
//                     <div className="bg-white rounded-full ">
//                     <CiDark className="w-6 h-6"/>
//                     </div>
//                     <CiLight />
//                 </div>
//             </li>
//             <li >
//                 <button className="bg-orange-500 py-2 px-4 rounded-3xl text-white">Hire me</button>
//             </li>
//         </ul>
//     </div>
// </div>
//   )
// }
























// export default function Navbar() {
//   return (
//     <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
        
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <ul>
//         <li className="mx-8">Button</li>
//         <li className="mx-8">Button</li>
//     </ul>
//   </div>
// </div>
//   )
// }
