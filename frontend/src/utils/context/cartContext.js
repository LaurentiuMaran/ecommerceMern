import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const isItemInCart = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (!isItemInCart) {
        return { ...state, items: [...state.items, action.payload] };
      }
      return state;
    case 'REMOVE_ITEM':
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: newItems };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
