import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import { Wrapper } from '../components/layout-components';
import PageHeader from '../components/page-header';
import styled from 'styled-components';
import Box from '../components/john-motion/motion-box';

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
      <PageHeader title={data.headline ? data.headline : data.title} />
      <Grid>
        <Box>
          <RichText render={data.body.raw} />
        </Box>
      </Grid>
    </>
  );
}

const Grid = styled(Wrapper)`
  max-width: 100%;

  @media ${(props) => props.theme.device.laptop} {
    max-width: 50%;
  }
`;

/**
 * pageQuery
 */
export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title
        headline
        body {
          raw
          text
          html
        }
      }
    }
  }
`;
