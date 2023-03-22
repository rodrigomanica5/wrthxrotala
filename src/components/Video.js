import React from 'react'

function Video({product}) {

    return (
        <video className='productShowcase' autoPlay loop muted src={`/assets/videos/${product.id == "011yq1" ? "Rotala_CorsetFlores360_Naranja.mp4" : "Rotala_CorsetFlores360.mp4"}`}></video>
    )
}

export default Video