import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Return from './Return'
import SocialMedia from './SocialMedia'
import Video from './Video'

function ItemDetail() {

  const [product, setProduct] = useState({})

  const { productId } = useParams()

  useEffect(() => {
    
    const promise = fetch("https://mocki.io/v1/6e2d5081-2ae3-49a8-a523-2f9cf0d5a251")
    
    promise.then(data => data.json())
    .then((array) => {
      setProduct(array.find((x) => x.id == productId))
    })

  }, [productId])

  // if (productId == "017yx2") {
  // }

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
        <p className='productDescription'>{product.description}</p>
      </div>
      <SocialMedia />
    </div>
  )
}

export default ItemDetail