import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
  return (
    <div className="w-full md:w-64 bg-navbar text-white p-4 md:p-5 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 mt-8 md:mt-20">
        Menu
      </h1>
      <Link
        to="/admin"
        className="admin-menu-item block mb-2 text-sm md:text-base"
      >
        Dashboard
      </Link>
      <Link
        to="/admin/create-product"
        className="admin-menu-item block mb-2 text-sm md:text-base"
      >
        Create Product
      </Link>
      <Link
        to="/admin/update-product"
        className="admin-menu-item block mb-2 text-sm md:text-base"
      >
        Update Product
      </Link>
      <Link
        to="/admin/delete-product"
        className="admin-menu-item block mb-2 text-sm md:text-base"
      >
        Delete Product
      </Link>
    </div>
  );
};

export default DashboardMenu;
