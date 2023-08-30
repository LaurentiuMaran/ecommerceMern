import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getUserById } from '../../utils/auth/getUserById';

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const dropdownRef = useRef(null);

  const logoutHandler = () => {
    Cookies.remove('token');
    localStorage.removeItem('userRole');
    window.location.reload();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsAuthenticated(!!token);
    const storedUserRole = localStorage.getItem('userRole');
    if (storedUserRole === 'admin') {
      setIsAdmin(true);
    } else {
      const fetchUser = async () => {
        const user = await getUserById();

        setIsAdmin(user?.role === 'admin');
        localStorage.setItem('userRole', user?.role);
      };
      fetchUser();
    }
  }, []);

  return (
    <nav className="bg-white border-b border-mainGray text-black px-4 md:px-6 py-2 md:py-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto mb-2 md:mb-0">
          <div className="text-xl md:text-2xl font-bold">
            <p>BazaarBasket</p>
          </div>
          <button className="md:hidden" onClick={toggleHamburger}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={`flex flex-col md:flex-row ${
            isHamburgerOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <Link to="/" className="mx-1 md:mx-3 hover:bg-gray-200 p-2 rounded">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/shop"
                className="mx-1 md:mx-3 hover:bg-gray-200 p-2 rounded"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="mx-1 md:mx-3 hover:bg-gray-200 p-2 rounded"
              >
                About
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="mx-1 md:mx-3 hover:bg-gray-200 p-2 rounded"
                >
                  Admin
                </Link>
              )}
            </>
          ) : (
            <Link
              to="/about"
              className="mx-1 md:mx-3 hover:bg-gray-200 p-2 rounded"
            >
              About
            </Link>
          )}
        </div>
        {isAuthenticated ? (
          <div className="flex items-center">
            <div className="relative w-44 mr-6">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"></i>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1 border rounded-full w-full focus:border-mainGray hover:border-black"
              />
            </div>
            <Link to="/cart" className="mr-6 hover:bg-gray-200 p-2 rounded">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="fas fa-user hover:bg-gray-200 p-2 rounded"
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
              ></button>
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded py-1 z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <button
                    className="block text-left px-4 py-2 w-full text-black hover:bg-gray-200"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Link to="/login" className="mr-6 hover:bg-gray-200 p-2 rounded">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
