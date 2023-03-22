import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonDetail from '../components/ButtonDetail'
import ButtonTrends from '../components/ButtonTrends'
import Card from '../components/Card'


function ItemListContainer() {

  const [product, setProduct] = useState({})

  const { productId } = useParams()

  useEffect(() => {

    const promise = fetch("https://mocki.io/v1/6fe576bd-b939-4cdf-ac6b-127e6e9d150f")

    promise.then(data => data.json())
    .then((array) => {
      setProduct(array.find((x) => x.id == productId))
    })

  }, [productId])

  console.log(product);

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