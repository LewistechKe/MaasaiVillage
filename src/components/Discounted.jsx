import React from "react"
import { items } from "../data"
import Item from "./ui/Item"

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Items</span>
          </h2>
          <div className="items">
            {items
              .filter(item => item.salePrice > 0)
              .slice(0, 8)
              .map(item => (
                <Item item={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discounted
