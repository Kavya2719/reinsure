import React from 'react'
import RightArrowImg from '../../assests/images/right.png'

const GetQuote = () => {
  return (
    <button className='text-white bg-blue py-[9.33px] px-[13.33px] border-[1.33px] border-blue flex items-center gap-1'>
        <span>Get Quote</span>
        <img src={RightArrowImg} alt="->" />
    </button>
  )
}

export default GetQuote