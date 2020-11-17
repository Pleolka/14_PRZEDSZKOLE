import React from 'react'
import Img from 'gatsby-image'

const Personel = (props) => {

    return (
        <>
            <div className="personel-card">
                <Img fluid={props.zdj}
                    alt={props.alt}
                    key={props.key}
                    className="personel-card-img" />
                <div>
                    <p>{props.nazwa}</p>
                    <p>{props.stanowisko}</p>
                </div>
            </div>
        </>

    )
}
export default Personel