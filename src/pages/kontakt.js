import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import YAMLData from "../data/data.yaml"

import Layout from '../components/layout'
import SEO from '../components/SEO'

const Kontakt = () => {

    const data = useStaticQuery(graphql`
    query {
        kids: file(relativePath: { eq: "kids02.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
    `);

    const kids = data.kids.childImageSharp.fluid

    return (
        <Layout>
            <SEO title="Home" />
            <div className="container kontakt">
                <h1>Kontakt</h1>
                <div className="flex2 kontakt-wraper">
                    <div>
                        <h6>{YAMLData.title}
                            <br />{YAMLData.subtitle[0]}
                            <br />{YAMLData.subtitle[1]}</h6>
                        <p><br />{YAMLData.address[0]}
                            <br />{YAMLData.address[1]}</p>
                        <p><b>{YAMLData.phone}</b></p>
                        <p><b>{YAMLData.mail}</b></p>
                    </div>
                    <div>
                        <h6>Dyrektor</h6>
                        <p>s. Ewa OCZAROWSKA</p>
                        <p><b>+48 512 013 482</b></p>
                    </div>
                </div>


                <h4>Współpraca</h4>
                <div className="flex2 kontakt-wraper">
                    <div>
                        <h6>Poradnia
                            <br />psychologiczno-pedagogiczna</h6>
                        <p>ul. Bema 4
                        <br />32-600 Oświęcim</p>
                        <p><b>+48 33 843 11 62</b></p>
                    </div>
                    <div>
                        <h6>Poradnia
                            <br />logopedyczna</h6>
                        <p>ul. Bema 4
                        <br />32-600 Oświęcim</p>
                        <p>Logopeda: Renata WITKOWSKA</p>
                    </div>
                </div>
            </div>
            <Img fluid={kids}
                className="footer-image"
                objectFit="cover"
                alt="kids" />
        </Layout >
    )
}

export default Kontakt