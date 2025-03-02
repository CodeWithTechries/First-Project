/*************  ✨ Codeium Command 🌟  *************/
// Designed and developed by:
// - Mukesh Yadav

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaHome, FaUsers, FaBook, FaStore, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarLinks = [
    { path: "/", name: "Home", icon: FaHome },
    { path: "/members", name: "Members", icon: FaUsers },
    { path: "/resources", name: "Resources", icon: FaBook },
    { path: "/projects", name: "Projects", icon: FaProjectDiagram },
    { path: "/store", name: "Store", icon: FaStore },
    { path: "/about", name: "About Us", icon: FaInfoCircle },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-950 px-4 py-3 w-full sticky border-b border-gray-300 dark:border-gray-900 top-0 z-[999] rounded-b-3xl sm:rounded-b-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between">


          {/* Center - visible on all screens */}
          <NavLink to="/" title="Code With Techries" className="flex items-center space-x-4">
            <img
              src="./logo/cwtLogo-animatedColor.svg"
              alt="site-logo"
              className="w-8 h-8"
            />
            <p className="font-semibold">CWT</p>
          </NavLink>

          {/* Right side - hidden on mobile */}
          <div className="md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {sidebarLinks.slice(0, 6).map((link, index) => (
                <NavLink
                  key={index} // Add a unique key for each link
                  to={link.path}  // Use the `to` property from the `link` object
                  className={({ isActive }) =>
                    `text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-purple-500 ${isActive ? "text-purple-500 dark:text-purple-500" : ""
                    }`
                  }
                >
                  {link.name} {/* Use the `text` property from the `link` object */}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button - only visible on mobile */}
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-800 dark:text-gray-300 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M2 6h08M4 12h14M4 18h06"
                  />
                </svg>
              </button>

              <ThemeChange />
            </div>
          </div>
        </div>

        {/* Sidebar/Mobile menu - with overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div
          className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } min-w-[276px] max-w-72 bg-white dark:bg-gray-900 overflow-y-auto transition duration-300 ease-in-out md:hidden z-50 rounded-e-3xl`}
        >
          <div className="px-4 divide-y divide-gray-300 dark:divide-gray-800">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between px-2 py-3.5">
              <NavLink to="/" className="flex items-center gap-2">
                <img
                  src="./logo/cwtLogo-animatedColor.svg"
                  alt="site-logo"
                  className="w-8 h-8 mr-2"
                />
                <span className="text-md font-semibold text-gray-800 dark:text-gray-200">
                  CWT
                </span>
              </NavLink>
              {/* Close icon */}
              <BsLayoutSidebar onClick={() => setIsSidebarOpen(false)} className="text-gray-800 dark:text-gray-300 hover:text-purple-500 cursor-pointer" />
            </div>

            {/* Mobile menu links */}
            <div className="flex flex-col py-2 space-y-2">
              {sidebarLinks.slice(0, 6).map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-1.5 px-2 ${isActive ? "text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-md border dark:border-gray-700" : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/******  e44ee2b3-5f5b-4bbf-a30d-1bf7a9389a6b  *******/