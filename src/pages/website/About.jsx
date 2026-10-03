import React from "react";

function About() {
  const features = [
    {
      icon: "🔍",
      title: "Easy Job Search",
      desc: "Find relevant jobs quickly using filters for location, role, and skills.",
    },
    {
      icon: "🏢",
      title: "Verified Employers",
      desc: "Connect directly with trusted and top-hiring companies.",
    },
    {
      icon: "⚡",
      title: "Quick Apply",
      desc: "Apply to your dream job in just one click with an updated profile.",
    },
  ];

  return (
    <div>
      {/* Hero / Header Section */}
      <section className="bg-success-subtle text-success-emphasis py-5 text-center">
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">About Our Job Portal</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            We connect talented professionals with top companies to help people
            build meaningful careers and businesses hire the best talent.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section 1*/}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3 ">
                Connecting Talent with Opportunity
              </h2>
              <p className="text-secondary">
                Our platform was built to make job hunting and recruitment
                simple, fast, and transparent. Whether you are a fresher looking
                for your first job or an experienced professional aiming for a
                career upgrade, we provide the tools you need.
              </p>
              <p className="text-secondary">
                We empower recruiters to find skilled candidates easily while
                providing job seekers with verified, high-quality listings
                across various industries.
              </p>
            </div>

            <div className="col-md-6">
              <div className="bg-light p-4 rounded-3 border">
                <h4 className="fw-bold text-success-emphasis mb-3">Our Core Mission</h4>
                <p className="text-muted mb-0">
                  To bridge the gap between job seekers and employers by
                  providing a reliable, user-friendly, and transparent hiring
                  platform for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section 2*/}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <div className="bg-light p-4 rounded-3 border">
                <h3 className="fw-bold text-success-emphasis mb-3">
                  Why Choose Our Platform?
                </h3>
                <p className="text-muted mb-0">
                  We connect talented professionals with trusted companies
                  through a simple, transparent, and efficient hiring process.
                  Our goal is to make career opportunities accessible for
                  everyone.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Your Career Journey Starts Here</h2>

              <p className="text-secondary">
                Find the right job opportunities based on your skills,
                experience, and career goals. Our platform helps job seekers
                discover verified vacancies from leading organizations.
              </p>

              <p className="text-secondary">
                Recruiters can easily search for skilled candidates, manage
                hiring processes, and build strong teams with the help of our
                smart recruitment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section 3*/}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">
                Building Better Career Connections
              </h2>

              <p className="text-secondary">
                We aim to create a platform where job seekers and employers can
                connect with confidence. Our focus is to simplify the journey of
                finding the right opportunities and discovering the right
                talent.
              </p>

              <p className="text-secondary">
                We believe every individual deserves access to meaningful career
                opportunities, and every organization should be able to find
                capable professionals who match their goals.
              </p>
            </div>

            <div className="col-md-6">
              <div className="bg-light p-4 rounded-3 border">
                <h4 className="fw-bold text-success-emphasis mb-3">
                  Our Vision & Mission
                </h4>

                <p className="text-muted mb-0">
                  Our mission is to create a transparent and reliable platform
                  that brings talented people and growing organizations together
                  while supporting successful career journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Why Choose Us?</h2>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm bg-light text-center p-3">
                  <div className="card-body">
                    <div className="display-6 mb-3">{feature.icon}</div>
                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                    <p className="text-muted small mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-5 bg-success-subtle text-success-emphasis text-center">
        <div className="container">
          <h2 className="fw-bold mb-2">Ready to Take the Next Step?</h2>
          <p className="mb-4">
            Join thousands of professionals and land your dream job today.
          </p>
          <button className="btn btn-light text-success fw-bold px-4 rounded-pill">
            Explore All Jobs
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
