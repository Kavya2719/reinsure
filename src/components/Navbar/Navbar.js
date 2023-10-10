import React from 'react'
import './Navbar.css'

import ReinsureLogo from '../../assests/images/Reinsure.png'
import { Link } from 'react-router-dom';
import GetQuote from '../GetQuote/GetQuote';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={ReinsureLogo} alt='Reinsure' style={{ marginTop: "-8px"}}/>

      <div className='navbar-child'>
        <div className='navbar-routes'>
          <Link to='/about-us' className='navbar-route'>About Us</Link>

          <Link to='/faq' className='navbar-route'>FAQs</Link>

          <Link to='/contact-us' className='navbar-route contact-route'>Contact Us</Link>

          <button className='nav-btn'>Sign In</button>
        </div>

        <GetQuote />
      </div>
    </div>
  )
}

export default Navbar;