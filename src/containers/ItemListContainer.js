import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonDetail from '../components/ButtonDetail'
import ButtonTrends from '../components/ButtonTrends'
import Card from '../components/Card'


function ItemListContainer() {

  const [product, setProduct] = useState({})

  const { productId } = useParams()

  useEffect(() => {

    const promise = fetch("https://mocki.io/v1/6e2d5081-2ae3-49a8-a523-2f9cf0d5a251")

    promise.then(data => data.json())
    .then((array) => {
      setProduct(array.find((x) => x.id == productId))
    })

  }, [productId])

  return (
    <div className='itemListContainer'>
      <Card product={product} />
      <div className='buttonsContainer'>
        <ButtonTrends productId={product.id}/>
        <ButtonDetail productId={product.id} />
      </div>
    </div>
  )
}

export default ItemListContainer