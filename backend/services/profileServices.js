const User = require("../model/userModel");

const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  return user;
};

module.exports = {
  getProfile,
};