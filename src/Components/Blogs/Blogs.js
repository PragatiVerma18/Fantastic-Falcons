import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <div>
      <h1 className="text-center">
        <strong>Blogs</strong>
      </h1>
      <div className="container">
        <div className="row">
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
