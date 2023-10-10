import React from 'react'
import './HomePage.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import WhatsCovered from '../../components/WhatsCovered/WhatsCovered'
import WhatsNotCovered from '../../components/WhatsNotCovered/WhatsNotCovered'
import StartSteps from '../../components/StartSteps/StartSteps'

const HomePage = ({ screenSize }) => {
  return (
    <>
      <Navbar />
      <div className='navbar-space' />
      
      <WhatsCovered screenSize={screenSize} />
      <WhatsNotCovered screenSize={screenSize} />
      <StartSteps />

      <Footer screenSize={screenSize}/>
    </>
  )
}

export default HomePage