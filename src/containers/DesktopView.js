import React from 'react'

function DesktopView() {
    return (
        <div className='desktopViewContainer'>
            <div className='desktopWarningMessage'>
                <img src='/assets/img/DesktopWarn.svg' alt='Warning!' />
                <h1>Dispositivo no soportado</h1>
                <h3>Prueba entrar a este sitio desde tu teléfono para seguir descubriendo las sorpresas detrás de Wrth.</h3>
            </div>

            <div className='desktopWrthLogo'>
                <img src='/assets/img/LogoWrthBlooming.svg' alt='Logo WRTH' />
            </div>
        </div>
    )
}

export default DesktopView