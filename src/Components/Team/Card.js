import React from "react";
import Persons from "./data.json";

function Card() {
  return (
    <>
      {Persons.map((el) => {
        return (
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="single-person">
              <div className="person-image">
                <img src={el.img} alt="" />
                <span className="icon">
                  <a href={el.github}>
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">{el.name}</h3>
                <span className="speciality">{el.speciality}</span>
              </div>
              <div className="social-links">
                <span className="social-icon">
                  <a href={el.twitter}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
                <span className="social-icon">
                  <a href={el.linkedin}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
