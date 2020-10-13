import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const CardLink = (props) => {

    return (
        <Link className="card-link"
            to={props.path}>
            <div className="card-text">
                <h4>{props.cardTitle}</h4>
                <div className="card-name">
                    <p>{props.cardName1}</p>
                    <p>{props.cardName2}</p>
                </div>
            </div>
            <div className="card-link-img">
                <Img fluid={props.dataImg}
                    objectFit="contain"
                    alt="group picture" />
            </div>
        </Link>

    )
}
export default CardLink