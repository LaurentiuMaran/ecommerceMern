import axios from 'axios';
import { setupAxios, fetchUserId } from '../axiosSetup';

export const createOrder = async (orderData, orderItems, totalPrice) => {
  try {
    setupAxios();
    const userId = fetchUserId();
    const completeOrderData = {
      user: userId,
      address: { ...orderData },
      orderItems,
      totalPrice,
    };

    const response = await axios.post(`/orders`, completeOrderData);
    return response.data;
  } catch (error) {
    console.error('Error during order creation:', error);
    throw error;
  }
};
