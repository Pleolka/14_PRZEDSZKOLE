import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {

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
        <header>
            <div className="container header-wrapper">
                <div className="logo-header-wraper">
                    <Img fixed={logo} className="logo-header"
                        alt="logo" />
                    <div>
                        <h1>Przedszkole nr 8</h1>
                        <h5>im. św. Jana Pawła II - Sióstr Serafitek w oświęcimiu</h5>
                    </div>
                </div>
                <div>
                    <h6>Tel. +48 33 842 33 20<br />
                    przedsznr8@bielsko.opoka.org.pl</h6>
                </div>
            </div>
        </header>
    )
}
export default Header