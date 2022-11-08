import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import CardBig from "../components/cardBig"

const Aktualnosci = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAktualnosci(
        sort: { fields: data, order: DESC }
        filter: { data: { lt: "31 stycznia 2019" } }
      ) {
        nodes {
          data(formatString: "DD MMMM YYYY", locale: "pl")
          tytul
          childContentfulAktualnosciTekstRichTextNode {
            json
          }
          plakat {
            title
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          youTubeLink
          zdjMini {
            title
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
  const cardData = data.allContentfulAktualnosci.nodes

  return (
    <Layout>
      <SEO title="Aktualności" />
      <div className="container">
        <h1 className="first-section">Aktualności</h1>

        {cardData.map(node => {
          return (
            <CardBig
              videoSrcURL={
                node.youTubeLink == null
                  ? ""
                  : node.youTubeLink.replace(
                      "https://youtu.be/",
                      "https://www.youtube.com/embed/"
                    )
              }
              videiTitle="Przedszkole nr 8"
              zdjMini={node.zdjMini}
              plakat={node.plakat}
              cardTitle={node.tytul}
              cardDate={node.data}
              cardTekst={
                node.childContentfulAktualnosciTekstRichTextNode === null
                  ? ""
                  : documentToReactComponents(
                      node.childContentfulAktualnosciTekstRichTextNode.json
                    )
              }
            />
          )
        })}
      </div>

      <Img
        fluid={kids}
        className="footer-image"
        objectFit="cover"
        alt="kids playing the music"
      />
    </Layout>
  )
}

export default Aktualnosci
