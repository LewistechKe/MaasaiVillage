import React from "react"
import LuluVector from "../assets/Lulu_Vector.png"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Runeterra's most preferred online item shop</h1>
            <h2>
              Find your dream artifact with{" "}
              <span className="purple">Mythic</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse items</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={LuluVector} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing
