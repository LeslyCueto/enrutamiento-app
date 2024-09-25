import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-info" to="/">
          Home
        </NavLink>
        <NavLink className="btn btn-outline-info" to="/about">
          About
        </NavLink>
        <NavLink className="btn btn-outline-info" to="/blog">
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
