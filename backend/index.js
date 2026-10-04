const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const UserTable = require("./config/db");
UserTable();

const PORT = process.env.PORT || 3000;

console.log("PORT===>", PORT);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Auth Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Jobs Routes
const jobRoutes = require("./routes/jobRoutes");
app.use("/job", jobRoutes);

// Profile Routes
const profileRoutes = require("./routes/profileRoutes");
app.use("/api", profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});