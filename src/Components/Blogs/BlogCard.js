import React from "react";
import Blogs from "./data.json";

function BlogCard() {
  return (
    <>
      {Blogs.map((el) => {
        return (
          <div className="col-sm-6 col-lg-6 col-xl-6 d-flex" key={el.id}>
            <div className="card flex-fill">
              <img src={el.image} alt={el.title} height="400" />
              <div className="card-body">
                <h4 className="card-title">{el.title}</h4>
                <p className="card-text">{el.subtitle}</p>

                <small>
                  <strong> - {el.author}</strong>
                </small>
              </div>
              <a href={el.link} className="btn btn-block btn-lg btn-primary">
                View on Medium
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BlogCard;
