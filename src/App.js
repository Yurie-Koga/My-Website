import React from "react";
import { Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  );
}
