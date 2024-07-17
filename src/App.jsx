import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Price from './Components/Price/Price'
import Title from './Components/Title/Title'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title ='Wedding Photgraphy Prices Packages'/>
        <Price/>
      </div>
      
    
    </div>
  )
}

export default App