import { React } from "react";

function CompanyDashboard() {
  return (
    <div>
      <div className="container ">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary-subtle">
            <h5 className="text-primary-emphasis">Company Dashboard</h5>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {/* Posted Jobs */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-primary-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-primary-emphasis">Posted Jobs</h6>

                    <h3 className="text-primary-emphasis">45</h3>
                  </div>

                  <i className="bi bi-briefcase-fill text-primary-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Total Applicants */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-success-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-success-emphasis">Total Applicants</h6>

                    <h3 className="text-success-emphasis">850</h3>
                  </div>

                  <i className="bi bi-people-fill text-success-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Shortlisted Candidates */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-warning-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-warning-emphasis">
                      Shortlisted Candidates
                    </h6>

                    <h3 className="text-warning-emphasis">120</h3>
                  </div>

                  <i className="bi bi-person-check-fill text-warning-emphasis fs-1"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Scheduled Interviews */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm bg-danger-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-danger-emphasis">
                      Scheduled Interviews
                    </h6>

                    <h3 className="text-danger-emphasis">35</h3>
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

export default CompanyDashboard;
