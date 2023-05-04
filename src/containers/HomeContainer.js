import React from 'react'
import { Link } from 'react-router-dom' 

function HomeContainer() {
    return (
        <>
            <Link to={'/item/011yq1'}>
                <p className='homeOption'>Corset Naranja</p>
            </Link>

            <Link to={'/item/014yr1'}>
                <p className='homeOption'>Corset Azul</p>
            </Link>
            <Link to={'/item/017yx2'}>
                <p className='homeOption'>TooPerfect</p>
            </Link>
        </>


    )
}

export default HomeContainer