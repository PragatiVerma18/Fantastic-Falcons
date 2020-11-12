import React from "react";
import Videos from "./data.json";

function VideoCard() {
  return (
    <>
      {Videos.map((el) => {
        return (
          <div className="col-sm-6 col-lg-6 col-xl-6 d-flex" key={el.id}>
            <div className="card flex-fill">
              <iframe
                height="315"
                src={el.src}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title={el.title}
              ></iframe>
              <div className="card-body">
                <h4 className="card-title">{el.title}</h4>
                <p className="card-text">{el.tags}</p>
              </div>
              <a href={el.link} className="btn btn-block btn-lg btn-primary">
                Play on Youtube
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default VideoCard;
