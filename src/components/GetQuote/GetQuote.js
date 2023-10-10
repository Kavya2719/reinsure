import React from 'react'
import './GetQuote.css'

import RightArrowImg from '../../assests/images/right.png'

const GetQuote = () => {
  return (
    <button className='GetQuote'>
        <span>Get Quote</span>
        <img src={RightArrowImg} alt="->" />
    </button>
  )
}

export default GetQuote