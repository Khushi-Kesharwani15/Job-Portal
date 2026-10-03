import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CompanyUpdateList() {
  const navigate = useNavigate();
  const { id } = useParams();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [update, setUpdate] = useState({
    category: "",
    title: "",
    companyName: "",
    companyId: "",
    location: "",
    jobType: "",
    expire: "",
    salaryMin: "",
    salaryMax: "",
    skills: "",
  });

  // GET SINGLE JOB
  const getSingleJob = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const response = await axios.get(`${BASE_URL}job/single-job/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("FULL RESPONSE:", response.data);
      const jobData = response.data?.message?.data || response.data?.data;

      console.log("JOB DATA:", jobData);

      if (!jobData) {
        toast.error("Job data not found");
        return;
      }

      setUpdate({
        category: jobData.category || "",
        title: jobData.title || "",
        companyName: jobData.companyName || "",
        companyId: jobData.companyId || "",
        location: jobData.location || "",
        jobType: jobData.jobType || "",
        expire: jobData.expire || "",
        salaryMin: jobData.salaryMin ?? "",
        salaryMax: jobData.salaryMax ?? "",
        skills: jobData.skills || "",
      });
    } catch (error) {
      console.log("GET SINGLE JOB ERROR:", error.response?.data);

      console.log("STATUS:", error.response?.status);

      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please login again.");

        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        navigate("/login");
        return;
      }

      toast.error(error.response?.data?.message || "Failed to fetch job");
    }
  };

  useEffect(() => {
    if (id) {
      getSingleJob();
    }
  }, [id]);

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const updateData = {
        category: update.category,
        title: update.title,
        companyName: update.companyName,
        location: update.location,
        jobType: update.jobType,
        expire: update.expire,
        salaryMin: update.salaryMin,
        salaryMax: update.salaryMax,
        skills: update.skills,
      };

      const response = await axios.put(
        `${BASE_URL}job/update-job/${id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("UPDATE RESPONSE:", response.data);

      toast.success(response.data?.message || "Updated Successfully");

      navigate("/company/job-list");
    } catch (error) {
      console.log("UPDATE ERROR:", error.response?.data);

      console.log("UPDATE STATUS:", error.response?.status);

      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please login again.");

        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        navigate("/login");
        return;
      }

      toast.error(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Update Job</h3>

        <button
          className="btn bg-dark-subtle text-dark fw-semibold"
          type="button"
          onClick={() => navigate("/company/job-list")}
        >
          Back
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Category */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>

                <input
                  type="text"
                  name="category"
                  className="form-control"
                  value={update.category}
                  onChange={handleChange}
                />
              </div>

              {/* Title */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Title</label>

                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={update.title}
                  onChange={handleChange}
                />
              </div>

              {/* Company Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  value={update.companyName}
                  onChange={handleChange}
                />
              </div>

              {/* Company ID hidden */}
              <input
                type="hidden"
                name="companyId"
                value={update.companyId}
                readOnly
              />

              {/* Location */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Location</label>

                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={update.location}
                  onChange={handleChange}
                />
              </div>

              {/* Job Type */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Job Type</label>

                <select
                  name="jobType"
                  className="form-select"
                  value={update.jobType}
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>

                  <option value="full time">Full Time</option>

                  <option value="part time">Part Time</option>

                  <option value="remote">Remote</option>
                </select>
              </div>

              {/* Expire Date */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Expire Date</label>

                <input
                  type="date"
                  name="expire"
                  className="form-control"
                  value={update.expire ? update.expire.substring(0, 10) : ""}
                  onChange={handleChange}
                />
              </div>

              {/* Minimum Salary */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Minimum Salary</label>

                <input
                  type="number"
                  name="salaryMin"
                  className="form-control"
                  value={update.salaryMin}
                  onChange={handleChange}
                />
              </div>

              {/* Maximum Salary */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Maximum Salary</label>

                <input
                  type="number"
                  name="salaryMax"
                  className="form-control"
                  value={update.salaryMax}
                  onChange={handleChange}
                />
              </div>

              {/* Skills */}
              <div className="col-md-12 mb-3">
                <label className="form-label">Skills</label>

                <input
                  type="text"
                  name="skills"
                  className="form-control"
                  value={update.skills}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Update Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyUpdateList;
