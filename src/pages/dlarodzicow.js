import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Tab from '../components/tab/tab'
import SEO from '../components/SEO'

const DlaRodzicow = () => {

  const data = useStaticQuery(graphql`
    query {
        kids: file(relativePath: { eq: "kids01.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 900) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }

          allContentfulDlaRodzicow(sort: {fields: idNumber, order: ASC}) {
            nodes {
              data
              tytul
              idNumber
              childContentfulDlaRodzicowOpisRichTextNode {
                json
                childContentfulRichText {
                  html
                }
              }
            }
          }
      }
      
    `)

  const kids = data.kids.childImageSharp.fluid
  const content = data.allContentfulDlaRodzicow.nodes

  return (
    <Layout>
      <SEO title="Grupa aniołków" />

      <div className="container dlarodzicow">

        <h1 className="first-section">Dla Rodziców</h1>

        <Tab data={content} />

        {content.map((node) => {

          return (

            <div className="mobile-only">
              <h5>{node.tytul}</h5>
              <div className={node.tytul === "Ramowy rozkład dnia" ? "flex2-2 flexP" : ""}
                dangerouslySetInnerHTML={{ __html: node.childContentfulDlaRodzicowOpisRichTextNode.childContentfulRichText.html }}></div>
            </div>
          )
        })
        }
      </div>

      <Img fluid={kids}
        className="footer-image"
        objectFit="cover"
        alt="kids playing the music" />
    </Layout>
  )
}

export default DlaRodzicow

//{documentToReactComponents(node.childContentfulDlaRodzicowOpisRichTextNode.json)}

// dangerouslySetInnerHTML = {{
//     __html: documentToReactComponents(node.childContentfulDlaRodzicowOpisRichTextNode.childContentfulRichText.html),
// }}