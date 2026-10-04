const express = require("express");
const cors = require("cors");
const app = express();
// dotenv = require("dotenv");
require("dotenv").config();

const UserTable = require("./config/db");
connect = UserTable();

const PORT = process.env.PORT || 3000;
console.log("PORT===>", PORT);

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Auth Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Jobs Routes
const jobRoutes = require("./routes/jobRoutes");
app.use("/job", jobRoutes);

//Profile 
const profileRoutes = require("./routes/profileRoutes");
app.use("/api", profileRoutes);

server = app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost/:${PORT}`);
});
