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
      allContentfulWspolpracaPoradnie {
        nodes {
          nazwa
          tytul
          ulica
          miasto
          telefon
          informacjeDodatkowe
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
          dyrektor
          telefonDoDyrektora
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
  const poradnie = data.allContentfulWspolpracaPoradnie.nodes

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
            <p>{info.dyrektor}</p>
            <p>
              <b>{info.telefonDoDyrektora}</b>
            </p>
          </div>
        </div>

        <h4>Współpraca</h4>

        <div className="flex2kontakt kontakt-wraper">
          {poradnie.map(poradnia => {
            return (
              <div>
                <h5>
                  {poradnia.nazwa}
                  <br />
                  {poradnia.tytul}
                </h5>
                <p>
                  {poradnia.ulica}
                  <br />
                  {poradnia.miasto}
                </p>
                <p>
                  {poradnia.informacjeDodatkowe === null
                    ? ""
                    : poradnia.informacjeDodatkowe}
                </p>

                <p>
                  <b>{poradnia.telefon === null ? "" : poradnia.telefon}</b>
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <Img fluid={kids} className="footer-image" objectFit="cover" alt="kids" />
    </Layout>
  )
}

export default Kontakt
