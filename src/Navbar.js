import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
const Navbar=()=> {
    return (
      <div>
        <nav className="navbar ficed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" >NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >Action</a></li>
            <li><a className="dropdown-item">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item">Something else here</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to={"/Buisness"}>Buisness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"Entertainment"}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"General"} >General</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to={"Health"} >Health</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to={"Science"} >Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"Sports"} >Sports</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"Technology"} >Technology</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }


export default Navbar
