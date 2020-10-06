/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Przedszkole nr 8 im. Jana Pawła II',
    author: 'IKS Aleksandra Fabian',
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Francois One`,
            subsets: [`latin`]
          },
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    },



  ],
}
