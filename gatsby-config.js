require("dotenv").config({
  path: `.env`,
});

const { siteMetadata } = require("./jpgs-config");
const prismicHtmlSerializer = require("./src/gatsby/html-serializer");

module.exports = {
  siteMetadata: {
    ...siteMetadata,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `${process.env.REPO}`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: require("./src/functions/linkResolver").linkResolver,
        schemas: {
          page: require("./src/schemas/page.json"),
          homepage: require("./src/schemas/homepage.json"),
        },
        lang: "en-us",
      },
    },
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    "gatsby-plugin-layouts",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
  ],
};
