import React, { useState } from 'react'
import data from '../data'
import button_icon from '../../assets/button.png'
import './Carrusel.css'

function Carrusel() {

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
    <div className='Carrusel'>
      <button className='Carrusel_buttonPrev' onClick={handlePrev}>
        <img src={button_icon} alt="" />
      </button>
      <div className='Carrusel_divItems'>
        {data.map((e, i) => {
          return (
            <div key={i} className={current === i ? 'Carrusel_item active' : 'Carrusel_item'}>
              <img src={e.proFlight} alt="" />
            </div>
          )
        })}
      </div>
      <button className='Carrusel_buttonNext' onClick={handleNext}>
        <img src={button_icon} alt="" />
      </button>
    </div>
  )
}

export default Carrusel