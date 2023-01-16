import React from 'react'
import { Link } from 'react-router-dom'

function ButtonTikTok() {
  return (
    <Link to={'/tendencias'} className='buttonTikTok'>
      <p>Ver tendencias en Tik Tok</p>
    </Link>
  )
}

export default ButtonTikTok