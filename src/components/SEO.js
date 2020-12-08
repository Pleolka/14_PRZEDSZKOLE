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
        <Helmet>
            <html lang="pl" />
            <meta charset="utf-8" />
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content="Przedszkole" />
            <meta name="keywords" content="przedszkole" />
            <meta name="author" content="IKS Aleksandra Fabian" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
    )
}

export default Head

//Przedszkole nr 8 im. Jana Pawła II w Oświęcimiu