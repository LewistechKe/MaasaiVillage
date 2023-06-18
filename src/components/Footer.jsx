import React from "react"
import { Link } from "react-router-dom"
import MythicLogo from "../assets/Mythic.png"

const Footer = () => {
  return (
    <footer className="container">
      <div className="row row__column">
        <Link to="/">
          <figure className="footer__logo">
            <img src={MythicLogo} alt="" className="footer__logo--img" />
          </figure>
        </Link>
        <div className="footer__list">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <span className="footer__link no-cursor">About</span>
          <Link to="/items" className="footer__link">
            Items
          </Link>
          <Link to="/cart" className="footer__link">
            Cart
          </Link>
        </div>
        <div className="footer__copyright">Copyright &copy; 2022 Library</div>
      </div>
    </footer>
  )
}

export default Footer
