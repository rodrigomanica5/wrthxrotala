import React from 'react'
import Return from '../components/Return'
import SocialMedia from '../components/SocialMedia'
import TrendsCard from '../components/TrendsCard'
import { useParams } from 'react-router-dom'

function TrendsContainer() {

  const { productId } = useParams()

  return (
    <div className='trendsContainer'>
      <Return productURL={productId} />
      <div className='trendsHeader'>
        <h3>Inspiración</h3>
        <p>#Inspo, #Tendencias</p>
      </div>
      <TrendsCard />
      <SocialMedia />
    </div>
  )
}

export default TrendsContainer