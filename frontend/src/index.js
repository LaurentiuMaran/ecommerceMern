import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { CartProvider } from './utils/context/cartContext';
import { ToastProvider } from 'react-toast-notifications';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastProvider autoDismiss={true} placement="bottom-right">
    <CartProvider>
      <App />
    </CartProvider>
  </ToastProvider>
);
