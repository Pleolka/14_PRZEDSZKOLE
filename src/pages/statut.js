import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


import Layout from '../components/layout'
import SEO from '../components/SEO'

const Statut = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulMiesiecznyWykazDydaktykiAniolki (
        sort: {
        fields:publishDate,
        order:DESC
      }
      ) {
        nodes {
          childContentfulMiesiecznyWykazDydaktykiAniolkiPiosenkaRichTextNode {
            json
          }
          childContentfulMiesiecznyWykazDydaktykiAniolkiTematykaKompleksowaRichTextNode {
            json
          }
          childContentfulMiesiecznyWykazDydaktykiAniolkiWierszRichTextNode {
            json
          }
          childContentfulMiesiecznyWykazDydaktykiAniolkiZadaniaWychowawczoDydaktyczneRichTextNode {
            json
          }
          title
          publishDate (formatString: "MMMM YYYY" locale: "pl")
        }
      }
      }
    `)

  return (
    <Layout>
      <SEO title="Statut przedszkola" />

      <div className="container">


      </div>
    </Layout>
  )
}

export default Statut

//{documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiWierszRichTextNode.json)}