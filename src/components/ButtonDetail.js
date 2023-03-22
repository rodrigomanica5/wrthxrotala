import React from 'react'
import { Link } from 'react-router-dom'

function ButtonDetail({productId}) {
    return (
        <Link to={`/detail/${productId}`} className='buttonDetail'>
            <p>Leer Descripción</p>
        </Link>
    )
}

export default ButtonDetail