import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    // error @App.test.js : don't use switch
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  );
}

// ============== Using BrowerRouter not work ==============
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/blog" component={BlogPage} />v
//         <Route path="/contact" component={ContactPage} />
//       </Switch>
//     </BrowserRouter>
//   );
// }
// ============== Using BrowerRouter not work ==============
