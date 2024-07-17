import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky ? "dark-nav":""}`} >
        <p>Givers & Keepers</p>
        <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>About us</li>
            <li>Pricing</li>
            <li>Past Clients</li>
            <li><button className='btn'>Contact us</button></li>




        </ul>
    </nav>
  )
}

export default Navbar