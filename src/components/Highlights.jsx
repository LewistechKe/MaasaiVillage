import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Highlight from "./ui/Highlight"

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Mythic</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="award" />}
              title="Highest Quality"
              para="We carry only the finest items crafted and graded across the realm."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="wand-magic-sparkles" />}
              title="100+ Items"
              para="Mythic has items across every category to serve your exact needs."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="coins" />}
              title="Affordable"
              para="Short on coin? Get your hands on items as cheap as 50 gold."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
