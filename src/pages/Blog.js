import React from "react";

export default function BlogPage() {
  return (
    <div className="container">
      <p>
        In this example we have turned off parallax scrolling for mobile
        devices. It works as expected on all desktop screens sizes.
      </p>
      <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

      <div class="parallax"></div>

      <div
        style={{ height: "500px", backgroundColor: "white", fontSize: "36px" }}
      >
        This div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>

      <div class="parallax"></div>
    </div>
  );
}
