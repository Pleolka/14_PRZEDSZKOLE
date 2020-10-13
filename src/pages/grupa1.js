import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


import Layout from '../components/layout'
import Dydaktyka from '../components/dydaktyka'
import SEO from '../components/SEO'

const Grupa1 = () => {

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
      <SEO title="Grupa aniołków" />

      <div className="container">

        <h1 className="group-title">Grupa Aniołków</h1>

        {data.allContentfulMiesiecznyWykazDydaktykiAniolki.nodes.map((node) => {
          return (

            <Dydaktyka
              month={node.title}
              date={node.publishDate}
              wiersz={documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiWierszRichTextNode.json)}
              piosenka={documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiPiosenkaRichTextNode.json)}
              tematyka={documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiTematykaKompleksowaRichTextNode.json)}
              zadania={documentToReactComponents(node.childContentfulMiesiecznyWykazDydaktykiAniolkiZadaniaWychowawczoDydaktyczneRichTextNode.json)}
            />

          )
        })}

      </div>
    </Layout>
  )
}

export default Grupa1