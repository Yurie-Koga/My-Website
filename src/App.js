import React from "react";
import { Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={BlogPage} />
    </Switch>
  );
}
