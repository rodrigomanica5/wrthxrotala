import React from 'react'
import { Link } from 'react-router-dom'

function ButtonTrends({productId}) {

  if (productId == "017yx2") {
    return (
      <Link to={`/trends/${productId}`} className='buttonTrends'>
      <p>Mirar Video</p>
    </Link>
    )
  }

  return (
    <Link to={`/trends/${productId}`} className='buttonTrends'>
      <p>Ver Inspiración</p>
    </Link>
  )
}

export default ButtonTrends