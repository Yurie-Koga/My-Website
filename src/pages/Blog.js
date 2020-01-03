import React from "react";
import Blogs from "../components/Blogs";
import Articles from "../components/Articles";

export default function BlogPage() {
  return (
    <div>
      <section style={{ position: "relative" }}>
        <div
          className="blog-contentPage"
          style={{ position: "relative", top: "53px", marginBottom: "53px" }}
        >
          <Blogs />
        </div>
      </section>

      <div
        className="parallax"
        style={{ position: "relative", height: "auto", minHeight: "485px" }}
      >
        <Articles />
      </div>
    </div>
  );
}
