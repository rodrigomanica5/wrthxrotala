import React from 'react'
import { Link } from 'react-router-dom'

function ButtonDetail() {
    return (
        <Link to={'/detail'} className='buttonDetail'>
            <p>Leer Descripción</p>
        </Link>
    )
}

export default ButtonDetail