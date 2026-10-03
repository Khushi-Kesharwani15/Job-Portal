import React from "react";
import { BsBagCheckFill, BsBriefcaseFill, BsCompassFill } from "react-icons/bs";
import { FaHome, FaUser, FaUserShield } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Sidebar() {

  return (
    <div className="bg-light text-dark p-3 vh-100" style={{ width: "260px" }}>
      <NavLink
        className="navbar-brand fw-bold fs-3 text-primary d-flex align-items-center mb-4 mx-2"
        to="/"
      >
        Admin Portal
      </NavLink>
      <ul className="nav flex-column my-4 ">
        <li className=" nav-item mt-4 mb-2">
          <NavLink
            to="/admin/dashboard"
            className="nav-link  bg-primary-subtle rounded-3 text-dark "
          >
            <FaHome className="fs-5 me-2 mb-1" /> Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/admin/company-list" className="nav-link text-dark">
            <BsCompassFill className="fs-5 me-2 mb-1" /> Company List
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/admin/user-list" className="nav-link text-dark">
            <FaUserShield className="fs-5 me-2 mb-1" /> User List
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/admin/job-list" className="nav-link text-dark">
            <BsBagCheckFill className="fs-5 me-2 mb-1" /> Job List
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/admin/profile" className="nav-link text-dark">
            <FaUser className="fs-6 me-2 mb-1" /> Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
