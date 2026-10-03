const User = require("../model/userModel");

const createNewUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
  findUserByEmail,
};
