import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const Statut = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulInformacjeDodatkoweOPrzedszkolu {
        edges {
          node {
            statut {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }`)

  const statutHTML = data.allContentfulInformacjeDodatkoweOPrzedszkolu.edges[0].node.statut.childMarkdownRemark.html

  return (
    <Layout>
      <SEO title="Statut przedszkola" />

      <div className="container statut"
        dangerouslySetInnerHTML={{ __html: statutHTML }}>
      </div>

    </Layout>
  )
}

export default Statut

//{documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiWierszRichTextNode.json)}