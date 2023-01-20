import React from 'react'

function Songs({ song }) {

    const { rank, img, name, artist } = song;

    return (
        <div className='songCard'>
            <p className='songRank'>{rank}</p>
            <img src={img} alt={name} />
            <div className='songDetails'>
                <p className='songName'>{name}</p>
                <p className='songArtist'>{artist}</p>
            </div>
        </div>
    )
}

export default Songs