import React from 'react'
import Video from './Video'

function Card({ product }) {

  return (
    <div className='card'>
      <Video product={product} />
      <div className={`productShowcaseTitle ${product.id == "017yx2" ? 'tooPerfectTitle' : ''}`}>
        <h3 >{product.name}</h3>
        <p>Wrth x Rotala</p>
      </div>
    </div>
  )
}

export default Card