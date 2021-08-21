import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../../jpgs-config';

export const meta = {
  siteUrl: siteMetadata.siteUrl,
  siteTitle: siteMetadata.title,
  description: siteMetadata.description,
  og: siteMetadata.ogImage
};

/**
 * Head component
 *
 * @param {Object} props
 */
function Head({ pageContext }) {
  const title = `${meta.siteTitle} ${
    pageContext.title && `— ${pageContext.title}`
  }`;

  console.log(pageContext);

  return (
    <Helmet
      title={title}
      meta={[
        // Basics
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=yes'
        },
        { name: 'title', content: title },
        { name: 'description', content: meta.description },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: meta.siteUrl },
        { property: 'og:title', content: title },
        { property: 'og:description', content: meta.description },
        { property: 'og:image', content: `${meta.siteUrl}${meta.og}` },
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: meta.siteUrl },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: meta.description },
        { property: 'twitter:image', content: `${meta.siteUrl}${meta.og}` }
      ]}
    />
  );
}

export default Head;
