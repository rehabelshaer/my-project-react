import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


const Navbar =() =>{ 
 
  return (
    <div className="navbar">
      <div className="container">

        <div className="logo">
          <h2 className="logo-text">OUR COMPANY</h2>
        </div>
        <div>
        <ul className="list">
            <li className="list-item"><Link to="/" href="#">Home</Link></li>
            <li className="list-item"><a href="#">Work</a></li>
            <li className="list-item"><a href="#">Portfolio</a></li>
            <li className="list-item"><a href="#">Resume</a></li>
            <li className="list-item"><a href="#">About</a></li>
            <li className="list-item"><Link to="/contact" href="#">Contact</Link></li>
         </ul>
        </div>

      </div>
    </div>
  )
 }

export default Navbar;
//<Link to="/"> Home </Link>
//<Link to="/contact"> Contact </Link>