import React from 'react';
import { graphql } from 'gatsby';

import { Wrapper } from '../components/layout-components';
import PageHeader from '../components/page-header';
import styled from 'styled-components';

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
      <Grid></Grid>
    </>
  );
}

const Grid = styled(Wrapper)``;

/**
 * pageQuery
 */
export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title
      }
    }
  }
`;
