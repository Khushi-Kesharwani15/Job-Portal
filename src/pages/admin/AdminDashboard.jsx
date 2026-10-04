import { React } from "react";

function AdminDashboard() {
  return (
    <div>
      <div className="container ">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary-subtle">
            <h5 className="text-primary-emphasis">Admin Dashboard</h5>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {/* Total Jobs */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-primary-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-primary-emphasis">Total Jobs</h6>
                    <h3 className="text-primary-emphasis">250</h3>
                  </div>

                  <i className="bi bi-briefcase-fill text-primary-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-success-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-success-emphasis">Applications</h6>
                    <h3 className="text-success-emphasis">1200</h3>
                  </div>

                  <i className="bi bi-file-earmark-text-fill text-success-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Shortlisted */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-warning-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-warning-emphasis">Shortlisted</h6>

                    <h3 className="text-warning-emphasis">320</h3>
                  </div>

                  <i className="bi bi-person-check-fill text-warning-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Interviews */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-danger-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-danger-emphasis">Interviews</h6>

                    <h3 className="text-danger-emphasis">85</h3>
                  </div>

                  <i className="bi bi-calendar-check-fill text-danger-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
