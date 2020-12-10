import React from 'react'
import CookieConsent from 'react-cookie-consent';
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

      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics">
        <p><b>INFORMACJA DOTYCZĄCA PLIKÓW COOKIES</b></p>
        <p>Informujemy, iż w celu optymalizacji treści dostępnych w naszym serwisie, dostosowania ich do Państwa indywidualnych potrzeb korzystamy z informacji zapisanych za pomocą plików cookies na urządzeniach końcowych użytkowników. Pliki cookies użytkownik może kontrolować za pomocą ustawień swojej przeglądarki internetowej. Dalsze korzystanie z naszego serwisu internetowego, bez zmiany ustawień przeglądarki internetowej oznacza, iż użytkownik akceptuje stosowanie plików cookies.</p>
      </CookieConsent>

      <Footer />
    </div>
  )
}

export default Layout

//{isIndexPage = true ? bg : bg} 
//{props.isIndexPage === true ? "h-index" : "h-index"}