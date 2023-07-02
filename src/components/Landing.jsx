import React from "react"
import HeaderImg from "../assets/Header_Img.png"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Maasai Meuseum online item shop</h1>
            <h2>
              Find your dream artifact with{" "}
              <span className="purple">Maa-Village</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse items</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={HeaderImg} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing
