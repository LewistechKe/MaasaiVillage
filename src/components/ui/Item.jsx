import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import Price from "./Price"

const Item = ({ item }) => {
  const [img, setImg] = useState()

  useEffect(() => {
    const image = new Image()
    image.src = item.url
    image.onload = () => {
      setTimeout(() => {
        setImg(image)
      }, 300)
    }
  })

  return (
    <div className="item">
      {img ? (
        <>
          <Link to={`/items/${item.id}`}>
            <figure className="item__img--wrapper">
              <img src={img.src} alt="" className="item__img" />
            </figure>
          </Link>
          <div className="item__title">
            <Link to={`/items/${item.id}`} className="item__title--link">
              {item.name}
            </Link>
          </div>
          <Rating rating={item.rating} />
          <Price
            salePrice={item.salePrice}
            originalPrice={item.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="item__img--skeleton"></div>
          <div className="skeleton item__title--skeleton"></div>
          <div className="skeleton item__rating--skeleton"></div>
          <div className="skeleton item__price--skeleton"></div>
        </>
      )}
    </div>
  )
}

export default Item
