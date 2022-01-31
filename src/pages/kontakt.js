import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const Kontakt = () => {
  const data = useStaticQuery(graphql`
    query {
      kids: file(relativePath: { eq: "kids02.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      allContentfulInformacjeDodatkoweOPrzedszkolu {
        nodes {
          adres {
            adres
          }
          telefon
          title
          mail
          godzinyOtwarcia
          subtitle {
            subtitle
          }
        }
      }
    }
  `)

  const kids = data.kids.childImageSharp.fluid
  const info = data.allContentfulInformacjeDodatkoweOPrzedszkolu.nodes[0]

  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="container kontakt">
        <h1>Kontakt</h1>
        <div className="flex2kontakt kontakt-wraper">
          <div>
            <h5>
              {info.title}
              <br />
              {info.subtitle.subtitle}
            </h5>
            <p>{info.adres.adres}</p>
            <p>
              <b>{info.telefon}</b>
            </p>
            <p>
              <b>{info.mail}</b>
            </p>
          </div>
          <div>
            <h5>Dyrektor</h5>
            <p>s. Ewa OCZKOWSKA</p>
            <p>
              <b>+48 512 013 482</b>
            </p>
          </div>
        </div>

        <h4>Współpraca</h4>
        <div className="flex2kontakt kontakt-wraper">
          <div>
            <h5>
              Poradnia
              <br />
              psychologiczno-pedagogiczna
            </h5>
            <p>
              ul. Bema 4
              <br />
              32-600 Oświęcim
            </p>
            <p>
              <b>+48 33 843 11 62</b>
            </p>
          </div>
          <div>
            <h5>
              Poradnia
              <br />
              logopedyczna
            </h5>
            <p>
              ul. Bema 4
              <br />
              32-600 Oświęcim
            </p>
            <p>Logopeda: Renata WITKOWSKA</p>
          </div>
        </div>
      </div>
      <Img fluid={kids} className="footer-image" objectFit="cover" alt="kids" />
    </Layout>
  )
}

export default Kontakt
