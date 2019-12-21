// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import Home from "./pages/Home";

// const routing = (
//   <Router>
//     {/* <header>Header</header> */}
//     <div>
//       <Route path="/" component={App} />
//       <Route path="/home" component={Home} />
//     </div>
//     {/* <footer>Footer</footer> */}
//   </Router>
// );
// ReactDOM.render(routing, document.getElementById("root"));

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
