import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <p>Givers & Keepers</p>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Pricing</li>
            <li>Past Clients</li>
            <li><button className='btn'>Contact us</button></li>




        </ul>
    </nav>
  )
}

export default Navbar