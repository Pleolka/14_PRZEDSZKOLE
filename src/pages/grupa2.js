import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Dydaktyka from "../components/dydaktyka"
import SEO from "../components/SEO"
import Tab from "../components/tabDydaktyka/tab"

const Grupa2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGrupy(filter: { nrGrupy: { eq: 2 } }) {
        nodes {
          childContentfulGrupyOpisGrupyTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }

      allContentfulDydaktyka(
        filter: { grupa: { eq: "Grupa Słoneczek" } }
        sort: { fields: date, order: DESC }
        limit: 12
      ) {
        nodes {
          grupa
          date(formatString: "YYYY", locale: "PL")
          miesiac
          opis {
            childMarkdownRemark {
              html
            }
          }
          piosenka {
            childMarkdownRemark {
              html
            }
          }
          tematyka {
            childMarkdownRemark {
              html
            }
          }
          wiersz {
            childMarkdownRemark {
              html
            }
          }
          katecheza {
            childMarkdownRemark {
              html
            }
          }
          dydaktyka {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Grupa słoneczek" />

      <div className="container">
        <h1 className="group-title">Grupa Słoneczek</h1>
        <div
          className="group-intro"
          dangerouslySetInnerHTML={{
            __html:
              data.allContentfulGrupy.nodes[0]
                .childContentfulGrupyOpisGrupyTextNode.childMarkdownRemark.html,
          }}
        ></div>

        {data.allContentfulDydaktyka.nodes.map(node => {
          return (
            <>
              <Tab
                miesiac={node.miesiac}
                date={node.date}
                group={node.grupa}
                opis={
                  node.opis == null ? "" : node.opis.childMarkdownRemark.html
                }
                wiersz={
                  node.wiersz == null
                    ? ""
                    : node.wiersz.childMarkdownRemark.html
                }
                piosenka={
                  node.piosenka == null
                    ? ""
                    : node.piosenka.childMarkdownRemark.html
                }
                tematyka={
                  node.tematyka == null
                    ? ""
                    : node.tematyka.childMarkdownRemark.html
                }
                dydaktyka={
                  node.dydaktyka == null
                    ? ""
                    : node.dydaktyka.childMarkdownRemark.html
                }
                katecheza={
                  node.katecheza === null
                    ? ""
                    : node.katecheza.childMarkdownRemark.html
                }
              />
              <Dydaktyka
                month={node.miesiac}
                date={node.date}
                group={node.grupa}
                opis={
                  node.opis == null ? "" : node.opis.childMarkdownRemark.html
                }
                wiersz={
                  node.wiersz == null
                    ? ""
                    : node.wiersz.childMarkdownRemark.html
                }
                piosenka={
                  node.piosenka == null
                    ? ""
                    : node.piosenka.childMarkdownRemark.html
                }
                tematyka={
                  node.tematyka == null
                    ? ""
                    : node.tematyka.childMarkdownRemark.html
                }
                dydaktyka={
                  node.dydaktyka == null
                    ? ""
                    : node.dydaktyka.childMarkdownRemark.html
                }
                katecheza={
                  node.katecheza === null
                    ? ""
                    : node.katecheza.childMarkdownRemark.html
                }
              />
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default Grupa2
