import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby'

const CardBig = (props) => {

    const fotos = props.cardFoto.map((zdj) =>
        <span>
            <Img fluid={zdj.fluid}
                objectFit="contain"
                alt={zdj.title}
            />
        </span>);

    return (
        <>
            <div className="card-big">

                <div className="card-big-content">
                    <div>
                        <h4>{props.cardTitle}</h4>
                        <h6>{props.cardDate}</h6>
                    </div>

                    <p>{props.cardTekst}</p>
                </div>
                <div className="card-big-img">
                    {fotos}
                </div>
            </div>
        </>

    )
}

CardBig.propTypes = {
    cardTitle: PropTypes.string,
    cardDate: PropTypes.node,

}

CardBig.defaultProps = {
    cardTitle: "Nie podano tytułu",
    vote_average: "-",
}

export default CardBig