import React from "react";
import { BsBriefcaseFill, BsListCheck } from "react-icons/bs";
import { FaHome, FaListUl, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-light text-dark p-3 vh-100" style={{ width: "260px" }}>
      <NavLink
        className="navbar-brand fw-bold fs-4 text-primary d-flex align-items-center mt-2 mx-1"
        to="/"
      >
       Company Portal
      </NavLink>

      <ul className="nav flex-column my-4">
        <li className="nav-item mt-4 mb-2">
          <NavLink
            to="/company/dashboard"
            className="nav-link bg-primary-subtle rounded-3 text-dark"
          >
            <FaHome className="fs-5 me-2 mb-1" />
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/company/job-list" className="nav-link text-dark">
            <FaListUl className="fs-5 me-2 mb-1" />
            Job List
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/company/profile" className="nav-link text-dark">
            <FaUser className="fs-6 me-2 mb-1" />
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
