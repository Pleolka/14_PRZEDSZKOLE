/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'Przedszkole nr 8 im. Jana Pawła II',
    author: 'IKS Aleksandra Fabian',
    siteUrl: `https://www.przedszkoleoswiecim.com.pl`,
  },

  /* Your site config here */
  plugins: [
    /* npm install --global gatsby-cli */

    /* HELMET - ustawinia head dla stron statycznych
    ** instalacja: npm i gatsby-react-helmet react-helmet
    */
    'gatsby-plugin-react-helmet',

    /* SASS - SCSS
    ** npm install --save node-sass gatsby-plugin-sass
    */
    'gatsby-plugin-sass',

    /* SHARP
    npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
    */
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,

    /* GATSBY FILE SYSTEM 
    zapytania graphql do plików systemowych
    npm install --save gatsby-source-filesystem
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },

    /*GATSBY IMAGE 
    wymagana wcześniej instalacja sharp i source system
    nietrzeba nic dopisywac w pluginach
    npm install --save gatsby-image
    npm install --save gatsby-background-image
    */

    /* BACKGROUND IMAGE
    npm install --save gatsby-background-image
    */

    /*GATSBY PLAYGROUND
    npm install --save gatsby-plugin-playground
    */
    `gatsby-plugin-playground`,

    /* FONT AWSOME
    npm i --save gatsby react react-dom
    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/react-fontawesome
    npm install --save gatsby-plugin-fontawesome-css
    */
    `gatsby-plugin-fontawesome-css`,

    /*GOOGLE FONT
    npm install --save gatsby-plugin-prefetch-google-fonts 
    */
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Francois One`,
          `Roboto`
        ],
        display: 'swap'
      },
    },

    /*YAML
    npm install gatsby-transformer-yaml
    */
    `gatsby-transformer-yaml`,

    /* CONTENTFUL 
    npm install gatsby-source-contentful
    */
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },

    /*CONTENTFUL RICH TEXT 
    npm install @contentful/rich-text-react-renderer
    */
    '@contentful/gatsby-transformer-contentful-richtext',

    /* REMARK 
    npm install gatsby-transformer-remark
    npm install remark-grid-tables
    */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [

        ],
      },
    },

    /* COOKIE
    npm install --save gatsby-plugin-gdpr-cookies
    npm install --save react-cookie-consent
    */
    {
      resolve: `gatsby-plugin-gdpr-cookies`,

    },

    /* SITE MAP
    npm install gatsby-plugin-sitemap
    */
    `gatsby-plugin-sitemap`,


    /* ROBOTS TXT
    npm install --save gatsby-plugin-robots-txt
    */
    'gatsby-plugin-robots-txt',

  ],
}
