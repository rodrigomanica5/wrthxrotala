import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { getDocs, collection, query } from 'firebase/firestore'
import Playlist from '../components/Playlist'
import Return from '../components/Return'
import SocialMedia from '../components/SocialMedia'

function TikTokContainer() {

  const [playlist, setPlaylist] = useState([])

  useEffect(() => {

    const trendingSongs = collection(db, 'TrendingSongs')
    getDocs(trendingSongs)
      .then((res) => {

        const docs = res.docs;
        const songsArray = docs.map((element) => {
          const songId = element.id;

          const song = {
            songId,
            ...element.data()
          }

          return song;
        })

        const sortedPlaylist = songsArray.sort((a, b) => a.rank - b.rank)
        setPlaylist(sortedPlaylist)
      })
  }, [])

  return (
    <div className='tiktokContainer'>
      <Return />
      <div>
        <h3 className='trendingTitle'>Tendencias en Tik Tok</h3>
        <p className='trendingDate'>Enero, 2023 en Argentina</p>
      </div>
      <Playlist playlistData={playlist} />
      <SocialMedia />
    </div>
  )
}

export default TikTokContainer