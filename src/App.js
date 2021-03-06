import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Footer />
    </HashRouter>
  );
}
