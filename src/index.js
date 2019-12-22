import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import App from "./App";

render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
  document.querySelector("#root")
);
