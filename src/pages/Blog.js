import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="container">
      <h1>Blog Page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
    </div>
  );
}
