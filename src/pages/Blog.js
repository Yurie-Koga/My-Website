import React from "react";
import Blogs from "../components/Blogs";
import Articles from "../components/Articles";

export default function BlogPage() {
  return (
    <div>
      <div class="blog-contentPage">
        <Blogs />
      </div>

      <div class="parallax">
        <Articles />
      </div>
    </div>
  );
}
