import React from 'react'
import { useState, useEffect } from "react";
function CompanyProfile() {
      const [company, setCompany] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("job_portal"));
    setCompany(data);
  }, []);

  return (
    <div className='container'>
     <div className="card shadow-sm border-0">
          <div className="card-header bg-primary-subtle">
            <h5 className="text-primary-emphasis">Company Profile</h5>
          </div>

          <div className="card-body bg-light-subtle">
            {company ? (
              <>
                <h5 className="text-success-emphasis">
                  Welcome, {company.name}
                </h5>

                <p className="text-body-emphasis">
                  ID : {company.id || company._id}
                </p>

                <p className="text-body-emphasis">
                  Role : {company.role}
                </p>

                <p className="text-body-emphasis">
                  Email : {company.email}
                </p>

                <p className="text-body-emphasis">
                  Company Name : {company.companyName}
                </p>

                <p className="text-body-emphasis">
                  Company Location : {company.location}
                </p>
              </>
            ) : (
              <p className="text-danger-emphasis">
                No company data found
              </p>
            )}
          </div>
        </div>

    </div>
  )
}

export default CompanyProfile
