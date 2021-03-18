require('dotenv').config({
  path: `.env`
});

const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer');

module.exports = {
  siteMetadata: {
    title: `prismic-gatsby-starter`,
    description: `prismic-gatsby-starter`,
    siteUrl: 'https://prismic-gatsby.john.design'
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'john-prismic-gatsby-starter',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => (post) => `/${post.uid}`,
        htmlSerializer: () => prismicHtmlSerializer,
        schemas: {
          page: require('./src/schemas/page.json')
        },
        lang: '*'
      }
    },
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `prismic-gatsby-starter`,
        short_name: `prismic-gatsby-starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    'gatsby-plugin-layouts',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`
  ]
};