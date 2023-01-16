import React from 'react'
import { Link } from 'react-router-dom'

function Return() {
    return (
        <div className='returnContainer'>
            <Link to={'/'}><img src='/assets/img/Return.svg' alt='Volver' /></Link>
            <Link to={'/'}>Volver</Link>
        </div>
    )
}

export default Return