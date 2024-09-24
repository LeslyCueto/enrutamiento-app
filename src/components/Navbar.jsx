import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="btn btn-outline-info" href="/">
          Home
        </a>
        <a className="btn btn-outline-info" href="/about">
          About
        </a>
        <a className="btn btn-outline-info" href="/blog">
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
