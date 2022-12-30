import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const CardBig = props => {
  return (
    <>
      <div className="card-big">
        <div className="card-big-content">
          <div>
            <h4>{props.cardTitle}</h4>
            <h6>{props.cardDate}</h6>
          </div>

          {props.zdjMini === null ? (
            <p>{props.cardTekst === null ? "" : props.cardText}</p>
          ) : (
            <div className="imgText">
              <Img
                fluid={props.zdjMini.fluid}
                objectFit="contain"
                alt={props.zdjMini.title}
              />
              <div>
                <p>{props.cardTekst}</p>
              </div>
            </div>
          )}
        </div>

        {props.videoSrcURL === "" ? (
          <></>
        ) : (
          <div className="iframe-container">
            <iframe
              src={props.videoSrcURL}
              title={props.videoTitle}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        )}

        <div className="card-big-img">
          <span>
            {props.plakat.title === "tech" ? (
              <></>
            ) : (
              <Img
                fluid={props.plakat === null ? "" : props.plakat.fluid}
                objectFit="contain"
                alt={props.plakat === null ? "" : props.plakat.title}
              />
            )}
          </span>
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
