import React from "react"

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="item__price">
      {salePrice ? (
        <>
          <span className="item__price--normal">{originalPrice}g</span>{" "}
          {salePrice}g
        </>
      ) : (
        <>{originalPrice}g</>
      )}
    </div>
  )
}

export default Price
