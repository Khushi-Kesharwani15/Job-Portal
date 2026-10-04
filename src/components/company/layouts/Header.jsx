import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Header() {
  const navigate = useNavigate();

  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light p-4">
      <div className="container-fluid justify-content-between">

        <div>
          <h5 className="mb-0  fs-3">
            {user?.name}
          </h5>
        </div>

        <div className="d-flex align-items-center gap-3">
          <FaUserCircle size={30} className="text-secondary" />

          <button 
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Header;