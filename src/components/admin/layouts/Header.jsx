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
    <>
      <nav className="navbar navbar-expand-lg bg-light p-4"style={{height:"12vh"}} >
        <div className="container-fluid">
          <h4 className="mt-3 mx-4 text-primary-emphasis">
            {user?.name}
          </h4>

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
    </>
  );
}

export default Header;