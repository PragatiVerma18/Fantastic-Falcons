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
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Team;
