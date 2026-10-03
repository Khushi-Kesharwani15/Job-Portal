const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { createNewUser, findUserByEmail } = require("../services/userServices");

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected in Seeder");

    const existingAdmin = await findUserByEmail("admin@gmail.com");

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }
    const hashedPassword = await bcrypt.hash("admin@123", 10);

    const admin = await createNewUser({
      name: "Admin",
      companyName: "JamTech",
      email: "admin@gmail.com",
      password: hashedPassword,
      dob: new Date("1995-08-15"),
      gender: "female",
      role: "admin",
    });

    console.log("Admin Created", admin);

    process.exit();
  } catch (error) {
    console.log("Seeder Error:", error);
    process.exit(1);
  }
};

seedData();
