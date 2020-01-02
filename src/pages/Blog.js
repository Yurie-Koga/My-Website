import React from "react";
import Blogs from "../components/Blogs";
import Articles from "../components/Articles";

export default function BlogPage() {
  return (
    <div>
      <div className="blog-contentPage">
        <Blogs />
      </div>

      <div className="parallax" style={{ height: "2000px" }}>
        <Articles />
      </div>
    </div>
  );
}
