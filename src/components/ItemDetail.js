import React from 'react'
import Return from './Return'
import SocialMedia from './SocialMedia'
import Video from './Video'

function ItemDetail() {
  return (
    <div className='itemDetailContainer'>
      <Return/>
      <Video />
      <h3>Corset</h3>
      <p>Here goes the description of this corset. Care for fiber: at least 50% ecologically grown cotton. We use the Join Life label for items that have been produced using technologies and raw materials that help us reduce the environmental impact.</p>
      <SocialMedia />
    </div>
  )
}

export default ItemDetail