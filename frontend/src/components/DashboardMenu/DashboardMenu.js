import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
  return (
    <div className="w-64 bg-navbar text-white p-5 min-h-screen">
      <h1 className="text-3xl font-bold mb-3 mt-20">Menu</h1>
      <Link to="/admin" className="admin-menu-item block mb-2">
        Dashboard
      </Link>
      <Link to="/admin/create-product" className="admin-menu-item block mb-2">
        Create Product
      </Link>
      <Link to="/admin/update-product" className="admin-menu-item block mb-2">
        Update Product
      </Link>
      <Link to="/admin/delete-product" className="admin-menu-item block mb-2">
        Delete Product
      </Link>
    </div>
  );
};

export default DashboardMenu;
