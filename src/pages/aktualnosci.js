import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const Aktualnosci = () => {

    const data = useStaticQuery(graphql`
    query {
        kids1: file(relativePath: { eq: "kids1.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        kids2: file(relativePath: { eq: "bg-small.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
    `);

    const kids1 = data.kids1.childImageSharp.fluid
    const kids2 = data.kids2.childImageSharp.fluid

    return (
        <Layout>
            <SEO title="Home" />
            <div className="container">
                <h1>Aktualnosci</h1>
                <h1>Aktualnosci</h1>
                <h1>Aktualnosci</h1>
                <Img fluid={kids1}
                    className="footer-image"
                    objectFit="cover"
                    alt="kids" />
            </div>
        </Layout>
    )
}

export default Aktualnosci