import React, { useState } from 'react'
import data from '../data'
import button_icon from '../../assets/button.png'
import './Slider.css'

function Slider() {

  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent(current + 1)
    if(current === data.length - 1) {
      setCurrent(0)
    }
  }

  const handlePrev = () => {
    setCurrent(current - 1)
    if(current < 1) {
      setCurrent(data.length - 1)
    }
  }

  return (
    <div className='Slider'>
      <button className='Slider_buttonPrev' onClick={handlePrev}>
        <img src={button_icon} alt="" />
      </button>
      <div className='Slider_divItems'>
        {data.map((e, i) => {
          return (
            <div key={i} className={current === i ? 'Slider_item active' : 'Slider_item'}>
              <img src={e.proFlight} alt="" />
            </div>
          )
        })}
      </div>
      <button className='Slider_buttonNext' onClick={handleNext}>
        <img src={button_icon} alt="" />
      </button>
    </div>
  )
}

export default Slider