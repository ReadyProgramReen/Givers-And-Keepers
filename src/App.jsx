import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Price from './Components/Price/Price'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title title ='Gallery'/>
      <Gallery/>
        <About/>
        <Title title ='Wedding Photgraphy Prices Packages'/>
        <Price/>
      </div>
      
    
    </div>
  )
}

export default App