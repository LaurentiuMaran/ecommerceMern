import axios from 'axios';
import { setupAxios, fetchUserId } from '../axiosSetup';

export const createOrder = async (orderData, orderItems, totalPrice) => {
  try {
    setupAxios();
    const userId = fetchUserId();
    const formattedOrderItems = orderItems.map((item) => ({
      product: item.id,
      quantity: 1,
    }));
    const completeOrderData = {
      user: userId,
      address: { ...orderData },
      orderItems: formattedOrderItems,
      totalPrice,
    };

    const response = await axios.post(`/orders`, completeOrderData);
    return response.data;
  } catch (error) {
    console.error('Error during order creation:', error);
    throw error;
  }
};
