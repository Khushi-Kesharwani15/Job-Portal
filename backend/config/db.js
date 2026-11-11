const mongoose = require("mongoose");
require("dotenv").config();

const UserTable = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/jobPortalDB";
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.log("Continuing without MongoDB. Start MongoDB locally or set a valid MONGO_URI in backend/.env.");
  }
};

module.exports = UserTable;