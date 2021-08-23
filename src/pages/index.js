import React from "react";
import { graphql } from "gatsby";

import { Wrapper } from "../components/globals/wrappers";
import PageHeader from "../components/globals/header";
import styled from "styled-components";
import Box from "../components/motion/motion-box";
import RichText from "../components/helpers/rich-text";

/**
 * page-template Component
 *
 * @param {Object} props
 * @param {Object} props.data
 */
export function HomeTemplate({
  data: {
    prismicHomepage: { data },
  },
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
  query HomePageTemplate {
    prismicHomepage {
      uid
      url
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

export default HomeTemplate;
