import React from 'react'
import { Link } from 'react-router-dom'

function Return({ productURL }) {

    return (
        <div className='returnContainer'>
            <Link to={`/item/${productURL}`}><img src='/assets/img/Return.svg' alt='Volver' /></Link>
            <Link to={`/item/${productURL}`}>Volver</Link>
        </div>
    )
}

export default Return