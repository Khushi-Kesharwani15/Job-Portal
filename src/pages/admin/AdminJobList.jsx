import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminJobList() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [list, setList] = useState([]);

  const getAllJobs = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const response = await axios.get(`${BASE_URL}job/all-jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("ADMIN JOB RESPONSE ===>", response.data);

      setList(response.data.data || []);
    } catch (error) {
      console.log("ADMIN JOB ERROR ===>", error.response?.data);
      console.log("ADMIN JOB ERROR FULL ===>", error);

      toast.error(error.response?.data?.message || "Error loading jobs");
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(`${BASE_URL}job/delete-job/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("DELETE RESPONSE ===>", response.data);

      toast.success(response.data?.message || "Job deleted successfully");

      getAllJobs();
    } catch (error) {
      console.log("DELETE ERROR ===>", error.response?.data);

      toast.error(error.response?.data?.message || "Delete failed");
    }
  };
  const handleSuspend = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${BASE_URL}job/suspend-job/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(
        response.data?.message || "Job status updated successfully",
      );

      getAllJobs();
    } catch (error) {
      console.log("SUSPEND ERROR ===>", error.response?.data);

      toast.error(
        error.response?.data?.message || "Failed to update job status",
      );
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Job List</h3>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-primary text-center">
            <tr>
              <th>Id</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Company Category</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Job Type</th>
              <th>Expire</th>
              <th>Status</th>
              <th>Skills</th>
              <th>Suspend Status</th>
            </tr>
          </thead>

          <tbody>
            {list.length > 0 ? (
              list.map((item, index) => (
                <tr key={item._id}>
                  <td className="bg-light text-dark fw-semibold">
                    {index + 1}
                  </td>

                  <td className="bg-white text-primary fw-semibold">
                    {item.title}
                  </td>

                  <td className="text-secondary fw-semibold">
                    {item.companyName}
                  </td>
                  <td className="text-secondary fw-semibold">
                    {item.category}
                  </td>

                  <td className="bg-info-subtle text-info-emphasis">
                    {item.location}
                  </td>

                  <td className="bg-success-subtle text-success-emphasis">
                    {item.salaryMin || item.salaryMax
                      ? `${item.salaryMin || 0} - ${item.salaryMax || 0}`
                      : "N/A"}
                  </td>

                  <td className="bg-warning-subtle text-warning-emphasis fw-semibold">
                    {item.jobType}
                  </td>
                  <td className="text-warning-emphasis fw-semibold">
                    {item.expire
                      ? new Date(item.expire).toLocaleDateString()
                      : ""}
                  </td>

                  <td>
                    {item.status === "active" ? (
                      <span className="badge bg-success-subtle text-success border border-success">
                        Active
                      </span>
                    ) : (
                      <span className="badge bg-danger-subtle text-danger border border-danger">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="bg-warning-subtle text-warning-emphasis fw-semibold">
                    {item.skills}
                  </td>
                  <td>
                    <button
                      className={
                        item.isSuspend
                          ? "btn btn-sm btn-outline-success"
                          : "btn btn-sm btn-outline-danger"
                      }
                      onClick={() => handleSuspend(item._id)}
                    >
                      {item.isSuspend ? "Unsuspend" : "Suspend"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminJobList;
