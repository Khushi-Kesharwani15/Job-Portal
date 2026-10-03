import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function CompanyAddJobs() {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    skills: "",
    expire: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    const response = await axios.post(
      `${BASE_URL}job/create-job`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("CREATE JOB RESPONSE ===>", response.data);

    toast.success("Successfully Created");

    navigate("/company/job-list");

  } catch (error) {
    console.log("CREATE JOB ERROR ===>", error.response?.data);

    toast.error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {" "}
        <h4 className="fw-bold text-primary mb-4">Create Job</h4>
        <button
          className="btn bg-dark-subtle text-dark fw-semibold mb-3"
          type="button"
          onClick={() => navigate("/company/job-list")}
        >
          Back
        </button>{" "}
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary-subtle text-primary fw-bold">
          Job Details
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">
                  Job Category
                </label>

                <input
                  type="text"
                  name="category"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">Job Title</label>

                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
          

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">Location</label>

                <input
                  type="text"
                  name="location"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">Job Type</label>

                <select
                  name="jobType"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>

                  <option value="full time">Full Time</option>

                  <option value="part time">Part Time</option>

                  <option value="remote">Remote</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">
                  Expire Date
                </label>

                <input
                  type="date"
                  name="expire"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">
                  Minimum Salary
                </label>

                <input
                  type="number"
                  name="salaryMin"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-semibold text-secondary">
                  Maximum Salary
                </label>

                <input
                  type="number"
                  name="salaryMax"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="fw-semibold text-secondary">Skills</label>

                <input
                  type="text"
                  name="skills"
                  className="form-control"
                  placeholder="React, Node, MongoDB"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success fw-semibold">
              Create Job
            </button>

            <button
              type="button"
              className="btn btn-outline-danger ms-2"
              onClick={() => navigate("/company/job-list")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyAddJobs;
