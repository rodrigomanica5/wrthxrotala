import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Return from './Return'
import SocialMedia from './SocialMedia'
import Video from './Video'

function ItemDetail() {

  const [product, setProduct] = useState({})

  const { productId } = useParams()

  useEffect(() => {
    
    const promise = fetch("https://mocki.io/v1/6fe576bd-b939-4cdf-ac6b-127e6e9d150f")
    
    promise.then(data => data.json())
    .then((array) => {
      setProduct(array.find((x) => x.id == productId))
    })

  }, [productId])

  if (productId == "017yx2") {
  }

  return (
    <div className='itemDetailContainer'>
      <Return productURL={product.id}/>
      <div className={productId == "017yx2" ? "" : "card"}>
        {
          (productId == "017yx2")
          ? <img src='/assets/img/TooPerfect.png' alt='Too Perfect' />
          : <Video product={product} />
        }
      </div>
      <div className='descriptionContainer'>
        <h3>{product.name}</h3>
        <p className='productDescription'>Here goes the description of this corset. Care for fiber: at least 50% ecologically grown cotton. We use the Join Life label for items that have been produced using technologies and raw materials that help us reduce the environmental impact.</p>
      </div>
      <SocialMedia />
    </div>
  )
}

export default ItemDetail