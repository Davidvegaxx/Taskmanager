import React from 'react'
import navBrand from '../assets/Group 2.svg'
import Ellipse1 from '../assets/Ellipse 1.svg'

const Navbar = () => {
  return (
<div className="main-navbar d-flex align-itmes-center">
      <nav className="container d-flex justify-content-between align-items-center">
        <div>
          <img src={navBrand} alt="" />
        </div>
        <ul className="d-flex gap-5 list-unstyled">
          <li>New Task</li>
          <li>All Tasks</li>
          <div>
            <img className="w-75" src={Ellipse1} alt="" />
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar