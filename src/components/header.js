import React from 'react'
import YAMLData from "../data/data.yaml"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Header = (props) => {

    const data = useStaticQuery(graphql`
    query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 235, height: 225) {
                ...GatsbyImageSharpFixed_noBase64
              }
          }
        }
    }
    `);
    const logo = data.logo.childImageSharp.fixed

    return (
        <header className={props.className}>
            <div className="container header-wrapper">
                <div className="logo-header-wraper">
                    <div className="logo-header">
                        <Img fixed={logo}
                            alt="logo" />
                    </div>
                    <div>
                        <h1>{YAMLData.title}</h1>
                        <h5>{YAMLData.subtitle[0]} - {YAMLData.subtitle[1]}</h5>
                    </div>
                </div>


                <h6>Tel.: {YAMLData.phone}<br />
                    {YAMLData.mail}</h6>

            </div>
        </header>
    )
}
export default Header