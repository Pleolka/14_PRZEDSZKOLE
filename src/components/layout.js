import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Footer from './footer'
import Navbar from './navbar'
import Header from './header'

const Layout = (props) => {

  const data = useStaticQuery(graphql`
    query {
        bg: file(relativePath: { eq: "bg-medium.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3020) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        bgBig: file(relativePath: { eq: "bg-big.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3020) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
    `);

  const bg = data.bg.childImageSharp.fluid
  const bgBig = data.bgBig.childImageSharp.fluid

  return (

    <div className="layout-wraper">
      <Img
        Tag="section"
        className={props.isIndexPage === true ? "bg-top-index-img" : "bg-top-img"}
        fluid={props.isIndexPage === true ? bgBig : bg} />

      <Header className={props.isIndexPage === true ? "h-index" : ""} />
      <Navbar />

      <div className="content-wrapper">

        {props.children}

      </div>


      <Footer />
    </div>
  )
}

export default Layout

//{isIndexPage = true ? bg : bg} 
//{props.isIndexPage === true ? "h-index" : "h-index"}