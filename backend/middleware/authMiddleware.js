
const jwt = require("jsonwebtoken");
const {
  errorResponse,
} = require("../helpers/responseHelper");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("AUTH HEADER:", authHeader);

    if (!authHeader) {
      return errorResponse(
        res,
        "Token required",
        "TOKEN_REQUIRED"
      );
    }

    // Check Bearer token format
    const parts = authHeader.split(" ");

    if (
      parts.length !== 2 ||
      parts[0] !== "Bearer" ||
      !parts[1]
    ) {
      return res.status(401).json({
        message: "Invalid authorization format",
      });
    }

    const token = parts[1];

    console.log("TOKEN:", token);

    // JWT verify
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED USER:", decoded);

    // Save user information in request
    req.userId = decoded.id;
    req.role = decoded.role;

    console.log("REQ USER ID:", req.userId);
    console.log("REQ ROLE:", req.role);

    next();
  } catch (error) {

    console.log("JWT ERROR:", error.message);
    console.log("JWT ERROR NAME:", error.name);


    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = authMiddleware;

