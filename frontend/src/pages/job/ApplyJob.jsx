import React, { useState } from "react";

function ApplyJob() {
  const [formData,setFormData]=useState("")
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-2">Apply for Job</h2>
              <p className="text-center text-muted mb-4">
                Fill out the form below to submit your application.
              </p>

              <form>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                {/* Job Position */}
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Applying For
                  </label>
                  <select className="form-select" id="position">
                    <option value="">Select a position</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="designer">UI/UX Designer</option>
                  </select>
                </div>

                {/* Experience */}
                <div className="mb-3">
                  <label htmlFor="experience" className="form-label">
                    Experience
                  </label>
                  <select className="form-select" id="experience">
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-2">1 - 2 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>

                {/* Resume */}
                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="form-text">PDF, DOC or DOCX files only.</div>
                </div>

                {/* Cover Letter */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tell us why you are suitable for this job..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-100">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyJob;
