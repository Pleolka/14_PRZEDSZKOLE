import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} >
            <html lang="pl" />
            <meta charset="utf-8" />
            <title>Przedszkole nr 8 im. Jana Pawła II w Oświęcimiu</title>
            <meta name="description" content="Przedszkole" />
            <meta name="keywords" content="przedszkole" />
            <meta name="author" content="IKS Aleksandra Fabian" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
    )
}

export default Head