import React, { useContext } from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
    const handleDashboard = () => {
      if (user.role === "user") {
        navigate("/user/dashboard");
      } else if (user.role === "company") {
        navigate("/company/dashboard");
      } else if (user.role === "admin") {
        navigate("/admin/dashboard");
      }
    };
 
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-3 text-primary" to="#">
          <BsBriefcaseFill className="mx-3 mb-2" />
          Job Portal
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link active fw-semibold" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex gap-2">
          <input
            className="form-control rounded-pill"
            type="search"
            placeholder="Search Jobs..."
          />
          <button
            className="btn btn-outline-primary rounded-pill px-4"
            type="button"
          >
            Search
          </button>

          {user ? (
            <>
              {" "}
              <button
                className="btn btn-success rounded-pill px-4 shadow-sm"
                type="button"
                onClick={handleDashboard}
              >
                Dashboard
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <button
                className="btn btn-primary rounded-pill px-4 shadow-sm"
                type="button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="btn btn-success rounded-pill px-4 shadow-sm"
                type="button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
