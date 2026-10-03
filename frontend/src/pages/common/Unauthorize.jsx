import React from "react";
import { Link } from "react-router-dom";

function Unauthorize() {
  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="text-center">
        <div className="card shadow-lg border-0 p-5">
          <div className="card-body">
            <h1 className="display-1 fw-bold text-danger">403</h1>

            <h2 className="mb-3">Unauthorized Access</h2>

            <p className="text-muted mb-4">
              Access restricted.
              <br />
              Your current role does not allow you to view this page.
              <br />
              If you believe this is incorrect, please contact your
              administrator.
            </p>
            <Link to="/" className="btn btn-primary px-4">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unauthorize;
