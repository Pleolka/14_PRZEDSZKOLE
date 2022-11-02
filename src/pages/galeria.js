import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import CardBig from "../components/cardBig"

const Galeria = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGaleria(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          linkkDoGalerii
          intro_foto {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }

      kids: file(relativePath: { eq: "kids1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const kids = data.kids.childImageSharp.fluid
  const cardData = data.allContentfulGaleria.nodes

  return (
    <Layout>
      <SEO title="Galeria" />
      <div className="container">
        <h1 className="first-section">Galeria</h1>

        <div className="aktualnosci flex5">
          {cardData.map(node => {
            return (
              <a href={node.linkkDoGalerii} target="blank">
                <div>
                  <h4>{node.title}</h4>
                </div>

                <span>
                  <Img
                    fluid={node.intro_foto.fluid}
                    objectFit="cover"
                    alt={node.title}
                  />
                </span>
              </a>
            )
          })}
        </div>
      </div>

      <Img
        fluid={kids}
        className="footer-image"
        objectFit="contain"
        alt="kids playing the music"
      />
    </Layout>
  )
}

export default Galeria
