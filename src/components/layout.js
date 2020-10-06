import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


import Footer from './footer'
import Navbar from './navbar'
import Header from './header'

const Layout = (props) => {

  const data = useStaticQuery(graphql`
    query {
        bgIndex: file(relativePath: { eq: "bg-big.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3020) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        bgOther: file(relativePath: { eq: "bg-small.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3020) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
    `);

  const bgOther = data.bgOther.childImageSharp.fluid
  const bgIndex = data.bgIndex.childImageSharp.fluid

  return (
    <div className="content-wraper">
      <BackgroundImage
        Tag="section"
        className="bg-img"
        fluid={props.isIndexPage
          ? bgIndex : bgOther}>

        <Header />
        <Navbar />

        {props.children}

      </BackgroundImage>

      <Footer />
    </div>
  )
}

export default Layout

//<Img className="bgImg" fluid={data.background.childImageSharp.fluid} />