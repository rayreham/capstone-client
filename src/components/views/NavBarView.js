import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    // <nav>
    //   <Link to="/" >
    //     Home
    //   </Link>
    //   <Link to="/campuses" >
    //     Campuses
    //   </Link>
    //   <Link to="/students" >
    //     Students
    //   </Link>
    // </nav>

    <div class="conatiner-fluid bg-dark sticky-top">
    <nav class="container navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>  
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active mr-5">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link" href="#">About</a>
              </li>


          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default NavBarView;
