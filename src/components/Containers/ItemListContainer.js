import React from 'react'
import ButtonDetail from '../ButtonDetail'
import ButtonTikTok from '../ButtonTiktok'
import Card from '../Card'

function ItemListContainer() {
  return (
    <div className='itemListContainer'>
      <Card />
      <ButtonTikTok />
      <ButtonDetail />
    </div>
  )
}

export default ItemListContainer