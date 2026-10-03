import React from "react";
import { NavLink } from "react-router-dom";
function Services() {
  const servicesData = [
    {
      id: 1,

      title: "Web Development",
      description:
        "Custom, responsive websites built with modern frameworks and best practices for speed and SEO.",
    },
    {
      id: 2,
  
      title: "Mobile App Development",
      description:
        "Cross-platform iOS and Android applications tailored to deliver smooth user experiences.",
    },
    {
      id: 3,
    
      title: "UI/UX Design",
      description:
        "Intuitive user interface designs focused on customer engagement, clarity, and brand identity.",
    },
    {
      id: 4,
   
      title: "Digital Marketing",
      description:
        "Data-driven marketing campaigns, SEO strategies, and content management to boost your reach.",
    },
    {
      id: 5,
    
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure design, deployment, and optimization on AWS and Azure.",
    },
    {
      id: 6,

      title: "Cybersecurity",
      description:
        "Comprehensive security audits, risk mitigation, and protection strategies for your applications.",
    },
  ];

  return (
    <div className="bg-light ">
      <div className=" bg-success-subtle text-success-emphasis py-5">
        {/* Header Section */}
        <div className="container text-center mb-5">
          <h1 className="fw-bold display-5 mt-2">Services We Provide</h1>
          <p className=" col-md-8 offset-md-2 fs-5">
            We deliver high-quality digital solutions tailored to your business
            needs to help you scale and succeed.
          </p>
        </div>
      </div>
      {/* Services Grid */}
      <div className="container mt-4">
        <div className="row g-4">
          {servicesData.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-shadow transition">
                <div className="card-body mt-4">

                  
                  <h3 className="h4 card-title fw-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="card-text text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <NavLink
                    to="#learn-more"
                    className="text-primary fw-bold text-decoration-none d-inline-flex align-items-center mt-3"
                  >
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action (CTA) Section */}
      <div className="container mt-5 pt-4">
        <div className="bg-success-subtle text-success-emphasis rounded-4 p-5 text-center shadow">
          <h2 className="fw-bold mb-3">Have a Project in Mind?</h2>
          <p className="fs-5 opacity-75 col-md-8 offset-md-2 mb-4">
            Let's work together to build something amazing. Reach out to our
            team today for a free consultation.
          </p>
          <button className="btn btn-light btn-lg px-4 fw-bold text-primary rounded-pill">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
