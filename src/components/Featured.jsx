import React from "react"
import Item from "./ui/Item"
import { items } from "../data"

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Items</span>
          </h2>
          <div className="items">
            {items
              .filter(item => item.rating === 5)
              .slice(0, 4)
              .map(item => (
                <Item item={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
