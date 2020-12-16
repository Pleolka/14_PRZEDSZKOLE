import React from 'react'
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
        allContentfulInformacjeDodatkoweOPrzedszkolu {
            nodes {
              adres {
                adres
              }
              telefon
              title
              mail
              godzinyOtwarcia
              subtitle {
                subtitle
              }
            }
          }
    }`);

    const logo = data.logo.childImageSharp.fixed
    const info = data.allContentfulInformacjeDodatkoweOPrzedszkolu.nodes[0]

    return (
        <header className={props.className}>
            <div className="container header-wrapper">
                <div className="logo-header-wraper">
                    <div className="logo-header">
                        <Img fixed={logo}
                            alt="logo" />
                    </div>
                    <div>
                        <h1>{info.title}</h1>
                        <h5>{info.subtitle.subtitle}</h5>
                    </div>
                </div>


                <h6>Tel.: {info.telefon}<br />
                    {info.mail}</h6>

            </div>
        </header>
    )
}
export default Header