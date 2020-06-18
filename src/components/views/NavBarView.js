import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";


const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/headlines" className="nav-link">
        Headlines
      </Link>
      <Link to="/search" className="nav-link">
        Search
      </Link>
      <Link to="/signup" className="nav-link">
        Signup
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </nav>
  );
};

export default NavBarView;

