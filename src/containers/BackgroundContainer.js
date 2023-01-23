import React, { useEffect, useState } from 'react'
import DesktopView from './DesktopView'

function BackgroundContainer({ children }) {

    const [isMobile, setIsMobile] = useState(null)

    useEffect(() => {

        const checkIsMobile = () => {
            if (window.visualViewport.width < 900) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener('load', checkIsMobile)

        return () => {
            window.removeEventListener('load', checkIsMobile)
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