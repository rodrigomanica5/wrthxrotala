import React from 'react'
import Video from './Video'

function Card() {
  return (
    <div className='card'>
      <img src='/assets/img/WrthRotala.svg' alt='' />
      <Video/>
      <div>
        <h3>Nombre Corset</h3>
        <p>Wrth x Rotala</p>
      </div>
    </div>
  )
}

export default Card