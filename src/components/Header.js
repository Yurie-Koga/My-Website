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
