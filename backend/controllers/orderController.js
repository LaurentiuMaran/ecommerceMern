const Order = require('../schemas/orderSchema');
const Product = require('../schemas/productSchema');

// Create new order
exports.newOrder = async (req, res, next) => {
  try {
    const { user, address, orderItems, totalPrice } = req.body;
    if (
      !user ||
      !address ||
      !Array.isArray(orderItems) ||
      orderItems.length === 0 ||
      !totalPrice
    ) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input data',
      });
    }

    const newOrder = new Order({
      user,
      address,
      orderItems,
      totalPrice,
    });

    await Promise.all(
      newOrder.orderItems.map(async (item) => {
        await updateProductStock(item.product, item.quantity);
      })
    );

    await newOrder.save();

    res.status(201).json({
      success: true,
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while creating the order',
    });
  }
};

// Get single order
exports.getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while retrieving the order',
    });
  }
};

// Get logged in user orders
exports.myOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while retrieving the orders',
    });
  }
};

// Get all orders - ADMIN
exports.allOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    if (Array.isArray(orders)) {
      let totalAmount = 0;
      orders.forEach((order) => {
        totalAmount += order.totalPrice;
      });
      res.set('Content-Range', orders.length);
      res.status(200).json({
        success: true,
        totalAmount,
        data: orders,
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Data is not an array',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while retrieving the orders',
    });
  }
};

// Update order - ADMIN
exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    if (req.body.status) {
      order.status = req.body.status;
    }

    await Promise.all(
      order.orderItems.map(async (item) => {
        await updateProductStock(item.product, item.quantity);
      })
    );

    await order.save();

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while updating the order',
    });
  }
};

// Delete order - ADMIN
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    await Order.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while deleting the order',
    });
  }
};

// Helper function to update product stock
const updateProductStock = async (productId, quantity) => {
  try {
    const product = await Product.findById(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    product.stock -= quantity;
    await product.save();
  } catch (error) {
    throw new Error('Failed to update product stock');
  }
};
