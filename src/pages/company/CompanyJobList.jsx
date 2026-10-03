import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsPlus, BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function CompanyJobList() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [list, setList] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // GET ALL COMPANY JOBS
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

      console.log("JOB RESPONSE ===>", response.data);

      setList(response.data?.data || []);
    } catch (error) {
      console.log("JOB ERROR STATUS ===>", error.response?.status);
      console.log("JOB ERROR DATA ===>", error.response?.data);

      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please login again.");

        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        navigate("/login");
        return;
      }

      toast.error(error.response?.data?.message || "Error loading jobs");
    }
  };

  // DELETE JOB
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const response = await axios.delete(`${BASE_URL}job/delete-job/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Deleted Job ===>", response.data);

      toast.success(response.data?.message || "Job deleted successfully");

      getAllJobs();
    } catch (error) {
      console.log("DELETE ERROR ===>", error.response?.data);

      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please login again.");

        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        navigate("/login");
        return;
      }

      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="container-fluid py-3">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Job List</h4>

        <button
          className="btn btn-success d-flex align-items-center gap-2"
          onClick={() => navigate("/company/add-jobs")}
        >
          <BsPlus size={22} />
          Create
        </button>
      </div>

      {/* TABLE */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle mb-0">
              <thead className="table-primary text-center">
                <tr>
                  <th>Id</th>
                  <th>Job Category</th>
                  <th>Job Title</th>
                  <th>Company Name</th>
                  <th>Location</th>
                  <th>Job Type</th>
                  <th>Expire Date</th>
                  <th>Min Salary</th>
                  <th>Max Salary</th>
                  <th>Skills</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Suspend Status</th>
                </tr>
              </thead>

              <tbody>
                {list.length > 0 ? (
                  list.map((item, index) => (
                    <tr key={item._id}>
                      <td className="text-center fw-bold">{index + 1}</td>

                      <td>{item.category || "-"}</td>

                      <td>{item.title || "-"}</td>

                      <td>{item.companyName || "-"}</td>

                      <td>{item.location || "-"}</td>

                      <td className="text-center">
                        <span className="badge bg-info text-dark">
                          {item.jobType || "-"}
                        </span>
                      </td>

                      <td>
                        {item.expire
                          ? new Date(item.expire).toLocaleDateString()
                          : "-"}
                      </td>

                      <td>{item.salaryMin ?? "-"}</td>

                      <td>{item.salaryMax ?? "-"}</td>

                      <td>{item.skills || "-"}</td>

                      {/* JOB STATUS */}
                      <td className="text-center">
                        {item.status === "active" ? (
                          <span className="badge bg-success">Active</span>
                        ) : (
                          <span className="badge bg-danger">Inactive</span>
                        )}
                      </td>

                      {/* ACTIONS */}
                      <td className="text-center">
                        {item.isSuspend ? (
                          // ADMIN SUSPENDED JOB
                          <span className="badge bg-danger px-3 py-2">
                            Suspended
                          </span>
                        ) : (
                          // NORMAL JOB ACTIONS
                          <div className="d-flex justify-content-center gap-2">
                            <button
                              className="btn btn-sm"
                              type="button"
                              title="Edit"
                              onClick={() =>
                                navigate(`/company-update-list/${item._id}`)
                              }
                            >
                              <BsPencil className="text-primary" />
                            </button>

                            <button
                              className="btn btn-sm"
                              type="button"
                              title="Delete"
                              onClick={() => handleDelete(item._id)}
                            >
                              <BsTrash className="text-danger" />
                            </button>
                          </div>
                        )}
                      </td>

                      {/* SUSPEND STATUS */}
                      <td className="text-center">
                        {item.isSuspend ? (
                          <span className="badge p-2 bg-danger">
                            Suspended
                          </span>
                        ) : (
                          <span className="badge p-2 bg-success">Unspended</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="13" className="text-center py-4">
                      No jobs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyJobList;
