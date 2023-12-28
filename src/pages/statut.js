import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const Statut = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }

      allContentfulInformacjeDodatkoweOPrzedszkolu {
        edges {
          node {
            statutDoPobrania {
              description
              file {
                url
                fileName
              }
            }
            statut {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  const statutHTML =
    data.allContentfulInformacjeDodatkoweOPrzedszkolu.edges[0].node.statut
      .childMarkdownRemark.html

  return (
    <Layout>
      <SEO title="Statut przedszkola" />

      <div
        className="container statut"
        dangerouslySetInnerHTML={{ __html: statutHTML }}
      ></div>

      <h3>Do pobrania</h3>

      <a
        href={
          data.allContentfulInformacjeDodatkoweOPrzedszkolu.edges[0].node
            .statutDoPobrania.file.url
        }
      >
        <Img fixed={data.icon.childImageSharp.fixed} alt="logo" />
        <p>
          {
            data.allContentfulInformacjeDodatkoweOPrzedszkolu.edges[0].node
              .statutDoPobrania.file.fileName
          }
        </p>
      </a>
    </Layout>
  )
}

export default Statut

//{documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiWierszRichTextNode.json)}
