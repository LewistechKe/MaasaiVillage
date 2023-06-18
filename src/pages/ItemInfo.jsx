import React from "react"
import { Link, useParams } from "react-router-dom"
import Rating from "../components/ui/Rating"
import Price from "../components/ui/Price"
import Item from "../components/ui/Item"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ItemInfo = ({ items, addToCart, cart }) => {
  const { id } = useParams()
  const item = items.find(item => +item.id === +id)

  function addItemToCart(item) {
    addToCart(item)
  }

  function itemExistsOnCart() {
    return cart.find(item => item.id === +id)
  }

  return (
    <div id="items__body">
      <main id="items__main">
        <div className="items__container">
          <div className="row">
            <div className="item__selected--top">
              <Link to="/items" className="item__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/items" className="item__link">
                <h2 className="item__selected--title--top">Items</h2>
              </Link>
            </div>
            <div className="item__selected">
              <figure className="item__selected--figure">
                <img src={item.url} alt="" className="item__selected--img" />
              </figure>
              <div className="item__selected--description">
                <h2 className="item__selected--title">{item.name}</h2>
                <Rating rating={item.rating} />
                <div className="item__selected--price">
                  <Price
                    originalPrice={item.originalPrice}
                    salePrice={item.salePrice}
                  />
                </div>
                <div className="item__summary">
                  <h3 className="item__summary--title">Stats</h3>
                  <p className="item__summary--para">{item.stats}</p>
                </div>
                <div className="item__summary">
                  <h3 className="item__summary--title">Description</h3>
                  <p className="item__summary--para">{item.description}</p>
                </div>
                {itemExistsOnCart() ? (
                  <Link to={`/cart`} className="item__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addItemToCart(item)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="items__container">
          <div className="row">
            <div className="item__selected--top">
              <h2 className="item__selected--title--top">Recommended Items</h2>
            </div>
            <div className="items">
              {items
                .filter(item => item.rating === 5 && +item.id !== +id)
                .slice(0, 4)
                .map(item => (
                  <Item item={item} key={item.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ItemInfo
