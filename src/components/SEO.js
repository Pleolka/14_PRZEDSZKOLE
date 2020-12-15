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
            <meta name="description" content="Przedszkole nr 8 im Jana Pawła II sióstr Serafitek w Oświęcimiu. Przedszkole publiczne, prowadzone przez siostry Serafitki." />
            <meta name="keywords" content="przedszkole, siostry Serafitki, Oświęcim" />
            <meta name="author" content="IKS Aleksandra Fabian" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="gUbSEF72kZU0qz9dC3idEgcGt-51c9wa2x732g-AyC8" />
        </Helmet>
    )
}

export default Head

//Przedszkole nr 8 im. Jana Pawła II w Oświęcimiu