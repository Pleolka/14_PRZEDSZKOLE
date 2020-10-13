import React from 'react'
import Img from 'gatsby-image'

const Card = (props) => {

    return (
        <>
            <div className="card">
                <Img fluid={props.cardImg}
                    className="card-img" />
                <div>
                    <h1>{props.cardTitle}</h1>
                    <h6>{props.cardSecondTitle}</h6>
                    <p>{props.tekst}</p>
                </div>
            </div>
        </>

    )
}
export default Card