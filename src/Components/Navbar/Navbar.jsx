import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

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
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='photos' smooth={true} offset={-150} duration={500}>Gallery</Link></li>
            <li><Link to='about' smooth={true} offset={-80} duration={500}>About us</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-190} duration={500}>Past Clients</Link></li>
            <li><Link to='prices' smooth={true} offset={-165} duration={500}>Pricing</Link></li>
            <li><Link to='contact' smooth={true} offset={-170} duration={500} className='btn'>Contact us</Link></li>




        </ul>
    </nav>
  )
}

export default Navbar