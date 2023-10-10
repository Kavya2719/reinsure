import React from 'react'
import './StartSteps.css'

import StartImg from '../../assests/images/start.png'
import GetQuote from '../GetQuote/GetQuote'
import Card from '../Card/Card'

const StartSteps = () => {
  return (
    <div className='StartSteps'>
        <div className='StartSteps-title'>
            <span>Simple steps to&nbsp;</span>
            <img src={StartImg} className="StartSteps-startImg" alt="start" />
            <span>with</span>
        </div>

        <div className='StartSteps-cards-container'>
            <div className='StartSteps-cards'>
                
            </div>

            <GetQuote />
        </div>
    </div>
  )
}

export default StartSteps