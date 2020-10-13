import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from '../components/layout'
import Dydaktyka from '../components/dydaktyka'
import LeftMenu from '../components/leftMenu'
import LeftMenuContent from '../components/leftMenuContent'
import SEO from '../components/SEO'

const DlaRodzicow = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulDlaRodzicow {
            nodes {
              tytul
              childContentfulDlaRodzicowSimpleTekstTextNode {
                simpleTekst
              }
              dokumenty {
                title
                file {
                  url
                }
              }
              data(formatString: "DD MMMM yyyy", locale: "pl-PL")
              
            }
          }

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

                <h1 className="group-title">Dla Rodziców</h1>

                <div className="dlarodzicow-wrapper">
                    <LeftMenu />
                    <LeftMenuContent />
                </div>
                {data.allContentfulDlaRodzicow.nodes.map((node) => {
                    return (
                        <>
                            <Dydaktyka
                                month={node.tytul}
                                date={node.data}
                                wiersz={node.dokumenty.map((dokument) => dokument.file.url)}
                                piosenka={node.dokumenty.map((dokument) => dokument.file.url)}
                                tematyka={node.dokumenty.map((dokument) => dokument.file.url)}
                                zadania={node.dokumenty.map((dokument) => dokument.file.url)}
                            />
                            <a href={node.dokumenty.map((dokument) => dokument.file.url)}>link</a>
                        </>
                    )
                })}

            </div>
        </Layout>
    )
}

export default DlaRodzicow