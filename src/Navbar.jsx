import React from "react";
import { NavLink } from "react-router-dom";



const Navbar =() => {
  return(
    <>
    <div className="container-fluid nav_bg ">
        <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-md navbar-light  navbar-custom">
      <div className="container-fluid">
        <NavLink
        exact
         className="navbar-brand" to="/" style={{color:"white" , fontSize:"30px"}}><img  /> My Website</NavLink>
         <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-toggleable-xs" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 nav navbar-nav navbar-right" >
            <li className="nav-item">
              <NavLink className="nav-link active"  activeClassName="menu_active" style={{color:"white"}} aria-current="page" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" style={{color:"white"}} activeClassName="menu_active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills" style={{color:"white"}} activeClassName="menu_active">Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" style={{color:"white"}} activeClassName="menu_active" >Contact</NavLink>
            </li>




          </ul>

        </div>
      </div>
      </nav>
    </div>
    </div>
    </div>
    </>
  )
}
/*
<div className="container-fluid nav_bg"
<div className="row">
<div className="col-10- mx-auto">
</div>
</div>
 </div>
*/

export default Navbar;
