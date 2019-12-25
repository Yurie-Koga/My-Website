import React from "react";
import Blogs from "../components/Blogs";

export default function BlogPage() {
  return (
    <div>
      {/* <div class="parallax">
        <div class="text">
          <h1>Coming soon...</h1>
        </div>
      </div> */}

      {/* <div class="coverImage" style={{ height: "900px" }}>
        
      </div> */}

      <div class="blog-contentPage">
        <Blogs />
      </div>

      <div class="parallax"></div>
    </div>
  );
}
