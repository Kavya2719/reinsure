import { Navbar, Footer, WhatsCovered, WhatsNotCovered, StartSteps, End, WhyUs, WhatGet, Layoffs, FAQs, Testimonials, SalaryOn } from '../../components'

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