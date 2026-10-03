const { errorResponse, successResponse } = require("../helpers/responseHelper");
const bcrypt = require("bcrypt");
const { findUserByEmail, createNewUser } = require("../services/userServices");
const {
  createCompany,
  findCompanyByUserId,
} = require("../services/companyServices");
const { generateToken } = require("../utils/jwt"); // token
const registerUser = async (req, res) => {
  try {
    const { name, email, password, dob, gender, companyName,  location, role } =
      req.body;

    // Validate required fields
    if (!email) {
      return errorResponse(res, "Email is required", "EMAIL_REQUIRED");
    }

    if (!password) {
      return errorResponse(res, "Password is required", "PASSWORD_REQUIRED");
    }

    if (!role) {
      return errorResponse(res, "Role is required", "ROLE_REQUIRED");
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return errorResponse(res, "User already exists", "USER_EXISTS");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let body = null;

    if (role === "company") {
      body = {
        name,
        email,
        password: hashedPassword,
        dob,
        gender,
        role,
      };
    } else if (role === "user") {
      body = {
        name,
        email,
        password: hashedPassword,
        dob,
        gender,
        role,
      };
    } else {
      return errorResponse(res, "Invalid role", "INVALID_ROLE");
    }

   // Create new user
const result = await createNewUser(body);

// Generate Token
const token = generateToken(result);

if (role === "company") {
  const company = {
    companyName: companyName,
    location,
    userId: result._id,
  };

  await createCompany(company);
}

return successResponse(
  res,
  "Registered successfully",
  {
    _id: result._id,
    name: result.name,
    email: result.email,
    dob: result.dob,
    gender: result.gender,
    role: result.role,
    token: token,
  },
  201,
);
  } catch (error) {
    return errorResponse(res, error.message, "SERVER_ERROR", 500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return errorResponse(res, "Email is required", "EMAIL_REQUIRED");
    }

    if (!password) {
      return errorResponse(res, "Password is required", "PASSWORD_REQUIRED");
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return errorResponse(
        res,
        "Invalid email or password",
        "INVALID_CREDENTIALS",
      );
    }

    // Password Match
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return errorResponse(
        res,
        "Invalid email or password",
        "INVALID_CREDENTIALS",
      );
    }

    // JWT Token Generate
    const token = generateToken(user);

    // Console me token show hoga
    console.log("LOGIN TOKEN:", token);

    // Role
    let loginType;
    let company = null;

    if (user.role === "admin") {
      loginType = "admin";
    } else if (user.role === "company") {
      loginType = "company";

      company = await findCompanyByUserId(user._id);
    } else {
      loginType = "user";
    }

    return successResponse(
      res,
      "Login successfully",
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        dob: user.dob,
        gender: user.gender,
        role: user.role,
        companyName: company ? company.companyName : null,
        location: company ? company.location : null,

        type: loginType,

        // Added token
        token: token,
      },
      200,
    );
  } catch (error) {
    return errorResponse(res, error.message, "SERVER_ERROR", 500);
  }
};
module.exports = {
  registerUser,
  loginUser,
};
