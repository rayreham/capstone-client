import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (

    <div className="conatiner-fluid bg-dark sticky-top">
    <nav className="container navbar navbar-expand-lg navbar-dark bg-dark ">
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon default-font-size"></span>
          </button>  
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item mr-5">
                {/* <a className="nav-link default-font-size" href="http://localhost:3000/">Home</a> */}
                <Link className="default-font-size Gray" to="/" >Home</Link> 
              </li>
              <li className="nav-item mr-5">                    {/*Once we figure out how to keep track of user, this will be http://localhost:3000/users/${id}*/ }
                {/* <a className="nav-link default-font-size" href="http://localhost:3000/users/2">Profile</a> */}
                <Link className="default-font-size Gray" to="/users/2" >Profile</Link> 
              </li>


          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default NavBarView;
