import React from 'react'
import './About.css'
import about_img from '../../assets/about1.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <h3>About Us</h3>
            <h5>CLEAN, MODERN, TIMELESS</h5>
            <hr />
            <p>Based in the heart of New York City, we specialize in 
                capturing the essence of intimate weddings. Our mission is to artfully preserve the love and unique bond shared between two people on their special day. With a blend of creativity, professionalism, and a deep appreciation for love stories, we strive to deliver timeless photographs that beautifully narrate the beginning of your journey together. We are committed to providing a personalized experience that exceeds expectations, ensuring that every cherished moment 
                is elegantly documented to be treasured for a lifetime.</p>

        </div>
        <div className="about-right">
            <img className='about-img' src={about_img} alt="" />
        </div>


    </div>
  )
}

export default About