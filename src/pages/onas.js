import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Tab from "../components/tabONas/tab"
import Personel from "../components/personel"
import SEO from "../components/SEO"

const Onas = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPersonel(sort: { fields: createdAt, order: ASC }) {
        nodes {
          nazwa
          stanowisko
          zdjecie {
            title
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
      kidsMusic: file(relativePath: { eq: "kidsMusic.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      allContentfulONas {
        nodes {
          tyul
          hymn {
            childMarkdownRemark {
              html
            }
          }
          oPrzedszkolu {
            childMarkdownRemark {
              html
            }
          }
          okazje {
            childMarkdownRemark {
              html
            }
          }
          poznawanie {
            childMarkdownRemark {
              html
            }
          }
          umiejetnosci {
            childMarkdownRemark {
              html
            }
          }
          historia {
            childMarkdownRemark {
              html
            }
          }
          zdjecia {
            title
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const kidsMusic = data.kidsMusic.childImageSharp.fluid
  const personel = data.allContentfulPersonel.nodes
  const oNas = data.allContentfulONas.nodes[0]
  const oPrzedszkolu = oNas.oPrzedszkolu.childMarkdownRemark.html
  const hymn = oNas.hymn.childMarkdownRemark.html
  const historia = oNas.historia.childMarkdownRemark.html
  const poznawanie = oNas.poznawanie.childMarkdownRemark.html
  const umiejetnosci = oNas.umiejetnosci.childMarkdownRemark.html
  const okazje = oNas.okazje.childMarkdownRemark.html
  const zdjecia = oNas.zdjecia

  const list = {
    name1:
      "Dziecko uczęszczające do naszego przedszkola będzie nabywało umiejętności w zakresie:",

    name2:
      "Dziecko uczęszczające do naszego przedszkola będzie mogło poznawać:",

    name3: "Dziecko uczęszczające do naszego przedszkola będzie miało okazję:",
  }

  return (
    <Layout>
      <SEO title="O nas" />
      <div className="onas">
        <div className="container">
          <Tab
            className="mobile-no"
            oPrzedszkolu={oPrzedszkolu}
            historia={historia}
            hymn={hymn}
            okazje={okazje}
            poznawanie={poznawanie}
            umiejetnosci={umiejetnosci}
            zdjecia={zdjecia}
            personel={personel}
            okazjeName={list.name3}
            poznawanieName={list.name2}
            umiejetnosciName={list.name1}
          />
        </div>

        <div className="mobile-only">
          <h1 className="first-section">O przedszkolu</h1>

          <div
            className="div-text container"
            dangerouslySetInnerHTML={{ __html: oPrzedszkolu }}
          />

          <div className="dydaktyka container">
            <p>
              <b>{list.name1}</b>
            </p>
            <div
              className="div-text"
              dangerouslySetInnerHTML={{ __html: umiejetnosci }}
            />

            <p>
              <b>{list.name2}</b>
            </p>
            <div
              className="div-text"
              dangerouslySetInnerHTML={{ __html: poznawanie }}
            />

            <p>
              <b>{list.name3}</b>
            </p>
            <div
              className="div-text"
              dangerouslySetInnerHTML={{ __html: okazje }}
            />
          </div>

          <h1>Personel przedszkola</h1>
          <div className="flex4-2-2 personel-wrapper container">
            {personel.map(node => {
              return (
                <Personel
                  nazwa={node.nazwa}
                  stanowisko={node.stanowisko}
                  zdj={node.zdjecie.fluid}
                  alt={node.zdjecie.title}
                  key={node.zdjecie.fluid.src}
                />
              )
            })}
          </div>

          <h1>Zdjęcia przedszkola</h1>

          <div>
            {zdjecia.map(zdj => {
              return (
                <div>
                  <Img fluid={zdj.fluid} objectFit="contain" alt={zdj.title} />
                  <p>{zdj.title}</p>
                </div>
              )
            })}
          </div>

          <div className="section-color">
            <div className="container">
              <h1>Historia przedszkola</h1>
              <div
                className="div-text"
                dangerouslySetInnerHTML={{ __html: historia }}
              />
            </div>
          </div>

          <div className="container">
            <h1>Hymn przedszkola</h1>
            <div
              className="div-text"
              dangerouslySetInnerHTML={{ __html: hymn }}
            />
          </div>
        </div>

        <Img
          fluid={kidsMusic}
          className="footer-image"
          objectFit="cover"
          alt="kids playing the music"
        />
      </div>
    </Layout>
  )
}

export default Onas
