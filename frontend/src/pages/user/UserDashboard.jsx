
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function UserDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h1
            className="text-success btn mb-0"
            onClick={handleHome}
            style={{ cursor: "pointer" }}
          >
            User Dashboard
          </h1>

          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="card-body">
          {user ? (
            <>
              <h3>Welcome, {user.name}</h3>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <p>
                <strong>User ID:</strong> {user._id}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>DOB:</strong> {user.dob}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
            </>
          ) : (
            <p>No user data found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

