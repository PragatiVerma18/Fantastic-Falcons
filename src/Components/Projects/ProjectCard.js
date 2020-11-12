import React from "react";
import Projects from "./data.json";

function ProjectCard() {
  return (
    <>
      {Projects.map((el) => {
        return (
          <div className="col-sm-6 col-lg-6 col-xl-4 d-flex">
            <div className="card flex-fill" key={el.id}>
              <img className="card-img-top" src={el.image} alt={el.title} />
              <div className="card-body">
                <h4 className="card-title">{el.title}</h4>
                <p className="card-text">{el.tagline}</p>
                <div className="icon-tray">
                  <span className="icon">
                    <a href={el.devpost}>
                      <i className="fab fa-github fa-2x m-3"></i>
                    </a>
                  </span>
                  <span className="icon">
                    <a href={el.youtube}>
                      <i className="fab fa-youtube fa-2x m-3"></i>
                    </a>
                  </span>
                </div>
                <a
                  href={el.devpost}
                  className="btn btn-block btn-lg btn-primary mt-4"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
