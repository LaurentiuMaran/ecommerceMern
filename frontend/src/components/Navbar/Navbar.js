import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getUserById } from '../../utils/auth/getUserById';

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const logoutHandler = () => {
    Cookies.remove('token');
    localStorage.removeItem('userRole');
    window.location.reload();
  };

  useEffect(() => {
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
    <nav className="bg-navbar text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <p>BazaarBasket</p>
          </div>
          <div className="ml-8">
            <Link to="/" className="mx-3">
              Home
            </Link>
            <Link to="/products" className="mx-3">
              Products
            </Link>
            <Link to="/contact" className="mx-3">
              Contact
            </Link>
            <Link to="/profile" className="mx-3">
              Profile
            </Link>
            {isAdmin && (
              <Link to="/admin" className="mx-3">
                Admin
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="mr-3">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
          <button className="ml-3" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
