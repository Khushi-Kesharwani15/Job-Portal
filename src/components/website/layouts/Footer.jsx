import React from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5  pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="p-3">
              <h2 className="fw-bold text-primary">Job Portal</h2>

              <p className="text-light opacity-75">
                Find your dream job and connect with top companies. Build your
                career with thousands of opportunities.
              </p>

              <button className="btn btn-primary rounded-pill px-4">
                Explore Jobs <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 text-warning">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75"
                >
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75"
                >
                  About
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75"
                >
                  Jobs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-warning">Services</h5>

            <ul className="list-unstyled">
              <li className="mb-2 text-light opacity-75">Job Search</li>

              <li className="mb-2 text-light opacity-75">Resume Builder</li>

              <li className="mb-2 text-light opacity-75">Career Guidance</li>

              <li className="text-light opacity-75">Recruiter Support</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-warning">Follow Us</h5>

            <div className="d-flex gap-3">
              <a href="#" className="btn btn-primary rounded-circle shadow">
                <FaFacebook size={22} />
              </a>

              <a
                href="#"
                className="btn btn-info rounded-circle shadow text-white"
              >
                <FaTwitterSquare size={22} />
              </a>

              <a href="#" className="btn btn-danger rounded-circle shadow">
                <FaInstagramSquare size={22} />
              </a>

              <a href="#" className="btn btn-success rounded-circle shadow">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4 border-secondary" />

        <div className="text-center">
          <p className="mb-0 text-secondary">
            © 2026
            <span className="text-primary fw-bold"> Job Portal</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
