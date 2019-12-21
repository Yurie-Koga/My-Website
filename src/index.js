import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

render(
  <BrowserRouter>
    <header>Header</header>
    <App />
    <footer>Footer</footer>
  </BrowserRouter>,
  document.querySelector("#root")
);
