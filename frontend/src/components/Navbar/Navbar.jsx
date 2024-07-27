import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>Cuh Coding Club</div>
      <ul className='nav-menu'>
        <li id="liel"><Link to="/">Home</Link></li>
        <li id="liel"><Link to="/Document">Document</Link></li>
        <li id="liel"><Link to="/resources">Resources</Link></li>
        <li id="liel"><Link to="/about">About</Link></li>
        <li><Link to="/signup"><button className='nav-contact'>Signup</button></Link></li>
      </ul>
    </div> 
  );
}

export default Navbar;
