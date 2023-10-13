import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import WhatsCovered from '../../components/WhatsCovered/WhatsCovered'
import WhatsNotCovered from '../../components/WhatsNotCovered/WhatsNotCovered'
import StartSteps from '../../components/StartSteps/StartSteps'

const HomePage = ({ screenSize }) => {
  return (
    <>
      <Navbar />
      <div className='h-[92px] w-full lg:hidden' />
      
      <WhatsCovered screenSize={screenSize} />
      <WhatsNotCovered screenSize={screenSize} />
      <StartSteps screenSize={screenSize} />

      <Footer screenSize={screenSize}/>
    </>
  )
}

export default HomePage