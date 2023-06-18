import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Items from "./pages/Items"
import ItemInfo from "./pages/ItemInfo"
import Cart from "./pages/Cart"
import { items } from "./data"

function App() {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart([...cart, { ...item, quantity: 1 }])

    // ADDING MULTIPLE QUANTITIES OF ONE ITEM
    // const dupeItem = cart.find(cartItem => +cartItem.id === +item.id)
    // if (dupeItem) {
    //   setCart(
    //     cart.map(cartItem => {
    //       if (cartItem.id === dupeItem.id) {
    //         return {
    //           ...cartItem,
    //           quantity: cartItem.quantity + 1,
    //         }
    //       } else {
    //         return cartItem
    //       }
    //     })
    //   )
    // } else {
    //   setCart([...cart, { ...item, quantity: 1 }])
    // }
  }

  function changeQuantity(item, quantity) {
    setCart(
      cart.map(cartItem =>
        cartItem.id === item.id
          ? {
            ...cartItem,
            quantity: +quantity,
          }
          : cartItem
      )
    )
  }

  function removeItem(cartItem) {
    setCart(cart.filter(item => item.id !== cartItem.id))
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items items={items} />} />
          <Route
            path="/items/:id"
            element={
              <ItemInfo items={items} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
