import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
      {isMenuOpen && (
        <div className="bg-white p-4 text-black w-2/3 fixed top-16 left-0 z-50 lg:hidden shadow-lg">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${isActive ? "underline" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/patient-register"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${isActive ? "underline" : ""}`
                }
              >
                Patient Register
              </NavLink>
            </li>
            <li className="group relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Patient Data</span>
                <FaCaretDown />
              </div>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md mt-2">
                <li className="border-b-2">
                  <NavLink
                    to="/patient-data/link1"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/patient-data/link2"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Operation Theater</span>
                <FaCaretDown />
              </div>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md mt-2">
                <li className="border-b-2">
                  <NavLink
                    to="/operation-theater/link3"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 3
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/operation-theater/link4"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 4
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${isActive ? "underline" : ""}`
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      )}

     
      <nav className="bg-white p-4 text-black z-60 shadow-md">
        <div className="flex justify-between items-center">
         
          <ul className="lg:flex space-x-6 hidden">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${isActive ? "underline" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/patient-register"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${isActive ? "underline" : ""}`
                }
              >
                Patient Register
              </NavLink>
            </li>
            <li className="group relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Patient Data</span>
                <FaCaretDown />
              </div>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md mt-2">
                <li className="border-b-2">
                  <NavLink
                    to="/patient-data/link1"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/patient-data/link2"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Operation Theater</span>
                <FaCaretDown />
              </div>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md mt-2">
                <li className="border-b-2">
                  <NavLink
                    to="/operation-theater/link3"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 3
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/operation-theater/link4"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 4
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${isActive ? "underline" : ""}`
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>

          <div className="flex justify-end">
            <img className="w-10" src="/img/Logo.png" alt="Logo" />
          </div>

         
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
