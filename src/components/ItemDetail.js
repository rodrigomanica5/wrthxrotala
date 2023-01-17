import React from 'react'
import Return from './Return'
import SocialMedia from './SocialMedia'
import Video from './Video'

function ItemDetail() {
  return (
    <div className='itemDetailContainer'>
      <Return />
      <div className='productShowcaseContainer'>
        <Video />
      </div>
      <div>
        <h3>Corset</h3>
        <p className='productDescription'>Here goes the description of this corset. Care for fiber: at least 50% ecologically grown cotton. We use the Join Life label for items that have been produced using technologies and raw materials that help us reduce the environmental impact.</p>
      </div>
      <SocialMedia />
    </div>
  )
}

export default ItemDetail