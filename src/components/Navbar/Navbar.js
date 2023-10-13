import React from 'react'
import ReinsureLogo from '../../assests/images/Reinsure.png'
import { Link } from 'react-router-dom'
import GetQuote from '../GetQuote/GetQuote'

const Navbar = () => {
  return (
    <div className='top-0 fixed z-[1] py-6 px-[120px] flex flex-row items-center bg-light-white justify-between w-full lg:hidden'>
      <img src={ReinsureLogo} alt='Reinsure' style={{ marginTop: "-8px"}}/>

      <div className='flex flex-row items-center gap-[13.33px]'>
        <div className='flex flex-row items-center gap-6'>
          <Link to='/about-us' className='py-[9.33px] w-20'>About Us</Link>

          <Link to='/faq' className='py-[9.33px] w-20'>FAQs</Link>

          <Link to='/contact-us' className='py-[9.33px] w-[92px]'>Contact Us</Link>

          <button className='py-[9.33px] w-auto px-[13.33px] text-blue border-[1.33px] border-blue bg-white'>Sign In</button>
        </div>

        <GetQuote />
      </div>
    </div>
  )
}

export default Navbar;