import React from "react";

function card() {
  return (
    <>
      {/* <!-- Start Single Person --> */}
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="single-person">
          <div className="person-image">
            <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
            <span className="icon">
              <a href="">
                <i className="fab fa-github"></i>
              </a>
            </span>
          </div>
          <div className="person-info">
            <h3 className="full-name">John Doe</h3>
            <span className="speciality">Web Developer</span>
          </div>
          <div className="social-links">
            <span className="social-icon">
              <a href="">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* <!-- / End Single Person --> */}
    </>
  );
}

export default card;
