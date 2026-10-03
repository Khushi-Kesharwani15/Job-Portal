import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [type, setType] = useState("user");

  const [user, setUser] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    role: "user",
  });

  const [company, setCompany] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
    role: "company",
    companyName: "",
  });

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCompanyChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data;

      if (type === "user") {
        data = user;
      } else {
        data = company;
      }

      const response = await axios.post(`${BASE_URL}auth/register`, data);

      console.log("Register Response ===>", response.data);

      const registeredData = response.data.data;

      console.log("Registered Data ===>", registeredData);

      toast.success(response.data.message);

      // Save user data
      localStorage.setItem("userData", JSON.stringify(registeredData));

      localStorage.setItem("token", registeredData.token);

      if (response.data.message === "Registered successfully") {
        if (registeredData.role === "company") {
          navigate("/company/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center align-items-center py-5">
      <div
        className="card shadow border-0 rounded-4 p-4"
        style={{ width: "40%" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Register</h2>
        </div>

        <div className="d-flex mb-4">
          <button
            type="button"
            className={`btn w-50 me-3 ${
              type === "user" ? "bg-success-subtle" : "btn-outline-success"
            }`}
            onClick={() => setType("user")}
          >
            User
          </button>

          <button
            type="button"
            className={`btn w-50 ${
              type === "company" ? "bg-success-subtle" : "btn-outline-success"
            }`}
            onClick={() => setType("company")}
          >
            Company
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {type === "user" ? (
            <>
              <input
                className="form-control mb-3"
                placeholder="Enter name"
                name="name"
                value={user.name}
                onChange={handleUserChange}
              />

              <input
                className="form-control mb-3"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleUserChange}
              />

              <input
                type="date"
                className="form-control mb-3"
                name="dob"
                value={user.dob}
                onChange={handleUserChange}
              />

              <select
                className="form-select mb-3"
                name="gender"
                value={user.gender}
                onChange={handleUserChange}
              >
                <option value="">Select Gender</option>

                <option value="Male">Male</option>

                <option value="Female">Female</option>

                <option value="Other">Other</option>
              </select>

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleUserChange}
              />
            </>
          ) : (
            <>
              <input
                className="form-control mb-3"
                placeholder="Personal Name"
                name="name"
                value={company.name}
                onChange={handleCompanyChange}
              />

              <input
                className="form-control mb-3"
                placeholder="Company Name"
                name="companyName"
                value={company.companyName}
                onChange={handleCompanyChange}
              />

              <input
                className="form-control mb-3"
                placeholder="Company Email"
                name="email"
                value={company.email}
                onChange={handleCompanyChange}
              />

              <input
                className="form-control mb-3"
                placeholder="Location"
                name="location"
                value={company.location}
                onChange={handleCompanyChange}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="password"
                value={company.password}
                onChange={handleCompanyChange}
              />
            </>
          )}

          <button className="btn bg-success-subtle w-100" type="submit">
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
