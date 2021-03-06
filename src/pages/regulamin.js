import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const Regulamin = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulInformacjeDodatkoweOPrzedszkolu {
      edges {
        node {
          godzinyOtwarcia
          mail
          telefon
          title
          adres {
            adres
          }
          subtitle {
            subtitle
          }
          regulamin {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }`)

  const regulaminHTML = data.allContentfulInformacjeDodatkoweOPrzedszkolu.edges[0].node.regulamin.childMarkdownRemark.html

  return (
    <Layout>
      <SEO title="Regulamin" />

      <div className="container regulamin" dangerouslySetInnerHTML={{ __html: regulaminHTML }}>
      </div>

    </Layout>
  )
}

export default Regulamin