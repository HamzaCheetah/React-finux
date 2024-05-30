// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const getInitialTheme = () => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       return storedTheme;
//     } else {
//       return window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }
//   };

//   const [theme, setTheme] = useState(getInitialTheme);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else if (theme === "light") {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       localStorage.removeItem("theme");
//       if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     if (theme === "dark") {
//       setTheme("light");
//     } else {
//       setTheme("dark");
//     }
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`flex w-full ${scrolled ? "bg-green-500" : ""}`}>
//         <div>
//           <nav>
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl text-yellow-500">
//                 <Link to="/">finux</Link>
//               </h2>

//               <ul className="flex gap-7 md:gap-10 md:flex">
//                 <li className="py-3 ps-10 relative group dark:text-white ">
//                   <a href="#">finlab</a>
//                   <svg className="h-4 w-4 ml-1 mt-1 fill-current text-gray-600 inline-block">
//                     <path d="M 5 5 L 0 0 L 10 0 L 5 5 Z"></path>
//                   </svg>
//                   <ul className="absolute px-3 hidden bg-white shadow-md z-10 group-hover:block text-sm dark:text-black">
//                     <li>
//                       <a href="#">Wallet</a>
//                     </li>
//                     <li>
//                       <a href="#">stock dashboard</a>
//                     </li>
//                     <li>
//                       <a href="#">crypto dashboard</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="py-3 ">
//                   <Link to="/finuxwhitepaper" className="dark:text-white">
//                     FinuxWhitepaper
//                   </Link>
//                 </li>
//                 <li className="py-3 dark:text-white">
//                   <a
//                     href="/Components/Finux.A - white paper support.xlsx"
//                     download
//                   >
//                     Finux Whitepaper support
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <div className="py-3 ml-auto flex items-center gap-4 me-3">
//           <button
//             className="js-theme-toggle hover:text-yellow-500 transition-colors duration-300"
//             onClick={toggleTheme}
//           >
//             <FontAwesomeIcon
//               className="h-10 w-10"
//               icon={theme === "dark" ? faMoon : faSun}
//             />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);
  // const [setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // const handleScroll = () => {
  //   setScrolled(window.scrollY > 0);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div
    // className={`flex w-full ${
    //   scrolled ? "bg-gray-500" : "dark:!bg-gray-300"
    // }`}
    >
      <nav className="flex items-center justify-between py-4 px-6 w-full">
        <div className="flex items-center">
          <h2 className="text-2xl text-yellow-500">
            <Link to="/">finux</Link>
          </h2>
          <button
            className="navbar-toggler items-center justify-center text-gray-500 focus:outline-none md:hidden ml-4"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon">&#9776;</span>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
        >
          <ul className="navbar-nav flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
            <li className="relative group">
              <button
                className="nav-link text-gray-700 dark:text-white focus:outline-none ps-5 pt-3"
                onClick={toggleDropdown}
              >
                finulab
                <svg className="h-4 w-4 ml-1 fill-current text-gray-600 inline-block">
                  <path d="M5 5L0 0h10L5 5z" />
                </svg>
              </button>
              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute mt-1 bg-white shadow-md rounded-md dark:bg-gray-700 z-10`}
              >
                <li className="px-4 py-2 text-gray-700 ">
                  <a href="#">Wallet</a>
                </li>
                <li className="px-4 py-2 text-gray-700 ">
                  <a href="#">stock dashboard</a>
                </li>
                <li className="px-4 py-2 text-gray-700 ">
                  <a href="#">crypto dashboard</a>
                </li>
              </ul>
            </li>
            <li className="py-3">
              <Link
                to="/finuxwhitepaper"
                className="text-gray-700 dark:text-white"
              >
                FinuxWhitepaper
              </Link>
            </li>
            <li className="py-3">
              <a
                href="/Components/Finux.A - white paper support.xlsx"
                download
                className="text-gray-700 dark:text-white"
              >
                Finux Whitepaper support
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button
            className="js-theme-toggle text-yellow-500 transition-colors duration-300"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              className="h-6 w-6"
              icon={theme === "dark" ? faSun : faMoon}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
