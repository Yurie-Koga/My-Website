import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Footer />
    </BrowserRouter>
  );
}
