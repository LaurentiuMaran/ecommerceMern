import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';
import { AuthWrapper } from './utils/auth/AuthWrapper';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Profile from './pages/Profile/Profile';
import AdminPanel from './pages/AdminPanel/AdminPanel';

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <AuthWrapper>
              <Shop />
            </AuthWrapper>
          }
        />
        <Route
          path="/product/:id"
          element={
            <AuthWrapper>
              <ProductDetail />
            </AuthWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthWrapper>
              <Checkout />
            </AuthWrapper>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <AuthWrapper>
              <Profile />
            </AuthWrapper>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AuthWrapper>
              <AdminPanel />
            </AuthWrapper>
          }
        />
        <Route
          path="*"
          element={
            <AuthWrapper>
              <NotFound />
            </AuthWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
