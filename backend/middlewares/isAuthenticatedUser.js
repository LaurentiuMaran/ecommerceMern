const jwt = require('jsonwebtoken');
const User = require('../schemas/userSchema');

const isAuthenticatedUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'No user found with this ID' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = isAuthenticatedUser;
