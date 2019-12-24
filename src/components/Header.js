// ================= class =================
// import React from "react";

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentBtn: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(index) {
//     this.setState(state => ({
//       currentBtn: index
//     }));
//   }

// }

// export default function App() {
//   return (
//     <header class="topnav">
//       <nav id="myNav">
//         <button class={getClassActive(0)} onClick={navClick(0)}>
//           <a href="/">Home</a>
//         </button>
//         <button class={getClassActive(1)} onClick={navClick(1)}>
//           <a href="/blog">Blog</a>
//         </button>
//       </nav>
//     </header>
//   );
// }

// function getClassActive(index) {
//   return index == currentBtn ? "topnavBtn active" : "topnavBtn";
// }
// function navClick(index) {
//   currentBtn = index;
//   console.log("currentBtn: " + currentBtn);
//   console.log("class name: " + getClassActive(0));
//   console.log("class name: " + getClassActive(1));
// }
// ================= class =================

// ================= function =================
// import React from "react";

// let currentBtn = 0;
// export default function App() {
//   return (
//     <header class="topnav">
//       <nav id="myNav">
//         <button class={getClassActive(0)} onClick={navClick(0)}>
//           <a href="/">Home</a>
//         </button>
//         <button class={getClassActive(1)} onClick={navClick(1)}>
//           <a href="/blog">Blog</a>
//         </button>
//       </nav>
//     </header>
//   );
// }

// function getClassActive(index) {
//   // let classActive = ["", ""];
//   // for (let i = 0; i < 2; i++) {
//   //   if (i == currentBtn) classActive[i] = "topnavBtn active";
//   //   else classActive[i] = "topnavBtn";
//   // }

//   // return classActive;

//   return index == currentBtn ? "topnavBtn active" : "topnavBtn";
// }
// function navClick(index) {
//   // alert("Click");
//   currentBtn = index;
//   console.log("currentBtn: " + currentBtn);
//   console.log("class name: " + getClassActive(0));
//   console.log("class name: " + getClassActive(1));
// }
// ================= function =================

// ================= Now works =================
// import React from "react";

// export default function App() {
//   return (
//     <header class="topnav">
//       <nav id="myNav">
//         {/* <a class="active" href="/">
//           Home
//         </a>
//         <a href="/blog">Blog</a>
//         <a href="/contact">Contact</a>
//         <a href="#about">About</a> */}

//         <button class="topnavBtn active">
//           <a href="/">Home</a>
//         </button>
//         <button class="topnavBtn">
//           <a href="/blog">Blog</a>
//         </button>
//         <button class="topnavBtn">
//           <a href="/contact">Contact</a>
//         </button>
//       </nav>
//     </header>
//   );
// }
// ================= Now works =================

// ================= Nav Link =================
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header class="header">
      <nav class="topnav" activeclassname="active">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
// ================= Nav Link =================
