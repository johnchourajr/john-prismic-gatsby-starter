import React from "react";
import Helmet from "react-helmet";

export const siteMetadata = {
  siteUrl: "https://jpgs.john.design/",
  siteTitle: "john-prismic-gatsby-starter",
  description: "john-prismic-gatsby-starter",
  short_name: "JPGS",
  author: "John Choura",
  og: "",
};

/**
 * Head component
 *
 * @param {Object} props
 */
function Head({ context }) {
  const title = `${siteMetadata.siteTitle}`;

  return (
    <Helmet
      title={title}
      meta={[
        // Basics
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=yes",
        },
        { name: "title", content: title },
        { name: "description", content: siteMetadata.description },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteMetadata.siteUrl },
        { property: "og:description", content: siteMetadata.description },
        {
          property: "og:image",
          content: `${siteMetadata.siteUrl}${siteMetadata.og}`,
        },
        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: siteMetadata.siteUrl },
        { property: "twitter:description", content: siteMetadata.description },
        {
          property: "twitter:image",
          content: `${siteMetadata.siteUrl}${siteMetadata.og}`,
        },
      ]}
    />
  );
}

export default Head;
