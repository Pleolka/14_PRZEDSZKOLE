import React from 'react'
import Img from 'gatsby-image'

const Card = (props) => {

    return (
        <div className="card">
            <Img fluid={props.imgLeft}
                className="card-img-left" />
            <Img fluid={props.imgTop}
                className="card-img-top" />
            <div>
                <h1>{props.cardTitle}</h1>
                <h6>{props.cardSecondTitle}</h6>
                <p>{props.tekst}</p>
            </div>
        </div>

    )
}
export default Card