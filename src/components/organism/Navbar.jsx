import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-videobelajar.svg";

import { useAuth } from "../../context/AuthContext";
import avatar from "../../assets/images/avatar.png";

function Navbar({ isLogin, onLogout, onProfileClick }) {
  const { currentUser, logout } = useAuth();
  console.log("currentUser", currentUser);
  const photo = currentUser?.pp || avatar;

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav>
        <div className="flex justify-between items-center py-5 px-6 md:px-12 sticky top-0 bg-white z-20">
          <Link to="/">
            <img src={logo} alt="logo-videobelajar" />
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-offset-2"
            aria-controls="nav-item"
            aria-expanded={isOpen}
          >
            <span
              className={`block bg-gray-800 h-0.5 w-6 rounded-sm transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
            />
            <span
              className={`block bg-gray-800 h-0.5 w-6 rounded-sm my-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block bg-gray-800 h-0.5 w-6 rounded-sm transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
            />
          </button>

          {isLogin !== null && (
            <div id="nav-item" className="hidden md:flex gap-6 items-center">
              <a href="#" className="text-sm md:text-base">
                Kategori
              </a>

              {(typeof isLogin === "boolean" ? isLogin : !!currentUser) ? (
                <div className="relative inline-block" ref={dropdownRef}>
                  <img
                    className="rounded-lg w-11 cursor-pointer"
                    src={photo}
                    alt="photo-profile"
                    onClick={() => setDropdownOpen((s) => !s)}
                  />

                  <div
                    className={`absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-20 ${dropdownOpen ? "block" : "hidden"}`}
                  >
                    <Link
                      to="/profile"
                      onClick={(e) => {
                        if (onProfileClick) {
                          e.preventDefault();
                          onProfileClick();
                        }
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profil
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof logout === "function") {
                          logout();
                        } else if (onLogout) {
                          onLogout();
                        } else {
                          alert("Logout");
                        }
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="text-sm py-1 px-3 bg-(--color-main-primary) text-white rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm py-1 px-3 border border-(--color-main-primary) rounded-md text-(--color-main-primary)"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 transform transition-transform duration-300">
            <div className="flex items-center justify-between mb-6">
              <img src={logo} alt="logo" className="h-8" />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {isLogin !== null ? (
              <>
                <nav className="flex flex-col gap-4">
                  <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="py-2 px-3 rounded hover:bg-gray-100"
                  >
                    Kategori
                  </a>
                  {isLogin && (
                    <>
                      <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="py-2 px-3 rounded hover:bg-gray-100"
                      >
                        Kursus Saya
                      </a>
                      <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="py-2 px-3 rounded hover:bg-gray-100"
                      >
                        Pesanan Saya
                      </a>
                    </>
                  )}
                </nav>

                <div className="mt-auto pt-6">
                  {(typeof isLogin === "boolean" ? isLogin : !!currentUser) ? (
                    <Link
                      to="#"
                      className="flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src={photo}
                        className="rounded-lg w-11"
                        alt="profile"
                      />
                      <span>Profil</span>
                    </Link>
                  ) : (
                    <div className="flex gap-3">
                      <Link
                        to="/login"
                        className="flex-1 text-center py-2 px-3 border border-indigo-600 rounded-md text-indigo-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex-1 text-center py-2 px-3 bg-indigo-600 text-white rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : null}
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
