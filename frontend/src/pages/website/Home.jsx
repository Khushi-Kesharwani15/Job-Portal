import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../../assets/image/home/img1.jpg";
import { useNavigate } from "react-router-dom";
function Home() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH ACTIVE JOBS
  useEffect(() => {
    const getActiveJobs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`${BASE_URL}job/active-job`);

        console.log("ACTIVE JOBS RESPONSE:", response.data);

        setJobs(response.data?.data || []);
      } catch (err) {
        console.error("FETCH ACTIVE JOBS ERROR:", err);
        console.error("SERVER RESPONSE:", err.response?.data);

        setError(err.response?.data?.message || "Unable to load active jobs");
      } finally {
        setLoading(false);
      }
    };

    getActiveJobs();
  }, [BASE_URL]);
  // ==========================================
  // CATEGORIES
  // ==========================================
  const categories = [
    {
      name: "Web Development",
      icon: "🌐",
    },
    {
      name: "Marketing",
      icon: "📈",
    },
    {
      name: "Data Science",
      icon: "📊",
    },
    {
      name: "Design",
      icon: "✏️",
    },
    {
      name: "Finance",
      icon: "💰",
    },
    {
      name: "Engineering",
      icon: "⚙️",
    },
  ];

  return (
    <div>
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="py-5 bg-success-subtle">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* HERO CONTENT */}
            <div className="col-lg-7">
              <div className="mb-3">
                <span className="badge bg-success text-white rounded-pill px-3 py-2">
                  🚀 Over 10,000+ Jobs Available
                </span>
              </div>

              <h1 className="display-4 fw-bold text-success-emphasis mb-3">
                Find Your Dream Job Today
              </h1>

              <p className="lead text-dark fs-5 mb-4">
                Search thousands of job opportunities from top companies and
                build your career with confidence.
              </p>

              {/* SEARCH BAR */}
              <div className="bg-white p-3 rounded-4 shadow-lg text-dark">
                <div className="row g-2 align-items-center">
                  <div className="col-md-5">
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-0 text-muted">
                        🔍
                      </span>

                      <input
                        type="text"
                        className="form-control border-0 shadow-none ps-0"
                        placeholder="Job title or keyword"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-0 text-muted">
                        📍
                      </span>

                      <input
                        type="text"
                        className="form-control border-0 shadow-none ps-0"
                        placeholder="Location"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <button className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold fs-6">
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="col-lg-5 text-center">
              <div className="position-relative p-2">
                <img
                  src={img1}
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                  style={{ maxHeight: "420px" }}
                  alt="job search"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CATEGORIES
      ========================================== */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-bold mb-2">
              Explore Categories
            </h6>

            <h2 className="fw-bold fs-1">Popular Job Categories</h2>
          </div>

          <div className="row g-4">
            {categories.map((item, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="card text-center border-0 shadow-sm rounded-4 p-3 h-100 bg-white">
                  <div className="fs-1 mb-2">{item.icon}</div>

                  <h6 className="fw-bold mb-1 text-dark">{item.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURED JOBS
      ========================================== */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h6 className="text-primary text-uppercase fw-bold mb-2">
                Opportunities
              </h6>

              <h2 className="fw-bold fs-1 m-0">Featured Jobs</h2>
            </div>

            <button className="btn btn-outline-primary rounded-pill px-4 fw-semibold d-none d-md-block">
              View All Jobs →
            </button>
          </div>

          <div className="row g-4">
            {/* LOADING */}
            {loading && (
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>

                <p className="text-muted mt-3">Loading jobs...</p>
              </div>
            )}

            {/* ERROR */}
            {!loading && error && (
              <div className="col-12 text-center py-5">
                <div className="alert alert-danger">{error}</div>
              </div>
            )}

            {/* NO JOBS */}
            {!loading && !error && jobs.length === 0 && (
              <div className="col-12 text-center py-5">
                <div className="fs-1 mb-3">📭</div>

                <h5 className="fw-bold">No Active Jobs Available</h5>

                <p className="text-muted">
                  Please check again later for new opportunities.
                </p>
              </div>
            )}

            {/* JOBS */}
            {!loading &&
              !error &&
              jobs.length > 0 &&
              jobs.map((job) => (
                <div className="col-md-4" key={job._id}>
                  <div className="card shadow-sm border-0 rounded-4 h-100 p-2">
                    <div className="card-body d-flex flex-column">
                      {/* TOP */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-3 fs-3">
                          💼
                        </div>

                        <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2">
                          {job.jobType || "Full Time"}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h5 className="fw-bold text-dark mb-1">
                        {job.title || "Untitled Job"}
                      </h5>

                      {/* COMPANY */}
                      <p className="text-muted small mb-2">
                        🏢 {job.companyName || "Company"}
                      </p>

                      {/* CATEGORY */}
                      {job.category && (
                        <span className="badge bg-light text-dark border mb-3 align-self-start">
                          {job.category}
                        </span>
                      )}

                      {/* BOTTOM */}
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
                          <span>
                            📍 {job.location || "Location not specified"}
                          </span>

                          <span className="fw-semibold text-dark">
                            ₹{job.salaryMin ?? 0} - ₹{job.salaryMax ?? 0}
                          </span>
                        </div>

                        <button
                          className="btn btn-primary bg-gradient w-100 rounded-3 py-2 fw-semibold"
                          onClick={() => navigate(`/job-details/${job._id}`)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* MOBILE VIEW ALL */}
          <div className="text-center mt-4 d-md-none">
            <button className="btn btn-outline-primary rounded-pill px-4 fw-semibold">
              View All Jobs →
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          READY TO START
      ========================================== */}
      <section className="py-5">
        <div className="container py-4">
          <div className="bg-success-subtle bg-gradient text-success-emphasis rounded-5 p-5 text-center shadow-lg">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-6 fw-bold mb-3">
                  Ready to Start Your Career?
                </h2>

                <p className="fs-5 mb-4">
                  Create your profile today and get discovered by top hiring
                  companies directly.
                </p>

                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-light text-success-emphasis btn-lg rounded-pill px-4 fw-bold shadow-sm"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Create Account
                  </button>

                  <button className="btn btn-outline-success btn-lg rounded-pill px-4 fw-semibold">
                    Browse Companies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
