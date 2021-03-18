import React from 'react';
import { graphql } from 'gatsby';

import { Wrapper } from '../components/layout-components';
import PageHeader from '../components/page-header';
import styled from 'styled-components';
import LinkExternal from '../components/link-external';

/**
 * page-template Component
 *
 * @param {Object} props
 * @param {Object} props.data
 */
export default function Template({
  data: {
    prismicPage: { data }
  }
}) {
  return (
    <>
      <PageHeader title={data.title} />
      <Grid>
        <h4>
          Hey there, this is{' '}
          <LinkExternal
            blank
            href="https://github.com/johnchourajr/john-prismic-gatsby-starter"
          >
            john-prismic-gatsby-starter
          </LinkExternal>
          , a starter that I use for a lot of projects.
        </h4>
        <br />
        <h5>What does it do?</h5>
        <p>
          Lots! It sets up a basic Gatsby site that uses Prismic as the headless
          CMS. All pages are generated based on CMS entries. It also includes
          some goodies that I use a lot. For instance, Framer Motion, for motion
          goodness in the Nav, Box, MotionScroll components. Plus some other
          Gatsby-Prismic helper components like ImageBox, VideoBox, Link, and
          LinkExternal.
        </p>
      </Grid>
    </>
  );
}

const Grid = styled(Wrapper)`
  h1,
  h2,
  h3,
  h4 {
    max-width: 20em;
  }

  p {
    max-width: 35em;
  }
`;

/**
 * pageQuery
 */
export const pageQuery = graphql`
  query HomePage($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title
      }
    }
  }
`;
