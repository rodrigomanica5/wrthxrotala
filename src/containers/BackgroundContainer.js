import React, { useEffect, useState } from 'react'
import DesktopView from './DesktopView'

function BackgroundContainer({ children }) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {

        const checkIsMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }

    }, [])

    return (
        <div className='backgroundContainer'>
            {
                isMobile
                    ? <div>
                        {children}
                    </div>
                    : <DesktopView />
            }
            <p className='copyright'>Copyright © 2022 Todos los Derechos Reservados</p>
        </div>
    )
}

export default BackgroundContainer