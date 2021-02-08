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

        contentfulAsset(id: {eq: "6dfeafec-a588-5d9d-a51a-05a5717621b6"}) {
          title
          id
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }

        allContentfulRekrutacjaAktualnosci (sort: {fields: date, order: DESC}, filter: {date: {lt: "31 stycznia 2019"}}){
          nodes {
            tytul
            date(formatString: "DD MMMM YYYY", locale: "pl")
            obraz {
              title
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
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
  const tabRekrutacja = data.contentfulAsset

  return (
    < Layout >
      <SEO title="Rekrutacja" />
      <div className="container">
        <h1 className="first-section">Rekrutacja</h1>
        <Tab
          aktualnosci={aktualnosci}
          download={content.doPobrania}
          wazneInfo={content.childContentfulRekrutacjaInformacjeRichTextNode.childContentfulRichText.html}
          wyniki={content.childContentfulRekrutacjaWynikiTextNode.childMarkdownRemark.html}
          warunki={content.childContentfulRekrutacjaWarunkiRekrutacjiRichTextNode.childContentfulRichText.html}
          icon={icon}
          tabRekrutacja={tabRekrutacja}
        />

        <div className="rekrutacja-mobile">
          <h3>Aktualności</h3>

          {aktualnosci.map((aktualnosc) => {
            return (
              <>
                <h5>{aktualnosc.tytul}</h5>
                <div dangerouslySetInnerHTML={{ __html: aktualnosc.childContentfulRekrutacjaAktualnosciTekstRichTextNode.childContentfulRichText.html }} />

                {aktualnosc.obraz === null ?
                  <></>
                  :
                  <Img fluid={aktualnosc.obraz.fluid}
                    objectFit="contain"
                    alt={aktualnosc.obraz.title}
                  />}
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
    </Layout >
  )
}

export default Rekrutacja