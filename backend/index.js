const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const UserTable = require("./config/db");
UserTable();

const PORT = process.env.PORT || 3000;
const allowedOrigins = (process.env.FRONTEND_URLS || "http://localhost:5173,http://localhost:3000,https://job-portal-flax-two.vercel.app,https://jobportal-beige-kappa.vercel.app").split(",");

console.log("PORT===>", PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Backend is running" });
});

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