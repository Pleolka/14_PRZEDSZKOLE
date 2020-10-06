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
      imgGr1: file(relativePath: { eq: "bg-big.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgGr2: file(relativePath: { eq: "bg-small.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgGr3: file(relativePath: { eq: "bg-small.png" }) {
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
  }
  `);

  const imgGr1 = data.imgGr1.childImageSharp.fluid
  const imgGr2 = data.imgGr2.childImageSharp.fluid
  const imgGr3 = data.imgGr3.childImageSharp.fluid
  const imgJp2 = data.imgJp2.childImageSharp.fluid
  const kids1 = data.kids1.childImageSharp.fluid

  return (
    <Layout isIndexPage={true}>
      <SEO title="Home" />
      <div className="container">
        <div className="flex3-1 card-wraper">
          <CardLink
            cardTitle="Grupa Aniołków"
            dataImg={imgGr1}
            path="grupa1" />

          <CardLink
            cardTitle="Grupa Słoneczek"
            dataImg={imgGr2}
            path="grupa2" />

          <CardLink
            cardTitle="Grupa Promyczków"
            dataImg={imgGr3}
            path="grupa3" />
        </div>

        <Card cardTitle="Św. Jan Paweł II"
          cardSecondTitle="Nasz patron"
          imgLeft={imgJp2}
          tekst="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
      </div>

      <Img fluid={kids1}
        className="footer-image"
        objectFit="cover"
        alt="kids" />
    </Layout >
  )
}

export default IndexPage