import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import CardBig from '../components/cardBig'

const Rekrutacja = () => {

  const data = useStaticQuery(graphql`
    query {
        kids: file(relativePath: { eq: "kids03.png" }) {
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
      <div className="container">
        <h1 className="first-section">Rekrutacja</h1>

      </div>

      <Img fluid={kids}
        className="footer-image"
        objectFit="cover"
        alt="kids playing the music" />
    </Layout>
  )
}

export default Rekrutacja