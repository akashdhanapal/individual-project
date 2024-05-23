import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='header-nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/book">Book</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
     
    </nav>
  )
}
