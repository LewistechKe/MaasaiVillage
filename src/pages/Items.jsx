import React, { useState } from "react"
import Item from "../components/ui/Item"

const Items = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems)

  function filterItems(filter) {
    if (filter === "LOW_TO_HIGH") {
      setItems(
        items
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      )
    }
    if (filter === "HIGH_TO_LOW") {
      setItems(
        items
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      )
    }
    if (filter === "RATING") {
      setItems(items.slice().sort((a, b) => b.rating - a.rating))
    }
  }

  return (
    <div id="items__body">
      <main id="items__main">
        <section>
          <div className="items__container">
            <div className="row">
              <div className="items__header">
                <h2 className="section__title items__header--title">
                  All Items
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={event => filterItems(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="items">
                {items.map(item => (
                  <Item item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Items
