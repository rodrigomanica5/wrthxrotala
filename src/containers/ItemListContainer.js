import React from 'react'
import ButtonDetail from '../components/ButtonDetail'
import ButtonTikTok from '../components/ButtonTiktok'
import Card from '../components/Card'

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