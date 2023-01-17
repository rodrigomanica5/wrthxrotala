import React from 'react'
import ButtonDetail from '../ButtonDetail'
import ButtonTikTok from '../ButtonTiktok'
import Card from '../Card'

function ItemListContainer() {
  return (
    <div className='itemListContainer'>
      <Card />
      <div className='buttonsContainer'>
        <ButtonTikTok />
        <ButtonDetail />
      </div>
    </div>
  )
}

export default ItemListContainer