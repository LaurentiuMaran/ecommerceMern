const User = require('../schemas/userSchema');

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (user.role !== 'admin') {
      return res
        .status(403)
        .json({ message: 'This route is restricted to administrators' });
    }

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to authenticate as an administrator' });
  }
};

module.exports = isAdmin;
