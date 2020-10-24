import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Tab from '../components/tabRek/tab'
import SEO from '../components/SEO'

const Rekrutacja = () => {

  const data = useStaticQuery(graphql`
    query {
        kids: file(relativePath: { eq: "kids03.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }

        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(width: 30) {
                ...GatsbyImageSharpFixed_noBase64
              }
          }
        }

        allContentfulRekrutacja {
          nodes {
            childContentfulRekrutacjaInformacjeRichTextNode {
              childContentfulRichText {
                html
              }
            }
            childContentfulRekrutacjaWarunkiRekrutacjiRichTextNode {
              childContentfulRichText {
                html
              }
            }
            childContentfulRekrutacjaWynikiTextNode {
              childMarkdownRemark {
                html
              }
            }
            doPobrania {
              description
              file {
                url
                fileName
              }
            }
          }
        }

        allContentfulRekrutacjaAktualnosci (sort: {fields: date, order: DESC}){
          nodes {
            tytul
            childContentfulRekrutacjaAktualnosciTekstRichTextNode {
              childContentfulRichText {
                html
              }
            }
          }
        }
    }
    `);

  const aktualnosci = data.allContentfulRekrutacjaAktualnosci.nodes
  const content = data.allContentfulRekrutacja.nodes[0]
  const kids = data.kids.childImageSharp.fluid
  const icon = data.icon.childImageSharp.fixed

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <h1 className="first-section">Rekrutacja</h1>

        <Tab
          aktualnosci={aktualnosci}
          download={content.doPobrania}
          wazneInfo={content.childContentfulRekrutacjaInformacjeRichTextNode.childContentfulRichText.html}
          wyniki={content.childContentfulRekrutacjaWynikiTextNode.childMarkdownRemark.html}
          warunki={content.childContentfulRekrutacjaWarunkiRekrutacjiRichTextNode.childContentfulRichText.html}
          icon={icon}
        />

        <div className="rekrutacja-mobile">
          <h3>Aktualności</h3>

          {aktualnosci.map((aktualnosc) => {
            return (
              <>
                <h5>{aktualnosc.tytul}</h5>
                <div dangerouslySetInnerHTML={{ __html: aktualnosc.childContentfulRekrutacjaAktualnosciTekstRichTextNode.childContentfulRichText.html }} />
              </>
            )
          })}

          <h3>Do pobrania</h3>

          {content.doPobrania.map((download) => {
            return (
              <a href={download.file.url}>
                <Img fixed={icon}
                  alt="logo" />
                <p>{download.file.fileName}
                </p>
              </a>
            )
          })}

        </div>

      </div>

      <Img fluid={kids}
        className="footer-image"
        objectFit="cover"
        alt="kids playing the music" />
    </Layout>
  )
}

export default Rekrutacja