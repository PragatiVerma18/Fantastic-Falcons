import React from "react";
import VideoCard from "./VideoCard";

function Videos() {
  return (
    <div>
      <h1 className="text-center">
        <strong>Videos</strong>
      </h1>
      <div className="container">
        <div className="row">
          <VideoCard />
        </div>
      </div>
    </div>
  );
}

export default Videos;
