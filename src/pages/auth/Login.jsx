import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const { user, setUserData } = useContext(AuthContext);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user?.role === "user") {
      navigate("/user/dashboard");
    } else if (user?.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user?.role === "company") {
      navigate("/company/dashboard");
    }
  }, [user]);

  const handleOnChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("email===>", login.email);
    console.log("password===>", login.password);
    console.log("login data===>", login);

    try {
      const response = await axios.post(`${BASE_URL}auth/login`, login);
      //save in locacl storage
      const loggedInData = response.data.data;

      // Complete API response
      console.log("Full API Response ===>", response.data);

      // Login form data
      console.log("Login Form Data ===>", login);

      // User complete data
      console.log("Logged In User Data ===>", loggedInData);

      // User role
      console.log("User Role ===>", loggedInData.role);

      // Token
      console.log("User Token ===>", loggedInData.token);

      // Context me save
      setUserData(loggedInData);

      // Local storage me save
      localStorage.setItem("userData", JSON.stringify(loggedInData));

      localStorage.setItem("token", loggedInData.token);
      toast.success(response.data.message);

      if (response.data.message === "Login successfully") {
        const role = response.data.data.role;

        if (role === "user") {
          navigate("/user/dashboard");
        } else if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "company") {
          navigate("/company/dashboard");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="container-fluid bg-light d-flex justify-content-center align-items-center min-vh-100 ">
      <div
        className="  card  shadow-lg border-0 rounded-4 p-4"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary-emphasis">Let's get started</h2>
          <p>Hire top talent faster with job portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={login.email}
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={login.password}
              onChange={handleOnChange}
            />
          </div>

          <button
            type="submit"
            className="btn bg-primary text-white btn-lg w-100"
          >
            Login
          </button>

          <p className="text-center mt-3 mb-0">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none fw-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
