import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

render(
  <BrowserRouter>
    <div class="topnav">
      <a class="active" href="/">
        Home
      </a>
      {/* <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a> */}
      <a href="/blog">Blog</a>
    </div>
    <App />
    <footer class="footer">
      <a>Footer</a>
    </footer>
  </BrowserRouter>,
  document.querySelector("#root")
);
