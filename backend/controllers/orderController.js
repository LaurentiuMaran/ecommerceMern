const mongoose = require('mongoose');
const Order = require('../schemas/orderSchema');
const Product = require('../schemas/productSchema');

exports.newOrder = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { user, address, orderItems, totalPrice } = req.body;
    if (
      !user ||
      !address ||
      !Array.isArray(orderItems) ||
      orderItems.length === 0 ||
      !totalPrice
    ) {
      return res
        .status(400)
        .json({ success: false, error: 'Invalid input data' });
    }

    const newOrder = new Order({
      user,
      address,
      orderItems,
      totalPrice,
    });

    for (const item of newOrder.orderItems) {
      const product = await Product.findById(item.product);
      if (product) {
        if (product.stock < item.quantity) {
          throw new Error('Not enough items in stock');
        }
        product.stock -= item.quantity;
        await product.save({ session });
      } else {
        throw new Error('Product not found');
      }
    }

    await newOrder.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ success: true, order: newOrder });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      success: false,
      error: 'An error occurred while creating the order',
    });
  }
};

exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while retrieving the order',
    });
  }
};

exports.myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while retrieving the orders',
    });
  }
};

exports.allOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    let totalAmount = 0;
    for (const order of orders) {
      totalAmount += order.totalPrice;
    }
    res.set('Content-Range', orders.length);
    res.status(200).json({ success: true, totalAmount, orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while retrieving the orders',
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: 'Order not found' });
    }

    if (req.body.status) {
      order.status = req.body.status;
    }

    for (const item of order.orderItems) {
      const product = await Product.findById(item.product);
      if (product) {
        product.stock -= item.quantity;
        await product.save();
      } else {
        return res
          .status(404)
          .json({ success: false, error: 'Product not found' });
      }
    }

    await order.save();

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while updating the order',
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: 'Order not found' });
    }

    await Order.deleteOne({ _id: req.params.id });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'An error occurred while deleting the order',
    });
  }
};
