import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <div class="hero-image">
        <div class="hero-text">
          <h1 style={{ fontSize: "50px" }}>I am Yurie Koga</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>

      <p>Page Content..</p>
    </div>
  );
}
