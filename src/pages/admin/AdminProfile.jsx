import React from "react";
import { useState, useEffect } from "react";

function AdminProfile() {
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("job_portal"));
    setAdmin(data);
  }, []);

  return (
    <div className="container">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary-subtle">
          <h5 className="text-primary-emphasis">Admin Dashboard</h5>
        </div>

        <div className="card-body bg-light-subtle">
          {admin ? (
            <>
              <h5 className="text-success-emphasis">Welcome, {admin.name}</h5>

              <p className="text-body-emphasis">ID : {admin.id || admin._id}</p>

              <p className="text-body-emphasis">Role : {admin.role}</p>

              <p className="text-body-emphasis">Email : {admin.email}</p>

              <p className="text-body-emphasis">Gender : {admin.gender}</p>

              <p className="text-body-emphasis">
                DOB:{" "}
                {admin.dob
                  ? new Date(admin.dob).toLocaleDateString("en-GB")
                  : "N/A"}
              </p>
            </>
          ) : (
            <p className="text-danger-emphasis">No admin data found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
