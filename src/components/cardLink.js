import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const CardLink = (props) => {

    return (
        <Link className="card-link"
            to={props.path}>
            <h1>{props.cardTitle}</h1>
            <p>{props.tekst}</p>
            <Img fluid={props.dataImg} />
        </Link>

    )
}
export default CardLink