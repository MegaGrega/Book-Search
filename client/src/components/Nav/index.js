import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <Link to = "/">Search</Link>
      <Link to = "/saved">Saved</Link>
    </nav>
  );
}

export default Nav;
