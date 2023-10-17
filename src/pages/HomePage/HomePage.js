import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import WhatsCovered from '../../components/WhatsCovered/WhatsCovered'
import WhatsNotCovered from '../../components/WhatsNotCovered/WhatsNotCovered'
import StartSteps from '../../components/StartSteps/StartSteps'
import End from '../../components/End/End'
import WhyUs from '../../components/WhyUs/WhyUs'
import WhatGet from '../../components/WhatGet/WhatGet'
import Layoffs from '../../components/Layoffs/Layoffs'
import FAQs from '../../components/FAQs/FAQs'
import Testimonials from '../../components/Testimonials/Testimonials'
import SalaryOn from '../../components/SalaryOn/SalaryOn'

const HomePage = ({ screenSize }) => {
  return (
    <>
      <Navbar />
      <div className='h-[92px] w-full lg:hidden' />
      
      <SalaryOn screenSize={screenSize} />
      <WhatGet screenSize={screenSize} />
      <Layoffs screenSize={screenSize} />
      <WhatsCovered screenSize={screenSize} />
      <WhatsNotCovered screenSize={screenSize} />
      <StartSteps screenSize={screenSize} />
      <Testimonials screenSize={screenSize} />
      <FAQs screenSize={screenSize} />
      <WhyUs screenSize={screenSize} />
      <End screenSize={screenSize} />

      <Footer screenSize={screenSize} />
    </>
  )
}

export default HomePage