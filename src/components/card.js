import React from "react"
import Img from "gatsby-image"

const Card = props => {
  return (
    <>
      <div className="card flex2">
        <Img
          fluid={props.cardImg}
          className="card-img"
          alt={props.alt}
          objectFit="contain"
        />
        <div>
          <h1>{props.cardTitle}</h1>
          <h5>{props.cardSecondTitle}</h5>
          <p>{props.tekst}</p>
          <div dangerouslySetInnerHTML={{ __html: props.tekstHtml }}></div>
        </div>
      </div>
    </>
  )
}
export default Card
