import React from "react";
import Projects from "./data.json";

function ProjectCard() {
  return (
    <>
      {Projects.map((el) => {
        return (
          <div class="col-sm-6 col-lg-6 col-xl-4 d-flex">
            <div class="card flex-fill" key={el.id}>
              <img class="card-img-top" src={el.image} alt={el.title} />
              <div class="card-body">
                <h4 class="card-title">{el.title}</h4>
                <p class="card-text">{el.tagline}</p>
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
                  class="btn btn-block btn-lg btn-primary mt-4"
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
