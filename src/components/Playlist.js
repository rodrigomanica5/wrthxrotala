import React from 'react'
import Songs from './Songs'

function Playlist({ playlistData }) {

    if (playlistData.length > 0) {
        return (
            <>
                <div className='playlistTable'>
                    {
                        playlistData.map((element, index) => {
                            return <Songs key={index} song={element} />
                        })
                    }
                </div>

                <p className='source'>Source: source goes here.</p>
            </>
        )
    }

    return (
        <div>
            <h1>Empty</h1>
        </div>
    )
}

export default Playlist