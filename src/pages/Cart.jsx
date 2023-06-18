import React from "react"
import { Link } from "react-router-dom"
import EmptyCart from "../assets/Amumu.png"

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0
    cart.forEach(item => {
      price += +(item.salePrice || item.originalPrice * item.quantity)
    })
    return price
  }

  return (
    <div id="items__body">
      <main id="items__main">
        <div className="items__container">
          <div className="row">
            <div className="item__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__item--header">Item</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map(item => {
                  return (
                    <div className="cart__item">
                      <div className="cart__item">
                        <img src={item.url} class="cart__item--img" alt="" />
                        <div className="cart__item--info">
                          <span className="cart__item--title">{item.name}</span>
                          <span className="cart__item--price">
                            ${(item.salePrice || item.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__item--remove"
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={item.quantity}
                          onChange={event =>
                            changeQuantity(item, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (item.salePrice || item.originalPrice) * item.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  )
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any items in your cart!</h2>
                  <Link to="/items">
                    <button className="btn">Browse items</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item price">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("Haven't got around to doing this yet!")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart
