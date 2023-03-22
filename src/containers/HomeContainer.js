import React from 'react'
import { Link } from 'react-router-dom' 

function HomeContainer() {
    return (
        <>
            <Link to={'/corset/011yq1'} className='buttonDetail'>
                <p>Corset Naranja</p>
            </Link>

            <Link to={'/corset/014yr1'} className='buttonDetail'>
                <p>Corset Azul</p>
            </Link>
            <Link to={'/t-shirt/017yx2'} className='buttonDetail'>
                <p>Remera</p>
            </Link>
        </>


    )
}

export default HomeContainer