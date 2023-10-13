import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import WhatsCovered from '../../components/WhatsCovered/WhatsCovered'
import WhatsNotCovered from '../../components/WhatsNotCovered/WhatsNotCovered'
import StartSteps from '../../components/StartSteps/StartSteps'
import End from '../../components/End/End'
import WhyUs from '../../components/WhyUs/WhyUs'
import WhatGet from '../../components/WhatGet/WhatGet'

const HomePage = ({ screenSize }) => {
  return (
    <>
      <Navbar />
      <div className='h-[92px] w-full lg:hidden' />
      
      <WhatGet screenSize={screenSize} />
      <WhatsCovered screenSize={screenSize} />
      <WhatsNotCovered screenSize={screenSize} />
      <StartSteps screenSize={screenSize} />
      <WhyUs screenSize={screenSize} />

      <End />
      <Footer screenSize={screenSize}/>
    </>
  )
}

export default HomePage