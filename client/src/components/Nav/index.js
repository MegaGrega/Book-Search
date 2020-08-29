import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light style='background-color: #e3f2fd;'">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <Link to = "/" className="someMargin">Search</Link>

      <Link to = "/saved" className="someMargin">Saved</Link>
    </nav>
  );
}

export default Nav;
