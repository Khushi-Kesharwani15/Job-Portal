import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function JobDetails() {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}job/job-detail/${id}`);

        setJob(response.data?.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Unable to load job details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getJobDetails();
    }
  }, [BASE_URL, id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary mb-3" />
        <h5>Loading job details...</h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container py-5 text-center">
        <h4>Job not found.</h4>
      </div>
    );
  }

  const onApply = () => {
    console.log("Logged in user:", user);
    console.log("User role:", user?.role);

    if (user?.role === "user") {
      navigate(`/apply-job/${id}`);
    } else {
      console.log("No, you cannot apply");
    }
  };

  return (
    <div className="container py-5">
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body p-4 p-lg-5">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
            <div>
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
                {job.category || "Job"}
              </span>

              <h1 className="fw-bold mb-3">{job.title || "Untitled Job"}</h1>

              <div className="text-muted d-flex flex-wrap gap-3">
                <span>🏢 {job.companyName || "Company"}</span>
                <span>📍 {job.location || "Location"}</span>
              </div>
            </div>

            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              {job.jobType || "Full Time"}
            </span>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Job Information</h4>

              <div className="row g-4">
                <div className="col-md-6">
                  <small className="text-muted">Job Type</small>
                  <h6 className="fw-semibold mt-1">
                    💼 {job.jobType || "Not specified"}
                  </h6>
                </div>

                <div className="col-md-6">
                  <small className="text-muted">Location</small>
                  <h6 className="fw-semibold mt-1">
                    📍 {job.location || "Not specified"}
                  </h6>
                </div>

                <div className="col-md-6">
                  <small className="text-muted">Category</small>
                  <h6 className="fw-semibold mt-1">
                    📂 {job.category || "Not specified"}
                  </h6>
                </div>

                <div className="col-md-6">
                  <small className="text-muted">Company</small>
                  <h6 className="fw-semibold mt-1">
                    🏢 {job.companyName || "Not specified"}
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">Salary</h4>

              <h3 className="fw-bold text-success mb-0">
                ₹{job.salaryMin ?? 0} - ₹{job.salaryMax ?? 0}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div
            className="card border-0 shadow-sm rounded-4 sticky-top"
            style={{ top: "20px" }}
          >
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">Job Summary</h5>

              <div className="mb-3">
                <small className="text-muted">Job Type</small>
                <div className="fw-semibold">
                  {job.jobType || "Not specified"}
                </div>
              </div>

              <div className="mb-3">
                <small className="text-muted">Location</small>
                <div className="fw-semibold">
                  {job.location || "Not specified"}
                </div>
              </div>

              <div className="mb-3">
                <small className="text-muted">Salary</small>
                <div className="fw-bold text-success">
                  ₹{job.salaryMin ?? 0} - ₹{job.salaryMax ?? 0}
                </div>
              </div>

              <div className="mb-4">
                <small className="text-muted">Status</small>

                <div className="mt-1">
                  <span
                    className={`badge ${
                      job.isSuspend
                        ? "bg-danger-subtle text-danger"
                        : "bg-success-subtle text-success"
                    }`}
                  >
                    {job.isSuspend ? "Suspended" : "Active"}
                  </span>
                </div>
              </div>

              <button
                className="btn btn-primary w-100 rounded-3 py-2 fw-semibold"
                onClick={onApply}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
