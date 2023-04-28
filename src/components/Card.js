import React from 'react'
import Video from './Video'

function Card({ product }) {

  // if (product.id == "017yx2") {
  //   return (
  //     <div className='card'>
  //       <img src='/assets/img/TooPerfect.png' alt='Too Perfect' />
  //       <div className='productShowcaseTitle'>
  //         <h3>{product.name}</h3>
  //         <p>Wrth x Rotala</p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className='card'>
      <Video product={product} />
      <div className='productShowcaseTitle'>
        <h3>{product.name}</h3>
        <p>Wrth x Rotala</p>
      </div>
    </div>
  )
}

export default Card