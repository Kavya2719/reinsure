import { Navbar, Footer, WhatsCovered, WhatsNotCovered, StartSteps, End, WhyUs, WhatGet, Layoffs, FAQs, Testimonials, SalaryOn } from '../../components'
import { useRef } from 'react'

const HomePage = ({ screenSize }) => {
  const FAQsRef = useRef(null)

  const handleScrollToFAQ = () => {
    FAQsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <Navbar handleScrollToFAQ={handleScrollToFAQ} />
      <div className='h-[92px] w-full lg:hidden' />
      
      <SalaryOn screenSize={screenSize} />
      <WhatGet screenSize={screenSize} />
      <Layoffs screenSize={screenSize} />
      <WhatsCovered screenSize={screenSize} />
      <WhatsNotCovered screenSize={screenSize} />
      <StartSteps screenSize={screenSize} />
      <Testimonials screenSize={screenSize} />
      <FAQs screenSize={screenSize} FAQsRef={FAQsRef} />
      <WhyUs screenSize={screenSize} />
      <End screenSize={screenSize} />

      <Footer screenSize={screenSize} />
    </>
  )
}

export default HomePage