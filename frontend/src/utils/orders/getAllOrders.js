import axios from 'axios';
import { setupAxios } from '../axiosSetup';

export const getAllOrders = async () => {
  try {
    setupAxios();
    const response = await axios.get(`/orders`);
    return response.data;
  } catch (error) {
    console.error('Error during fetching all orders:', error);
    throw error;
  }
};
