import axios from 'axios';
import { setupAxios } from '../axiosSetup';

export const getMyOrders = async () => {
  try {
    setupAxios();
    const response = await axios.get(`/orders/me`);
    return response.data;
  } catch (error) {
    console.error('Error during fetching my orders:', error);
    throw error;
  }
};
