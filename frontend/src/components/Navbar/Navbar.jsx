import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
         <div className='nav'>
               <div className='nav-logo'>Cuh Coding club</div>
               <ul className='nav-menu'>
                  <li id="liel">Home</li>
                  <li id="liel">Documentation</li>
                  <li id="liel">Resources</li>
                  <li id="liel">About</li>
                  <li className='nav-contact'>contact us</li>
               </ul>
         </div>
    </div> 
  )
}

export default Navbar