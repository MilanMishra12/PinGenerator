import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow bg-dark fixed-top">
      <div className="container">
        <div>
          <Link to="/" className="navbar-brand btn btn-dark">
            Generate Pin
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/savedpins" className="navbar-brand btn btn-dark">
            Saved Pins
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
