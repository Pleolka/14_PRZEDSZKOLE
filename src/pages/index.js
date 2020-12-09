import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import CardLink from '../components/cardLink'
import Card from '../components/card'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
      imgGr1: file(relativePath: { eq: "angel.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgGr2: file(relativePath: { eq: "sun.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgGr3: file(relativePath: { eq: "sunray.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgJp2: file(relativePath: { eq: "jp2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      kids1: file(relativePath: { eq: "kids1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      allContentfulJanPawelIi {
        nodes {
          postac
          zdj {
            fluid (maxWidth: 400, quality: 100) {
              ...GatsbyContentfulFluid
            }
            title
          }
          opis {
            childMarkdownRemark {
              html
            }
          }
        }
      }

      allContentfulGrupy(sort: {order: ASC, fields: nrGrupy}) {
        nodes {
          nrGrupy
          nazwaGrupy
          childContentfulGrupyOpiekunowieGrupyTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
  }
  `);

  const imgGr1 = data.imgGr1.childImageSharp.fluid
  const imgGr2 = data.imgGr2.childImageSharp.fluid
  const imgGr3 = data.imgGr3.childImageSharp.fluid
  //const imgJp2 = data.imgJp2.childImageSharp.fluid
  const kids1 = data.kids1.childImageSharp.fluid
  const jp2 = data.allContentfulJanPawelIi.nodes[0]

  return (
    <Layout isIndexPage={true}>
      <SEO title="Home" />
      <div className="container">
        <div className="flex3-1 card-wrapper">

          {data.allContentfulGrupy.nodes.map((node) => {

            let imgCard = "";

            switch (node.nrGrupy) {
              case 1: imgCard = imgGr1;
                break;

              case 2:
                imgCard = imgGr2;
                break;

              case 3:
                imgCard = imgGr3;
                break;

              default: // Do nothing
            }

            return (
              <CardLink
                cardTitle={node.nazwaGrupy}
                cardText={node.childContentfulGrupyOpiekunowieGrupyTextNode.childMarkdownRemark.html}
                dataImg={imgCard}
                path={`grupa${node.nrGrupy}`} />
            )
          })}

        </div>

        <Card cardTitle={jp2.postac}
          cardSecondTitle="Nasz patron"
          cardImg={jp2.zdj.fluid}
          alt={jp2.zdj.title}
          tekstHtml={jp2.opis.childMarkdownRemark.html} />
      </div>

      <Img fluid={kids1}
        className="footer-image"
        objectFit="cover"
        alt="kids" />
    </Layout >
  )
}

export default IndexPage