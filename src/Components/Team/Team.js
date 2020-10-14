import React from "react";
import Card from "./Card";

function Team() {
  return (
    <div>
      <section className="section-team">
        <div className="container">
          {/* <!-- Start Header Section --> */}
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header-section">
                <h3 className="small-title">FANTASTIC FALCONS - POD 1.0.0</h3>
                <h2 className="title">Let's meet with our team members</h2>
              </div>
            </div>
          </div>
          {/* <!-- / End Header Section --> */}
        </div>
        <div className="row">
          <div
            className="col-sm-6 col-lg-4 col-xl-3"
            style={{ margin: "auto" }}
          >
            <div className="single-person">
              <div className="person-image">
                <img
                  src="https://avatars3.githubusercontent.com/u/37709578?s=460&u=074aa045c86912efe8fcad760a163f450d4881cd&v=4"
                  alt=""
                />
                <span className="icon">
                  <a href="https://github.com/khattakdev">
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Arsalan Khattak</h3>
                <span className="speciality">Full Stack Developer </span>
                <span className="speciality">Pod Mentor </span>
              </div>
              <div className="social-links">
                <span className="social-icon">
                  <a href="https://twitter.com/khattakdev">
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
                <span className="social-icon">
                  <a href="https://www.linkedin.com/in/khattakdev/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Team;
