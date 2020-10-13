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
    }
    `);

  const bg = data.bg.childImageSharp.fluid

  return (
    <div className="layout-wraper">
      <Img
        Tag="section"
        className="bg-top-img"
        fluid={bg} />

      <Header className />
      <Navbar />

      <div className="content-wrapper">

        {props.children}

      </div>


      <Footer />
    </div>
  )
}

export default Layout
