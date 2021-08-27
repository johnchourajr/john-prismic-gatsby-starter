require("dotenv").config({
  path: `.env`,
});

const prismicHtmlSerializer = require("./src/gatsby/html-serializer");

/**
 * SAMPLE .env file

PRISMIC_REPO=
PRISMIC_API_KEY=""

 */

module.exports = {
  siteMetadata: {
    title: "john-prismic-gatsby-starter",
    short_name: "JPGS",
    description: "john-prismic-gatsby-starter",
    siteUrl: "https://jpgs.john.design/",
    author: "John Choura",
    ogImage: "",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: require("./src/functions/linkResolver").linkResolver,
        htmlSerializer: () => prismicHtmlSerializer,
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
        title: "john-prismic-gatsby-starter",
        short_name: "john-prismic-gatsby-starter",
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
